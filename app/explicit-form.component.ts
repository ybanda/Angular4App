import {Component} from '@angular/core';
import {FormControl,FormGroup,Validators,FormBuilder} from '@angular/forms';
import {UsernameValidators} from './usernameValidators';
@Component({
    selector:'explicit-form',
    templateUrl:'app/html/explicit-form.template.html',
    styleUrls:['assets/styles/styles.css']
})
export class ExplicitFormComponent{
    // form = new FormGroup({
    //     username:new FormControl('',Validators.required),
    //     password: new FormControl('',Validators.required)
    // });
    form:FormGroup;
    constructor(fb:FormBuilder){
    this.form = fb.group({
            username:['',Validators.compose(
                        [Validators.required, 
                        UsernameValidators.cannotContainSpace,
                        UsernameValidators.shouldBeUnique])],
            password:['',Validators.required]
        })
    }

signUp(){
    console.log(this.form.value);
}
log(x){
        console.log(x);
        console.log(this.form.value);
    }
}