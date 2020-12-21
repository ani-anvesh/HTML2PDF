import { Component } from '@angular/core';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'html2pdf';

  download() {
    var element = document.getElementById('page1')!;
    var doc = new jspdf();
    html2canvas(element)
      .then((canvas) => {
        console.log('hai');
        var imgData = canvas.toDataURL('image/png');
        var width = doc.internal.pageSize.getWidth();
        var imageHeight = (canvas.height * width) / canvas.width;
        doc.addImage(imgData, 0, 0, width, imageHeight);
        // doc.save('image.pdf');
      })
      .then(function () {
        var elements = document.getElementById('page2')!;
        html2canvas(elements)
          .then((canvas) => {
            console.log('hai');
            doc.addPage();
            var imgData = canvas.toDataURL('image/png');
            var imageHeight = (canvas.height * 212) / canvas.width;
            doc.addImage(imgData, 0, 0, 212, imageHeight);
            //doc.save('image.pdf');
          })
          .then(function () {
            var elements = document.getElementById('page3')!;
            html2canvas(elements)
              .then((canvas) => {
                console.log('hai');
                doc.addPage();
                var imgData = canvas.toDataURL('image/png');
                var imageHeight = (canvas.height * 212) / canvas.width;
                doc.addImage(imgData, 0, 0, 212, imageHeight);
                // doc.save('image.pdf');
              })
              .then(function () {
                var elements = document.getElementById('page4')!;
                html2canvas(elements).then((canvas) => {
                  console.log('hai');
                  doc.addPage();
                  var imgData = canvas.toDataURL('image/png');
                  var imageHeight = (canvas.height * 212) / canvas.width;
                  doc.addImage(imgData, 0, 0, 212, imageHeight);
                  doc.save('image.pdf');
                });
              });
          });
      });
  }
}
