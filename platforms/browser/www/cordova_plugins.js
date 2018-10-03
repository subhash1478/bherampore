cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.razorpay.cordova/www/RazorpayCheckout.js",
        "id": "com.razorpay.cordova.RazorpayCheckout",
        "pluginId": "com.razorpay.cordova",
        "clobbers": [
            "RazorpayCheckout"
        ]
    },
    {
        "file": "plugins/com.razorpay.cordova/src/browser/CheckoutProxy.js",
        "id": "com.razorpay.cordova.CheckoutProxy",
        "pluginId": "com.razorpay.cordova",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-camera/www/CameraConstants.js",
        "id": "cordova-plugin-camera.Camera",
        "pluginId": "cordova-plugin-camera",
        "clobbers": [
            "Camera"
        ]
    },
    {
        "file": "plugins/cordova-plugin-camera/www/CameraPopoverOptions.js",
        "id": "cordova-plugin-camera.CameraPopoverOptions",
        "pluginId": "cordova-plugin-camera",
        "clobbers": [
            "CameraPopoverOptions"
        ]
    },
    {
        "file": "plugins/cordova-plugin-camera/www/Camera.js",
        "id": "cordova-plugin-camera.camera",
        "pluginId": "cordova-plugin-camera",
        "clobbers": [
            "navigator.camera"
        ]
    },
    {
        "file": "plugins/cordova-plugin-camera/src/browser/CameraProxy.js",
        "id": "cordova-plugin-camera.CameraProxy",
        "pluginId": "cordova-plugin-camera",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-device/www/device.js",
        "id": "cordova-plugin-device.device",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/src/browser/DeviceProxy.js",
        "id": "cordova-plugin-device.DeviceProxy",
        "pluginId": "cordova-plugin-device",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-facebook4/www/facebook-browser.js",
        "id": "cordova-plugin-facebook4.FacebookConnectPluginBrowser",
        "pluginId": "cordova-plugin-facebook4",
        "clobbers": [
            "facebookConnectPlugin"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/DirectoryEntry.js",
        "id": "cordova-plugin-file.DirectoryEntry",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.DirectoryEntry"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/DirectoryReader.js",
        "id": "cordova-plugin-file.DirectoryReader",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.DirectoryReader"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/Entry.js",
        "id": "cordova-plugin-file.Entry",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.Entry"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/File.js",
        "id": "cordova-plugin-file.File",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.File"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/FileEntry.js",
        "id": "cordova-plugin-file.FileEntry",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.FileEntry"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/FileError.js",
        "id": "cordova-plugin-file.FileError",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.FileError"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/FileReader.js",
        "id": "cordova-plugin-file.FileReader",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.FileReader"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/FileSystem.js",
        "id": "cordova-plugin-file.FileSystem",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.FileSystem"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/FileUploadOptions.js",
        "id": "cordova-plugin-file.FileUploadOptions",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.FileUploadOptions"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/FileUploadResult.js",
        "id": "cordova-plugin-file.FileUploadResult",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.FileUploadResult"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/FileWriter.js",
        "id": "cordova-plugin-file.FileWriter",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.FileWriter"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/Flags.js",
        "id": "cordova-plugin-file.Flags",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.Flags"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/LocalFileSystem.js",
        "id": "cordova-plugin-file.LocalFileSystem",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.LocalFileSystem"
        ],
        "merges": [
            "window"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/Metadata.js",
        "id": "cordova-plugin-file.Metadata",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.Metadata"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/ProgressEvent.js",
        "id": "cordova-plugin-file.ProgressEvent",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.ProgressEvent"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/fileSystems.js",
        "id": "cordova-plugin-file.fileSystems",
        "pluginId": "cordova-plugin-file"
    },
    {
        "file": "plugins/cordova-plugin-file/www/requestFileSystem.js",
        "id": "cordova-plugin-file.requestFileSystem",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.requestFileSystem"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/resolveLocalFileSystemURI.js",
        "id": "cordova-plugin-file.resolveLocalFileSystemURI",
        "pluginId": "cordova-plugin-file",
        "merges": [
            "window"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/browser/isChrome.js",
        "id": "cordova-plugin-file.isChrome",
        "pluginId": "cordova-plugin-file",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-file/www/browser/Preparing.js",
        "id": "cordova-plugin-file.Preparing",
        "pluginId": "cordova-plugin-file",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-file/src/browser/FileProxy.js",
        "id": "cordova-plugin-file.browserFileProxy",
        "pluginId": "cordova-plugin-file",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-file/www/fileSystemPaths.js",
        "id": "cordova-plugin-file.fileSystemPaths",
        "pluginId": "cordova-plugin-file",
        "merges": [
            "cordova"
        ],
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-file/www/browser/FileSystem.js",
        "id": "cordova-plugin-file.firefoxFileSystem",
        "pluginId": "cordova-plugin-file",
        "merges": [
            "window.FileSystem"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file-transfer/www/FileTransferError.js",
        "id": "cordova-plugin-file-transfer.FileTransferError",
        "pluginId": "cordova-plugin-file-transfer",
        "clobbers": [
            "window.FileTransferError"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file-transfer/www/FileTransfer.js",
        "id": "cordova-plugin-file-transfer.FileTransfer",
        "pluginId": "cordova-plugin-file-transfer",
        "clobbers": [
            "window.FileTransfer"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file-transfer/www/browser/FileTransfer.js",
        "id": "cordova-plugin-file-transfer.BrowserFileTransfer",
        "pluginId": "cordova-plugin-file-transfer",
        "clobbers": [
            "window.FileTransfer"
        ]
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/BaseClass.js",
        "id": "cordova-plugin-googlemaps.BaseClass",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/BaseArrayClass.js",
        "id": "cordova-plugin-googlemaps.BaseArrayClass",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/LatLng.js",
        "id": "cordova-plugin-googlemaps.LatLng",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/LatLngBounds.js",
        "id": "cordova-plugin-googlemaps.LatLngBounds",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/VisibleRegion.js",
        "id": "cordova-plugin-googlemaps.VisibleRegion",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/Location.js",
        "id": "cordova-plugin-googlemaps.Location",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/CameraPosition.js",
        "id": "cordova-plugin-googlemaps.CameraPosition",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/Polyline.js",
        "id": "cordova-plugin-googlemaps.Polyline",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/Polygon.js",
        "id": "cordova-plugin-googlemaps.Polygon",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/Marker.js",
        "id": "cordova-plugin-googlemaps.Marker",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/HtmlInfoWindow.js",
        "id": "cordova-plugin-googlemaps.HtmlInfoWindow",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/Circle.js",
        "id": "cordova-plugin-googlemaps.Circle",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/TileOverlay.js",
        "id": "cordova-plugin-googlemaps.TileOverlay",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/GroundOverlay.js",
        "id": "cordova-plugin-googlemaps.GroundOverlay",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/Common.js",
        "id": "cordova-plugin-googlemaps.Common",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/encoding.js",
        "id": "cordova-plugin-googlemaps.encoding",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/spherical.js",
        "id": "cordova-plugin-googlemaps.spherical",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/poly.js",
        "id": "cordova-plugin-googlemaps.poly",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/Geocoder.js",
        "id": "cordova-plugin-googlemaps.Geocoder",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/LocationService.js",
        "id": "cordova-plugin-googlemaps.LocationService",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/Map.js",
        "id": "cordova-plugin-googlemaps.Map",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/event.js",
        "id": "cordova-plugin-googlemaps.event",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/MapTypeId.js",
        "id": "cordova-plugin-googlemaps.MapTypeId",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/KmlOverlay.js",
        "id": "cordova-plugin-googlemaps.KmlOverlay",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/KmlLoader.js",
        "id": "cordova-plugin-googlemaps.KmlLoader",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/Environment.js",
        "id": "cordova-plugin-googlemaps.Environment",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/MarkerCluster.js",
        "id": "cordova-plugin-googlemaps.MarkerCluster",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/Cluster.js",
        "id": "cordova-plugin-googlemaps.Cluster",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/geomodel.js",
        "id": "cordova-plugin-googlemaps.geomodel",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/commandQueueExecutor.js",
        "id": "cordova-plugin-googlemaps.commandQueueExecutor",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/pluginInit.js",
        "id": "cordova-plugin-googlemaps.pluginInit",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/CordovaGoogleMaps.js",
        "id": "cordova-plugin-googlemaps.CordovaGoogleMaps",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/StreetViewPanorama.js",
        "id": "cordova-plugin-googlemaps.StreetViewPanorama",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/Overlay.js",
        "id": "cordova-plugin-googlemaps.Overlay",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
        "id": "cordova-plugin-inappbrowser.inappbrowser",
        "pluginId": "cordova-plugin-inappbrowser",
        "clobbers": [
            "cordova.InAppBrowser.open",
            "window.open"
        ]
    },
    {
        "file": "plugins/cordova-plugin-inappbrowser/src/browser/InAppBrowserProxy.js",
        "id": "cordova-plugin-inappbrowser.InAppBrowserProxy",
        "pluginId": "cordova-plugin-inappbrowser",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-x-toast/www/Toast.js",
        "id": "cordova-plugin-x-toast.Toast",
        "pluginId": "cordova-plugin-x-toast",
        "clobbers": [
            "window.plugins.toast"
        ]
    },
    {
        "file": "plugins/onesignal-cordova-plugin/www/OneSignal.js",
        "id": "onesignal-cordova-plugin.OneSignal",
        "pluginId": "onesignal-cordova-plugin",
        "clobbers": [
            "OneSignal"
        ]
    },
    {
        "file": "plugins/uk.co.workingedge.phonegap.plugin.launchnavigator/www/common.js",
        "id": "uk.co.workingedge.phonegap.plugin.launchnavigator.Common",
        "pluginId": "uk.co.workingedge.phonegap.plugin.launchnavigator",
        "clobbers": [
            "launchnavigator"
        ]
    },
    {
        "file": "plugins/uk.co.workingedge.phonegap.plugin.launchnavigator/www/localforage.v1.5.0.min.js",
        "id": "uk.co.workingedge.phonegap.plugin.launchnavigator.LocalForage",
        "pluginId": "uk.co.workingedge.phonegap.plugin.launchnavigator",
        "clobbers": [
            "localforage"
        ]
    },
    {
        "file": "plugins/com.telerik.plugins.nativepagetransitions/www/NativePageTransitions.js",
        "id": "com.telerik.plugins.nativepagetransitions.NativePageTransitions",
        "pluginId": "com.telerik.plugins.nativepagetransitions",
        "clobbers": [
            "window.plugins.nativepagetransitions"
        ]
    },
    {
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "file": "plugins/cordova-plugin-splashscreen/src/browser/SplashScreenProxy.js",
        "id": "cordova-plugin-splashscreen.SplashScreenProxy",
        "pluginId": "cordova-plugin-splashscreen",
        "runs": true
    },
    {
        "file": "plugins/es6-promise-plugin/www/promise.js",
        "id": "es6-promise-plugin.Promise",
        "pluginId": "es6-promise-plugin",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-x-socialsharing/www/SocialSharing.js",
        "id": "cordova-plugin-x-socialsharing.SocialSharing",
        "pluginId": "cordova-plugin-x-socialsharing",
        "clobbers": [
            "window.plugins.socialsharing"
        ]
    },
    {
        "file": "plugins/cordova-plugin-accountkit/src/browser/AccountKitPluginProxy.js",
        "id": "cordova-plugin-accountkit.AccountKitPluginProxy",
        "pluginId": "cordova-plugin-accountkit",
        "clobbers": [
            "AccountKitPlugin"
        ],
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-accountkit/src/browser/AccountKitOnInteractive.js",
        "id": "cordova-plugin-accountkit.AccountKit_OnInteractive",
        "pluginId": "cordova-plugin-accountkit",
        "clobbers": [
            "AccountKit_OnInteractive"
        ],
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-accountkit/src/browser/AccountKitSDK.js",
        "id": "cordova-plugin-accountkit.AccountKitSDK",
        "pluginId": "cordova-plugin-accountkit",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-sms/www/SMS.js",
        "id": "cordova-plugin-sms.SMS",
        "pluginId": "cordova-plugin-sms",
        "clobbers": [
            "window.SMS"
        ]
    },
    {
        "file": "plugins/cordova-plugin-android-permissions/www/permissions-dummy.js",
        "id": "cordova-plugin-android-permissions.Permissions",
        "pluginId": "cordova-plugin-android-permissions",
        "clobbers": [
            "cordova.plugins.permissions"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.razorpay.cordova": "0.16.1",
    "cordova-plugin-camera": "4.0.3",
    "cordova-plugin-device": "2.0.2",
    "cordova-plugin-facebook4": "2.2.0",
    "cordova-plugin-file": "6.0.1",
    "cordova-plugin-file-transfer": "1.7.1",
    "cordova-plugin-geolocation": "4.0.1",
    "cordova-plugin-googlemaps": "2.3.10",
    "cordova-plugin-inappbrowser": "3.0.0",
    "cordova-plugin-ionic-keyboard": "2.1.2",
    "cordova-plugin-whitelist": "1.3.3",
    "cordova-plugin-x-toast": "2.6.2",
    "onesignal-cordova-plugin": "2.4.2",
    "uk.co.workingedge.phonegap.plugin.launchnavigator": "4.2.2",
    "com.telerik.plugins.nativepagetransitions": "0.6.5",
    "cordova-plugin-splashscreen": "5.0.2",
    "es6-promise-plugin": "4.2.2",
    "cordova-plugin-x-socialsharing": "5.4.1",
    "cordova-plugin-accountkit": "1.4.0",
    "cordova-plugin-sms": "1.0.5",
    "cordova-plugin-android-permissions": "1.0.0"
}
// BOTTOM OF METADATA
});