/// <reference path='treatFactory.ts'/>

class Board {
	
	private treat: Treat;

	
	public constructor(private sizeProperties: SizeProperties, private treatFactory: TreatFactory) {
		this.updateTreat(true);
	}
	
	public updateTreat(force: boolean) {

		if (force) {
			this.treat = this.treatFactory.setRandomPosition(this.getSizeProperties()).getRandomTreatType().build()
		} 
	}
	
	public getSizeProperties() : SizeProperties {
		return this.sizeProperties;
	}
	
	public getTreat() : Treat {
		return this.treat;
	} 
}

interface SizeProperties {
	width: number;
	height: number;
}

interface Treat {
	x: number;
	y: number;
	size: number;
}

