import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {sleep} from '@/utils/helpers';

;import {GoogleAuthProvider, User} from 'firebase/auth';
import {environment} from "../../environments/environment";
import {Auth, getAuth} from "@angular/fire/auth";
import {AngularFireAuth} from "@angular/fire/compat/auth";

const provider = new GoogleAuthProvider();

@Injectable({
    providedIn: 'root'
})
export class AppService {
    public user?: User | null = null;

    constructor(
        private router: Router,
        private toastr: ToastrService,
        private auth : AngularFireAuth
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
            //this.auth.sendEmailVerification({url : ''});
            this.router.navigate(['/']);
            return result;
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
            if(this.user?.email===null){
              this.toastr.error('Email is null');
              return ;
            }
            if(this.user?.emailVerified===true){
              this.loginSuccess();
              this.router.navigate(['/']);
            }else if(this.user?.emailVerified===false && environment.FIREBASE_CONFIG===null){
              this.loginSuccess();
              this.router.navigate(['/']);
            }else{
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
            this.router.navigate(['/']);
            this.loginSuccess();
            return result;
        } catch (error) {
            this.toastr.error(error.message);
        }
    }

    async getProfile() {
            await sleep(500);
            await this.auth.currentUser.then(
              (user)=>{
                if (user) {
                  this.user = user;
                } else {
                  this.logout();
                }
              }
            ).catch(
              (error)=>{
                this.logout();
                this.toastr.error(error.message);
              }
            );

    }

    async logout() {
        await this.auth.signOut();
        this.user = null;
        sessionStorage.removeItem('currentUser');
        this.router.navigate(['/login']);
    }

    loginSuccess(){
      sessionStorage.setItem('currentUser',JSON.stringify(this.user))
    }
}
