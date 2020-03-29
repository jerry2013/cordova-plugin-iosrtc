/**
 * Expose the RTCRtpReceiver class.
 */
module.exports = RTCRtpReceiver;
window.RTCRtpReceiver = RTCRtpReceiver;

function RTCRtpReceiver(data) {
	data = data || {};

	this.track = data.track;
}
