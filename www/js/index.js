/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var compressjs = require('compressjs');

var app = {
    // Application Constructor
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function () {
        this.receivedEvent('vdo-player1');

        var videoFilePath = cordova.file.externalRootDirectory + 'Pictures/newfile.mp4';
        var folderPath = cordova.file.externalRootDirectory + 'Pictures';
        var fileName = 'newfile.mp4';

        var nativeFilePath = cordova.file.externalRootDirectory + 'Pictures/testbase64.mp4';

        var options = { dimBackground: true };
        SpinnerPlugin.activityStart("Loading...", options);

        var date = new Date();
        var startTime = date.getTime();

        // var compressjs = require('compressjs');
        console.log(compressjs);

        if (device.platform === 'Android') {
            var permissions = cordova.plugins.permissions;
            console.log(permissions);
            permissions.checkPermission(permissions.READ_EXTERNAL_STORAGE, function (result) {
                console.log('Has permission?', result.hasPermission)
            }, function (error) {
                console.log(error);
            });

            permissions.requestPermissions([permissions.READ_EXTERNAL_STORAGE, permissions.WRITE_EXTERNAL_STORAGE],
                function (result) {
                    console.log(result);



                    // window.resolveLocalFileSystemURL(videoFilePath, function (fileEntry) {
                    //     console.log(videoFilePath);
                    //     fileEntry.file(function (file) {
                    //         var reader = new FileReader();

                    //         reader.onloadend = function (e) {
                    //             // console.log(this.result);
                    //             // console.log(atob(this.result));

                    //             var key = 'FbcCY2yCFBwVCUE9R+6kJ4fAL4BJxxjd';
                    //             var iv = 'e16ce913a20dadb8';

                    //             // var decrypted = CryptoJS.AES.decrypt(this.result, CryptoJS.enc.Utf8.parse(key), { iv: CryptoJS.enc.Utf8.parse(iv) });
                    //             // var videoData = decrypted.toString(CryptoJS.enc.Utf8);
                    //             // videoData = 'data:video/mp4;base64,' + videoData;

                    //             videoData = 'data:video/mp4;base64,' + this.result.substr(key.length);
                    //             console.log(videoData);

                    //             var x = document.createElement("VIDEO");

                    //             x.id = 'testVideo';

                    //             if (x.canPlayType("video/mp4")) {
                    //                 x.setAttribute("src", videoData);
                    //             } else {
                    //                 x.setAttribute("src", videoData);
                    //             }

                    //             x.setAttribute("width", "320");
                    //             x.setAttribute("height", "240");
                    //             x.setAttribute("controls", "controls");
                    //             x.setAttribute("autoplay", "autoplay");
                    //             x.setAttribute("playsinline", "playsinline");
                    //             x.setAttribute("webkit-playsinline", "webkit-playsinline");
                    //             document.getElementById('videoContent').appendChild(x);


                    //             var date1 = new Date();
                    //             var endTime = date1.getTime();

                    //             console.log(endTime - startTime);

                    //             x.onplay = function () {
                    //                 SpinnerPlugin.activityStop();
                    //             }

                    //             x.onended = function () {
                    //                 alert("The video has ended.\n Video source file will be automatically deleted.");
                    //                 document.getElementById('testVideo').style.display = 'none';
                    //                 window.resolveLocalFileSystemURL(folderPath, function (dir) {
                    //                     dir.getFile(fileName, { create: false }, function (fileEntry) {
                    //                         fileEntry.remove(function (result) {
                    //                             console.log('Video file deleted');
                    //                             console.log(result);
                    //                             navigator.app.exitApp();
                    //                             // The file has been removed succesfully
                    //                         }, function (error) {
                    //                             console.log(error);
                    //                             console.log('Can`t delete video file');
                    //                             // Error deleting the file
                    //                         }, function () {
                    //                             // The file doesn't exist
                    //                         });
                    //                     });
                    //                 });
                    //             };
                    //         }

                    //         reader.readAsText(file);
                    //     });

                    // }, function (fail) {
                    //     console.log("FileSystem Error");
                    //     console.dir(e);
                    // });





                },
                function (error) {
                    console.log(error);
                });

        }


    },

    // Update DOM on a Received Event
    receivedEvent: function (id) {
        var parentElement = document.getElementById(id);
        console.log(parentElement);

        console.log(cordova.file);

        console.log('Received Event: ' + id);
    }
};


app.initialize();