/*
YUI 3.18.1 (build f7e7bcb)
Copyright 2014 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/

YUI.add("queue-promote",function(e,t){e.mix(e.Queue.prototype,{indexOf:function(t){return e.Array.indexOf(this._q,t)},promote:function(e){var t=this.indexOf(e);t>-1&&this._q.unshift(this._q.splice(t,1)[0])},remove:function(e){var t=this.indexOf(e);t>-1&&this._q.splice(t,1)}})},"3.18.1",{requires:["yui-base"]});
