//Responsável por manipular o LocalStorage do navegador
class LocalStorageCache {
	constructor(key, xpirationInHours = 24) {
		this.localStorage = window.localStorage
		this.key = key
		this.xpirationInHours = xpirationInHours
		this.timeCache = this.getTime()
	}

	//fixME ver como lidar com o erro "Uncaught DOMException: Failed to execute 'setItem' on 'Storage': Setting the value of 'XYZ' exceeded the quota.
	setItems( items ) {
		try {
			this.localStorage.setItem(
				this.key,
				JSON.stringify({
					time: new Date().getTime(),
					items: items,
				})
			)
		} catch (e) {
			window.localStorage.clear()
			try {
				this.localStorage.setItem(
					this.key,
					JSON.stringify({
						time: new Date().getTime(),
						items: items,
					})
				)
			} catch (e) {
				console.log(e)
			}
		}
	}

	getItems() {
		if ( !this.timeCache ) {
			return null
		}
		return JSON.parse(this.localStorage.getItem(this.key)).items
	}

	getItemsIfNotExpired() {
		if( this.hasExpired() ){
			return null
		}
		return this.getItems()
	}

	getTime() {
		let cache = JSON.parse(this.localStorage.getItem(this.key))
		if (cache) {
			return cache.time
		}
		return null
	}

	hasExpired() {
		if ( !this.timeCache ) {
			return true
		}
		let hoursInMiliseconds = 3600000
		let diff = (new Date().getTime() - this.timeCache) / hoursInMiliseconds
		return diff > this.xpirationInHours
	}
}