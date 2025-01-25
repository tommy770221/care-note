import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {sleep} from '@/utils/helpers';

import {GoogleAuthProvider, User} from 'firebase/auth';
import {environment} from '../../environments/environment';
import {Auth, getAuth} from '@angular/fire/auth';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {FireStoreService} from '@services/fire-store.service';
import {delay, forkJoin, Observable} from "rxjs";

const provider = new GoogleAuthProvider();

@Injectable({
    providedIn: 'root'
})
export class AppService {
    public user?: User | null = null;

    constructor(
        private router: Router,
        private toastr: ToastrService,
        private auth: AngularFireAuth,
        private fireStoreService: FireStoreService
    ) {
        this.auth.onAuthStateChanged(
            (user) => {
                if (user) {
                    this.user = user;
                } else {
                    this.user = undefined;
                }
            },
            (e) => {
                this.user = undefined;
            }
        );
    }

    //todo i18n
    //todo error check
    //todo email verification
    async registerWithEmail(email: string, password: string) {
        try {
            const result = await this.auth.createUserWithEmailAndPassword(
                email,
                password
            );
            this.user = result.user;
            this.auth.authState.subscribe((user) => {
                if (user) {
                    user.sendEmailVerification({url: environment.host});
                    //todo create user in firestore
                    this.router.navigate(['/']);
                    return result;
                } else {
                    this.toastr.error('something went wrong');
                    this.logout();
                }
            });
        } catch (error) {
            this.toastr.error(error.message);
        }
    }

    async loginWithEmail(email: string, password: string) {
        try {
            const result = await this.auth.signInWithEmailAndPassword(
                email,
                password
            );
            this.user = result.user;
            if (this.user?.email === null) {
                this.toastr.error('Email is null');
                return;
            }
            if (this.user?.emailVerified === true) {
                this.loginSuccess();
                this.router.navigate(['/']);
            } else if (
                this.user?.emailVerified === false &&
                environment.FIREBASE_CONFIG === null
            ) {
                this.loginSuccess();
                this.router.navigate(['/']);
            } else {
                this.toastr.error('Please verify your email');
            }
            return result;
        } catch (error) {
            this.toastr.error(error.message);
        }
    }

    async signInByGoogle() {
        try {
            const result = await this.auth.signInWithPopup(provider);
            this.user = result.user;
            //todo create user in firestore
            this.loginSuccess();
            this.router.navigate(['/']);
            return result;
        } catch (error) {
            this.toastr.error(error.message);
        }
    }

    async getProfile() {
        await sleep(500);
        console.log('this.auth', this.auth);
        console.log('this.auth.user', this.auth.user);
        this.auth.authState.subscribe((user) => {
          console.log('user', user);
          if (user) {
            this.user = user;
          } else {
            this.logout();
            this.router.navigate(['/login']);
          }
          return;
        }, (error) => {
          console.log('error', error);
        });
        /*this.auth.user.subscribe((user) => {
            delay(1000);
            console.log('user', user);
            if (user) {
                this.user = user;
            } else {
                this.logout();
                this.router.navigate(['/login']);
            }
            return;
        });*/

    }

    async sendPasswordResetEmail(email: string) {
        console.log('email : ', email);
        this.auth.sendPasswordResetEmail(email);
    }

    async logout() {
        await this.auth.signOut();
        this.user = null;
        sessionStorage.removeItem('currentUser');
        this.router.navigate(['/login']);
    }

    loginSuccess() {
        sessionStorage.setItem('currentUser', JSON.stringify(this.user));
    }
}
