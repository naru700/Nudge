import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-finalround',
  templateUrl: './finalround.component.html',
  styleUrls: ['./finalround.component.scss']
})
export class FinalroundComponent {
  @ViewChild('screenVideo') screenVideo!: ElementRef<HTMLVideoElement>;

  micStream: MediaStream | null = null;
  micActive: boolean = false;

  startScreenShare() {
    navigator.mediaDevices.getDisplayMedia({ video: true }).then(stream => {
      this.screenVideo.nativeElement.srcObject = stream;

      stream.getVideoTracks()[0].addEventListener('ended', () => {
        this.screenVideo.nativeElement.srcObject = null;
        console.log('Screen sharing stopped.');
      });
    }).catch(err => {
      console.error('Error sharing screen:', err);
    });
  }

  toggleMicrophone() {
    if (this.micActive) {
      // Stop microphone
      this.micStream?.getTracks().forEach(track => track.stop());
      this.micStream = null;
      this.micActive = false;
    } else {
      // Start microphone
      navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
          this.micStream = stream;
          this.micActive = true;
          // You can process the audio stream here if needed
        })
        .catch(err => {
          console.error('Microphone access denied:', err);
          this.micActive = false;
        });
    }
  }
}
