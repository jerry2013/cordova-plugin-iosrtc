class StatsReport {
	constructor() {
		this.data = new Map((data || []).map((el) => [el.reportId, el]));
	}

	size = this.data.size;

	has = this.data.has;
	get = this.data.get;
	forEach = this.data.forEach;

	keys = this.data.keys;
	values = this.data.values;
	entries = this.data.entries;
	*[Symbol.iterator]() {
		for (const value of this.data) {
			yield value;
		}
	}
}

/**
 * Expose the RTCStatsReport class.
 */
module.exports = RTCStatsReport;
