/**
 * Expose the RTCRtpSender class.
 */
module.exports = RTCRtpSender;
window.RTCRtpSender = RTCRtpSender;

function RTCRtpSender(data) {
	data = data || {};

	this.track = data.track;
}