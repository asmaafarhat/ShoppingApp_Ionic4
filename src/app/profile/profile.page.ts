import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MustMatch } from '../must-match';
import { Base64 } from '@ionic-native/base64/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  titel = 'Profile';
  xxx = '../../assets/profile.png';
  @ViewChild('template', { static: true }) temp;
  editForm: any;
  profilePhoto: string = null;
  passwordForm: FormGroup;
  imageURI: any = null;
  userPhoto: string;
  userImage: string;
  imgURL: any;
  imgbase64: any;
  isEdit = false;
  image: any = null;

  constructor(private modalService: BsModalService,
    private fb: FormBuilder,
    private camera: Camera,
    private base64: Base64,
  ) {

    this.editForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      phoneNumber: new FormControl(''),
      email: new FormControl(''),
    });

  }

  modalRef: BsModalRef;
  template: TemplateRef<any>;

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    this.modalRef.setClass('editpasswordModal');
  }

  showModal() {
    setTimeout(() => {
      this.openModal(this.temp);
    }, 3000);
  }

  ngOnInit() {
    this.passwordForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    },
      {
        validator: MustMatch('password', 'confirmPassword')
      }
    );
  }

  ionViewWillEnter() {
    this.getMe();
  }


  getMe() {
    // local storage
    // console.log(this.editForm);
    this.editForm.controls['email'].setValue(localStorage.getItem('email'));
    this.editForm.controls['firstName'].setValue(localStorage.getItem('firstName'));
    this.editForm.controls['lastName'].setValue(localStorage.getItem('lastName'));
    this.editForm.controls['phoneNumber'].setValue(localStorage.getItem('phoneNumber'));
  }

  editMe() {
    let user = {};
    user['email'] = this.editForm.get('email').value;
    user['phoneNumber'] = this.editForm.get('phoneNumber').value;
    user['firstName'] = this.editForm.get('firstName').value;
    user['lastName'] = this.editForm.get('lastName').value;
    if (this.imgURL == null || this.imgURL == '') {
      user['photoUrl'] = this.profilePhoto;
    } else {
      user['photoUrl'] = this.imgURL;
    }
  }

  editPassword(template: TemplateRef<any>) {
    if (this.passwordForm.valid) {
      const newPassword = this.passwordForm.get('password').value;
      let user = {};
      user['phoneNumber'] = this.editForm.get('phoneNumber').value;
      user['email'] = this.editForm.get('email').value;
      user['password'] = newPassword;
      user['deviceId'] = localStorage.getItem('onesignal') ? localStorage.getItem('onesignal') : '';

      localStorage.setItem('userInfo', JSON.stringify(user));

      this.modalRef.hide();
    }


  }

  changePhoto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    };

    this.camera.getPicture(options).then(
      imageData => {
        this.imageURI = imageData;
        this.base64.encodeFile(this.imageURI).then((base64File: string) => {
          this.imgURL = base64File.replace("data:image/*;charset=utf-8;base64,",
            "data:image/png;base64,")
          this.userPhoto = "";
          this.isEdit = true;
        });
      },
      err => {
        console.log(err);
      }
    );
  }

}
