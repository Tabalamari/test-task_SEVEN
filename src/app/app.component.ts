import { ReadVarExpr } from '@angular/compiler';
import { Component } from '@angular/core';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    imageChangedEvent: any = '';
    croppedImage: any = '';

    fileChangeEvent(event: any): void {
        this.imageChangedEvent = event;
    }
    imageCropped(event: ImageCroppedEvent) {
        this.croppedImage = event.base64;
    }
    imageToLocalstorage(){
        // let image = {
        //     image: this.croppedImage.result
        // }
        console.log(this.croppedImage)
        localStorage.setItem('image', this.croppedImage)
    }




    imageLoaded(image: LoadedImage) {
        // show cropper
    }
    cropperReady() {
        // cropper ready
    }
    loadImageFailed() {
        // show message
    }



}
