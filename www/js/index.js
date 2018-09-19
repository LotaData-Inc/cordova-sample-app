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

function successCallback(message) {
    alert(message);
}

function errorCallback(errorMessage) {
    alert(errorMessage);
}

var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);

        var btnInitialize = document.getElementById('btnInitialize');
        var btnRecordEvent = document.getElementById('btnRecordEvent');
        var btnRecordEventWithData = document.getElementById('btnRecordEventWithData');
        var btnFgTrackingMode = document.getElementById('btnFgTrackingMode');
        var btnBgTrackingMode = document.getElementById('btnBgTrackingMode');
        var btnLocation = document.getElementById('btnLocation');

        btnInitialize.addEventListener('click', this.initMomentsSdk, false);
        btnRecordEvent.addEventListener('click', this.recordEvent, false);
        btnRecordEventWithData.addEventListener('click', this.recordEventWithData, false);
        btnFgTrackingMode.addEventListener('click', this.setFgTrackingMode, false);
        btnBgTrackingMode.addEventListener('click', this.setBgTrackingMode, false);
        btnLocation.addEventListener('click', this.getBestKnownLocation, false);

        console.log('Received Event: ' + id);
    }

    initMomentsSdk: function() {
        plugins.moments.initialize(successCallback, errorMessage);
    },

    recordEvent: function() {
        plugins.moments.recordEvent("an_event", null, function (msg) {
                alert(msg);
            }, function (msg) {
                alert(msg);
            }
        );
    },

    recordEventWithData: function() {
        plugins.moments.recordEvent("an_event", 3.0, function (msg) {
                alert(msg);
            }, function (msg) {
                alert(msg);
            }
        );
    },

    setFgTrackingMode: function() {
        var trackingMode = plugins.moments.TrackingMode.MINIMAL_POWER;
        plugins.moments.setFgTrackingMode(trackingMode, function (msg) {
                alert(msg);
            }, function (msg) {
                alert(msg);
            }
        );
    },

    setBgTrackingMode: function() {
        var trackingMode = plugins.moments.TrackingMode.STAY_DETECTION;
        plugins.moments.setBgTrackingMode(trackingMode, function (msg) {
                alert(msg);
            }, function (msg) {
                alert(msg);
            }
        );
    },

    getBestKnownLocation: function() {
        var defaultSuccess = function (msg) {
            alert(JSON.stringify(msg));
        };
        var defaultError = function (msg) {
            alert(msg);
        };
        plugins.moments.bestKnownLocation(defaultSuccess, defaultError);
    }
};

app.initialize();