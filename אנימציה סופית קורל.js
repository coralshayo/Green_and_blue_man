(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.שביל = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7B7B77").s().p("AgWAIIAAgPIAtAAIAAAPg");
	this.shape.setTransform(1561.5529,372.4269,1.3938,1.8836);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#43413D").s().p("Ag3AIIAAgPIBvAAIAAAPg");
	this.shape_1.setTransform(1559.9849,372.4269,1.3938,1.8836);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#202020").s().p("AiAAIIAAgPIEBAAIAAAPg");
	this.shape_2.setTransform(1553.3295,372.4269,1.3938,1.8836);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7B7B77").s().p("AgcAKIAAgTIA4AAIAAATg");
	this.shape_3.setTransform(1563.6088,375.5348,1.3938,1.8836);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#43413D").s().p("AhFAKIAAgTICKAAIAAATg");
	this.shape_4.setTransform(1561.6574,375.5348,1.3938,1.8836);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#202020").s().p("AihAKIAAgTIFDAAIAAATg");
	this.shape_5.setTransform(1553.3295,375.5348,1.3938,1.8836);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7B7B77").s().p("Ag/AgIAAg/IB/AAIAAA/g");
	this.shape_6.setTransform(1571.7973,382.3156,1.3938,1.8836);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#43413D").s().p("AiUAgIAAg/IEpAAIAAA/g");
	this.shape_7.setTransform(1566.0131,382.3156,1.3938,1.8836);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#202020").s().p("AkHAgIAAg/IIPAAIAAA/g");
	this.shape_8.setTransform(1553.225,382.3156,1.3938,1.8836);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#7B7B77").s().p("AgFAZIAAgxIALAAIAAAxg");
	this.shape_9.setTransform(1555.3156,42.6155,1.3938,1.8836);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#43413D").s().p("AgMAZIAAgxIAaAAIAAAxg");
	this.shape_10.setTransform(1554.9672,42.6155,1.3938,1.8836);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#202020").s().p("AgfAZIAAgxIA/AAIAAAxg");
	this.shape_11.setTransform(1553.3295,42.6155,1.3938,1.8836);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#7B7B77").s().p("AgGAtIAAhZIANAAIAABZg");
	this.shape_12.setTransform(1555.8732,54.482,1.3938,1.8836);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#43413D").s().p("AgQAtIAAhZIAhAAIAABZg");
	this.shape_13.setTransform(1555.3853,54.482,1.3938,1.8836);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#202020").s().p("AgnAtIAAhZIBPAAIAABZg");
	this.shape_14.setTransform(1553.3295,54.482,1.3938,1.8836);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#7B7B77").s().p("AgIAIIAAgPIARAAIAAAPg");
	this.shape_15.setTransform(1556.5352,204.8843,1.3938,1.8836);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#43413D").s().p("AgVAIIAAgPIAqAAIAAAPg");
	this.shape_16.setTransform(1555.8732,204.8843,1.3938,1.8836);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#202020").s().p("AgxAIIAAgPIBjAAIAAAPg");
	this.shape_17.setTransform(1553.3295,204.8843,1.3938,1.8836);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#7B7B77").s().p("AgKAKIAAgTIAVAAIAAATg");
	this.shape_18.setTransform(1557.3367,207.9921,1.3938,1.8836);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#43413D").s().p("AgaAKIAAgTIA1AAIAAATg");
	this.shape_19.setTransform(1556.5701,207.9921,1.3938,1.8836);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#202020").s().p("Ag+AKIAAgTIB9AAIAAATg");
	this.shape_20.setTransform(1553.3295,207.9921,1.3938,1.8836);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#7B7B77").s().p("AgJG6IAAtzIATAAIAANzg");
	this.shape_21.setTransform(1556.5114,292.1144,1.3939,1.8837);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#43413D").s().p("AgXG6IAAtzIAvAAIAANzg");
	this.shape_22.setTransform(1555.5357,292.1144,1.3939,1.8837);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#202020").s().p("AgqG6IAAtzIBVAAIAANzg");
	this.shape_23.setTransform(1553.4797,292.1144,1.3939,1.8837);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#7B7B77").s().p("AgDG6IAAtzIAHAAIAANzg");
	this.shape_24.setTransform(1554.3748,133.2148,1.3938,1.8836);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#43413D").s().p("AgIG6IAAtzIAQAAIAANzg");
	this.shape_25.setTransform(1554.0612,133.2148,1.3938,1.8836);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#202020").s().p("AgOG6IAAtzIAdAAIAANzg");
	this.shape_26.setTransform(1553.3295,133.2148,1.3938,1.8836);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FCF9F6").s().p("AhGAxQgNgFgEgVQgFgWAOgNQADgHARgLQAWgNAdgDQAigFAcAJQAeAJAEATQADAPgXAFQgkAEgYAGQgYAFgbARQgRALgIAAIgDAAg");
	this.shape_27.setTransform(1551.4923,11.0043,1.3938,1.8836);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#7B7B77").s().p("AgHAGIAAgLIAPAAIAAALg");
	this.shape_28.setTransform(1555.859,36.9574,1.3936,1.8832);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#43413D").s().p("AgTAGIAAgLIAnAAIAAALg");
	this.shape_29.setTransform(1555.3016,36.9574,1.3936,1.8832);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#202020").s().p("AguAGIAAgLIBdAAIAAALg");
	this.shape_30.setTransform(1552.8977,36.9574,1.3936,1.8832);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#7B7B77").s().p("AgDAYIAAgvIAIAAIAAAvg");
	this.shape_31.setTransform(1554.5351,41.1945,1.3936,1.8832);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#43413D").s().p("AgKAYIAAgvIAVAAIAAAvg");
	this.shape_32.setTransform(1554.1867,41.1945,1.3936,1.8832);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#202020").s().p("AgZAYIAAgvIAzAAIAAAvg");
	this.shape_33.setTransform(1552.8977,41.1945,1.3936,1.8832);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#7B7B77").s().p("AgCAoIAAhPIAFAAIAABPg");
	this.shape_34.setTransform(1553.908,47.2678,1.3936,1.8832);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#43413D").s().p("AgGAoIAAhPIANAAIAABPg");
	this.shape_35.setTransform(1553.699,47.2678,1.3936,1.8832);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#202020").s().p("AgPAoIAAhPIAfAAIAABPg");
	this.shape_36.setTransform(1552.8977,47.2678,1.3936,1.8832);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E0D7CC").s().p("AhcA1QgngdAAgnQAAgUAKgSIADAhQAKAkAiAPQAVALAngCQAogBAhgMQBYghgvhKQAgAcAAAlQAAAngnAdQgmAcg3AAQg2AAgmgcg");
	this.shape_37.setTransform(1553.3295,21.5668,1.3938,1.8836);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#EAE1D8").s().p("AhcBFQgngdAAgoQAAgnAngdQAmgdA2AAQA2AAAnAdQAnAdAAAnQAAAognAdQgnAdg2AAQg2AAgmgdg");
	this.shape_38.setTransform(1553.3295,18.4118,1.3938,1.8836);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#DACFC4").s().p("Ah6ABQA2gEBFAAQBFAAA1AEQg1ADhFAAQhFAAg2gDg");
	this.shape_39.setTransform(2319.0043,287.7819,1.3939,1.8837);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#E6DED6").s().p("AiDAMQg/gEABgHQgBgGA/gFQA8gFBKAAQBJAAA6AFQA8AFAAAGQAAAHg8AEQg3AEhMAAQhNAAg5gEg");
	this.shape_40.setTransform(2318.7952,285.5215,1.3939,1.8837);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FCF5ED").s().p("AiaAQQhAgHAAgJQAAgIBAgHQBAgGBaAAQBaAABAAGQBBAHAAAIQAAAJhBAHQhAAGhaAAQhaAAhAgGg");
	this.shape_41.setTransform(2319.1437,285.7569,1.3939,1.8837);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#E6DED6").s().p("AiaASQhAgGAAgJIAAgaIG1AAIAAAaQAAAJhAAGQhAAGhbAAQhaAAhAgGg");
	this.shape_42.setTransform(2319.1437,290.3249,1.3939,1.8837);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#E6DED6").s().p("AicAXQg+gNAAgMIAAgiQAAANA+AMQBFANBUAAQBVAABHgNQBCgNAAgMIAAAiQAAAMhCANQhGAOhWAAQhVAAhEgOg");
	this.shape_43.setTransform(2319.1437,391.1262,1.3939,1.8837);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#DACFC4").s().p("AgHEAQgDgEAAgEIAAnuQAAgFADgDQADgEAEABQAEgBAEAEQADADAAAFIAAHuQAAAEgDAEQgEACgEAAQgEAAgDgCg");
	this.shape_44.setTransform(2310.0834,338.2179,1.3939,1.8837);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#DACFC4").s().p("AgGD+QgDgDAAgFIAAnrQAAgFADgDQADgDADAAQAEAAADADQACADAAAFIAAHrQAAAFgCADQgDADgEAAQgDAAgDgDg");
	this.shape_45.setTransform(2303.6715,337.4173,1.3939,1.8837);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#DACFC4").s().p("AgFD9QgCgEAAgEIAAnpQAAgFACgDQACgDADAAQADAAADADQACADAAAFIAAHpQAAAEgCAEQgDADgDAAQgDAAgCgDg");
	this.shape_46.setTransform(2297.8869,336.6167,1.3939,1.8837);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#DACFC4").s().p("AgFD0IAAnnQAAgKAFAAQAHAAgBAKIAAHnQABAKgHAAQgFAAAAgKg");
	this.shape_47.setTransform(2293.0779,335.7691,1.3939,1.8837);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FCF5ED").s().p("AgGD0IAAnnQABgLAFAAQAGAAAAALIAAHnQAAALgGAAQgFAAgBgLg");
	this.shape_48.setTransform(2295.2385,336.6638,1.3939,1.8837);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FCF5ED").s().p("AgFD9QgCgEAAgEIAAnpQAAgLAHAAQAIAAAAALIAAHpQAAAEgCAEQgCADgEAAQgDAAgCgDg");
	this.shape_49.setTransform(2300.6746,337.276,1.3939,1.8837);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FCF5ED").s().p("AgFD+QgEgDAAgFIAAnrQAAgFAEgDQACgDADAAQAEAAACADQADADAAAFIAAHrQAAAFgDADQgCADgEAAQgDAAgCgDg");
	this.shape_50.setTransform(2306.5987,337.7941,1.3939,1.8837);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FCF5ED").s().p("AgHD/QgDgDAAgFIAAnuQAAgEADgDQADgDAEAAQAEAAAEADQADADAAAEIAAHuQAAAFgDADQgEADgEAAQgEAAgDgDg");
	this.shape_51.setTransform(2313.4636,338.4063,1.3939,1.8837);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FCF5ED").s().p("AgIEBQgDgEAAgEIAAnxQAAgEADgDQAEgEAEAAQAFAAAEAEQADADAAAEIAAHxQAAAEgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_52.setTransform(2320.5724,339.0185,1.3939,1.8837);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FCF5ED").s().p("AgHEAQgDgEAAgEIAAnuQAAgFADgDQADgEAEABQAEgBAEAEQADADAAAFIAAHuQAAAEgDAEQgEACgEAAQgDAAgEgCg");
	this.shape_53.setTransform(2328.4131,338.2179,1.3939,1.8837);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FCF5ED").s().p("AgFD+QgEgDAAgFIAAnrQAAgFAEgDQACgDADAAQAEAAACADQADADAAAFIAAHrQAAAFgDADQgCADgEAAQgDAAgCgDg");
	this.shape_54.setTransform(2334.825,337.4173,1.3939,1.8837);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FCF5ED").s().p("AgED9QgDgEAAgEIAAnpQAAgFADgDQABgDADAAQADAAACADQADADAAAFIAAHpQAAAEgDAEQgCADgDAAQgDAAgBgDg");
	this.shape_55.setTransform(2340.6096,336.6167,1.3939,1.8837);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FCF5ED").s().p("AgGD0IAAnnQABgKAFAAQAGAAAAAKIAAHnQAAAKgGAAQgFAAgBgKg");
	this.shape_56.setTransform(2345.4185,335.7691,1.3939,1.8837);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#DACFC4").s().p("AgGD0IAAnnQAAgLAGAAQAHAAAAALIAAHnQAAALgHAAQgGAAAAgLg");
	this.shape_57.setTransform(2343.2232,336.6638,1.3939,1.8837);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#DACFC4").s().p("AgED9QgDgEAAgEIAAnpQAAgLAHAAQAIAAAAALIAAHpQAAAEgDAEQgBADgEAAQgCAAgCgDg");
	this.shape_58.setTransform(2337.8218,337.276,1.3939,1.8837);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#DACFC4").s().p("AgGD+QgDgDAAgFIAAnrQAAgFADgDQADgDADAAQAEAAADADQACADAAAFIAAHrQAAAFgCADQgDADgEAAQgDAAgDgDg");
	this.shape_59.setTransform(2331.8978,337.7941,1.3939,1.8837);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#DACFC4").s().p("AgGD/QgEgDAAgFIAAnuQAAgEAEgDQADgDADAAQAFAAADADQADADAAAEIAAHuQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_60.setTransform(2325.0329,338.4063,1.3939,1.8837);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#DACFC4").s().p("AgIEBQgDgEAAgEIAAnxQAAgEADgDQAEgEAEAAQAFAAAEAEQADADAAAEIAAHxQAAAEgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_61.setTransform(2316.7392,339.0185,1.3939,1.8837);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#E6DED6").s().p("AiLD3Qg7gLAAgLIAAnkIGMAAIAAHkQAAALg5ALQhBANhMAAQhLAAhAgNg");
	this.shape_62.setTransform(2319.1437,339.9132,1.3939,1.8837);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FCF5ED").s().p("AicAUQg+gMAAgMQAAgMBAgJQBAgIBaAAQBbAABAAIQBAAJAAAMQAAALhCANQhHAOhVAAQhUAAhFgOg");
	this.shape_63.setTransform(2319.1437,385.122,1.3939,1.8837);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#818181").s().p("AAjA0QgWgpgSgTQgMgMgPgIIgMgGIgFgTQAsAQAfAuQAQAYAIAVg");
	this.shape_64.setTransform(2248.2295,260.0915,1.3939,1.8837);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#666767").s().p("AgGAJIAAgVIANACIAAAXg");
	this.shape_65.setTransform(2254.1536,272.3356,1.3939,1.8837);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#B4B5B5").s().p("AgZAGQgigvgkgMIBAAAIAYAJQAaAMAVASQAgAbAYAnIhcABQgLgXgSgYg");
	this.shape_66.setTransform(2254.6414,260.0444,1.3939,1.8837);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#818181").s().p("AgtANIAAgZIBbAAIAAAZg");
	this.shape_67.setTransform(2261.576,272.3356,1.3939,1.8837);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#666767").s().p("AgPBJIAAiRIAfAAIAACRg");
	this.shape_68.setTransform(2257.9519,276.7152,1.3939,1.8837);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#B4B5B5").s().p("AAEA2QACghglgfQgUgRgugaIBDAAIAYAJQAbAMAUARQAhAbAYAqg");
	this.shape_69.setTransform(2254.5717,287.6877,1.3939,1.8837);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#818181").s().p("AAnAoQgHgTgQgSQgQgRgegTIgcgQIANgFIAYAKQAaANAUASQAUARAJAbQAFANgBAJIgPABQAAgFgEgJg");
	this.shape_70.setTransform(2247.2886,287.829,1.3939,1.8837);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#818181").s().p("AgZAJQAfguAsgQIgFATQgTAHgUATQgLALgQAaIgNAXIgPACg");
	this.shape_71.setTransform(1903.2765,260.0915,1.3939,1.8837);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#666767").s().p("AgHgKIAOgCIAAAVIgOAEg");
	this.shape_72.setTransform(1897.3525,272.3356,1.3939,1.8837);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#B4B5B5").s().p("AhfA0IAQgXQAUgbAUgQQAUgSAbgMQAOgGAKgDIBAAAQgkANgjAuIgcAvg");
	this.shape_73.setTransform(1896.8995,260.0444,1.3939,1.8837);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#818181").s().p("AgtANIAAgZIBbAAIAAAZg");
	this.shape_74.setTransform(1889.93,272.3356,1.3939,1.8837);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#666767").s().p("AgQBJIAAiRIAgAAIAACRg");
	this.shape_75.setTransform(1893.589,276.7152,1.3939,1.8837);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#B4B5B5").s().p("AhhA2IARgYQATgcAVgRQAUgRAbgMQAOgGAKgDIBDAAQguAagUARQglAfABAhg");
	this.shape_76.setTransform(1896.9343,287.6877,1.3939,1.8837);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#818181").s().p("Ag5A1QAAgJAEgNQAJgbAUgRQAUgSAagNQAOgHAKgDIAMAFQgwAZgZAbQgQASgHATQgDAJgBAFg");
	this.shape_77.setTransform(1904.2174,287.829,1.3939,1.8837);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#B26452").s().p("A1SAEIAAgHMAqlAAAIAAAHg");
	this.shape_78.setTransform(2075.6208,298.1205,1.3938,1.8836);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#99402C").s().p("A1SAdIAAg5MAqlAAAIAAA5g");
	this.shape_79.setTransform(2075.6208,302.7823,1.3938,1.8836);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#B26452").s().p("A1SAEIAAgHMAqlAAAIAAAHg");
	this.shape_80.setTransform(2075.6208,310.0811,1.3938,1.8836);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#99402C").s().p("A1SAcIAAg3MAqlAAAIAAA3g");
	this.shape_81.setTransform(2075.6208,314.6958,1.3938,1.8836);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#B26452").s().p("AzCADIAAgFMAmFAAAIAAAFg");
	this.shape_82.setTransform(2075.6208,182.5641,1.3938,1.8836);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#99402C").s().p("AzCAVIAAgpMAmFAAAIAAApg");
	this.shape_83.setTransform(2075.6208,186.0487,1.3938,1.8836);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#B26452").s().p("AzCAEIAAgIMAmFAAAIAAAIg");
	this.shape_84.setTransform(2075.6208,193.1591,1.3938,1.8836);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#99402C").s().p("AzCAiIAAhDMAmFAAAIAABDg");
	this.shape_85.setTransform(2075.6208,198.7627,1.3938,1.8836);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#B26452").s().p("AzCAEIAAgIMAmFAAAIAAAIg");
	this.shape_86.setTransform(2075.6208,208.8868,1.3938,1.8836);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#99402C").s().p("AzCAiIAAhDMAmFAAAIAABDg");
	this.shape_87.setTransform(2075.6208,214.4904,1.3938,1.8836);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#B26452").s().p("AzCAEIAAgIMAmFAAAIAAAIg");
	this.shape_88.setTransform(2075.8401,224.3484,1.3939,1.8837);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#99402C").s().p("AzCAiIAAhDMAmFAAAIAABDg");
	this.shape_89.setTransform(2075.8401,229.9524,1.3939,1.8837);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#603323").s().p("Az3ACIAHgDMAnhAAAIAHADg");
	this.shape_90.setTransform(2075.6208,282.4869,1.3938,1.8836);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#B24E38").s().p("Az3AMIAwgWIQ/AAIgBgBIETAAIgBABIQ/AAIAwAWg");
	this.shape_91.setTransform(2075.6208,280.6034,1.3938,1.8836);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#603323").s().p("A0nACIAGgDMApDAAAIAGADg");
	this.shape_92.setTransform(2075.6208,288.3731,1.3938,1.8836);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#B24E38").s().p("A0nAPIAvgdMAnwAAAIAwAdg");
	this.shape_93.setTransform(2075.6208,285.8774,1.3938,1.8836);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#603323").s().p("A1WADIAGgFMAqhAAAIAGAFg");
	this.shape_94.setTransform(2075.6208,296.8491,1.3938,1.8836);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#B24E38").s().p("A1WAVIApgpMApbAAAIApApg");
	this.shape_95.setTransform(2075.6208,293.4587,1.3938,1.8836);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#4D4C4C").s().p("AgGkVIANAGIAAICIgNAkg");
	this.shape_96.setTransform(1897.2828,350.2736,1.3939,1.8837);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#313232").s().p("AgHEEIAAoLIAOAOIAAIBg");
	this.shape_97.setTransform(1911.2914,228.728,1.3939,1.8837);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#4D4C4C").s().p("AgGhFIANABIAAB4IgNASg");
	this.shape_98.setTransform(1897.2828,311.0926,1.3939,1.8837);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#666767").s().p("AgiEGIAAoMIBFAAIAAIMg");
	this.shape_99.setTransform(1905.4022,228.4925,1.3939,1.8837);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#666767").s().p("AguEXIAAosIBdAAIAAIsg");
	this.shape_100.setTransform(1889.7906,350.2736,1.3939,1.8837);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#313232").s().p("AgEkWIAJAHIAAIBIgJAkg");
	this.shape_101.setTransform(1911.4656,324.4669,1.3939,1.8837);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#4D4C4C").s().p("AgfEWIAAosIA/AAIAAIsg");
	this.shape_102.setTransform(1906.3779,324.4669,1.3939,1.8837);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#4D4C4C").s().p("AgGDzIAAoCIANgGIAAIsg");
	this.shape_103.setTransform(2254.2233,350.2736,1.3939,1.8837);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#313232").s().p("AgHj5IAPgOIAAILIgPAEg");
	this.shape_104.setTransform(2240.2147,228.728,1.3939,1.8837);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#4D4C4C").s().p("AgGA0IAAh4IANgBIAACLg");
	this.shape_105.setTransform(2254.2233,311.0926,1.3939,1.8837);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#666767").s().p("AgiEGIAAoMIBFAAIAAIMg");
	this.shape_106.setTransform(2246.1387,228.4925,1.3939,1.8837);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#666767").s().p("AguEXIAAosIBdAAIAAIsg");
	this.shape_107.setTransform(2261.6806,350.2736,1.3939,1.8837);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#313232").s().p("AgEDyIAAoBIAIgHIAAIsg");
	this.shape_108.setTransform(2240.0404,324.4669,1.3939,1.8837);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#4D4C4C").s().p("AgfEWIAAosIA/AAIAAIsg");
	this.shape_109.setTransform(2245.1281,324.4669,1.3939,1.8837);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#C57EB2").s().p("AgLARQAAgCAHgHQAFgFgBgBQgBgBgEADQgEACgDgBQgFgCgCgHQgCgHAGgDQAFgDACAAQAAAAAAABQABAAAAAAQAAAAABABQAAAAAAABQADAJAGAEQABgIgDgDQgBgCAAgEQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAABAAQAEABAFAEQAGAEgCAEQgFAGgDABQALgCABADQABABgBAIQgBAHgCAAQgCAAgEgHQgDgFgBABIgBAIQgBAHgFABIgEABQgIAAABgFg");
	this.shape_110.setTransform(1843.3996,267.0385,1.3939,1.8837);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#C57EB2").s().p("AgQAUQgIgEABgDQABgDALgEQAKgEgDgCQgCAAgJACQgIACgDgDQgDgDANgNQANgNABAFIAAALQAAAHADACIAFgHQAFgHAEABQAFABADAEQADAEgDADQgDABgKACQgJABABABQAAABAMgBQAMAAABACQACAEgGAIQgGAIgEgCIgIgJQgFgFAAACIABAKQABAGgDAAQgHgBgIgEg");
	this.shape_111.setTransform(1819.6959,272.1106,1.3939,1.8837);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#C57EB2").s().p("AgLARQAAgCAHgHQAFgFgBgBQgBgBgEADQgEACgDgBQgFgCgCgHQgCgHAGgDQAFgDACAAQAAAAAAABQABAAAAAAQAAAAABABQAAAAAAABQACAIAHAFQABgIgDgDQgBgDAAgDQAAAAAAgBQAAgBABAAQAAAAAAgBQABAAABAAQADAAAGAFQAGAEgCAEIgGAFIgDADQAMgDABADQABABgBAIQgBAHgCAAQgCAAgEgHQgDgFgBABIgBAIQgBAHgFABIgFABQgHAAABgFg");
	this.shape_112.setTransform(1827.579,272.3989,1.3939,1.8837);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#C57EB2").s().p("AgCAWQgHgBgHgFQgIgFACgDQABgCAIgEQAGgCgCAAQgBgBgHABQgFAAgBgDQgCgFAHgIQAHgIABAFQABAFAIAMIgBgIQAAgJADAAQAEgBAHADQAIADgCADIgJAFQgBABgBAAQgBABgBAAQAAABAAAAQAAAAABABQABABAIgEQAIgDABADQACAFgFAKQgFALgEgEQgDgCgFgIQgBgBgBgBQAAgBgBAAQAAAAgBAAQAAAAAAAAIABALQABAHgDAAIgBAAg");
	this.shape_113.setTransform(1829.5959,301.854,1.3939,1.8837);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#C57EB2").s().p("AgJAFQgGgKAFgHIAKgBQAJgBADAGQAEAGgGACQgGACgEgDQgDgCADAGQAEAJgDACIgBAAQgEAAgFgJg");
	this.shape_114.setTransform(1842.772,294.1531,1.3939,1.8837);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#C57EB2").s().p("AgGARQgEgCgBgGIAAgGIABgKQACgKAFABQADABgCAHQgEAHACABQAFAAAGADQAJAEgFADQgFADgHgEIgHgDIADAIQAAAAABABQAAABAAAAQAAABAAAAQgBAAAAAAIgBAAg");
	this.shape_115.setTransform(1837.0564,295.927,1.3939,1.8837);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#C57EB2").s().p("AgBAZQgGAAgJgEQgIgEABgEQABgDALgEQAKgEgDgBQgCgBgJACQgJACgCgDQgEgDAOgMQANgNABAFIAAAKQAAAHADADIAEgIQAGgHAEABQAFABADAFQADAEgDACQgDACgKABQgJABABABQAAABAMAAQAMgBABADQACAEgGAIQgGAHgEgCQgCgBgGgIQgFgFAAACIABAKQABAGgCAAIgBAAg");
	this.shape_116.setTransform(1819.7895,298.8156,1.3939,1.8837);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#C57EB2").s().p("AAAAVQgEgBgBgHIgBgIIgEAFQgEAGgCAAQgCAAgBgHQgBgIABgBQABgCAHABIAFABIgDgCQgEgDgCgDQgCgDAGgFQAGgEADgBQABAAABAAQAAABAAAAQAAAAAAABQAAAAAAABQABAEgBACQgCACAAAFIAAAEQAHgFACgIQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAAAQACAAAFADQAGADgCAIQgCAGgFACQgDACgEgDQgEgDgBABQgBABAFAGQAHAGAAADQABAEgHAAIgGgBg");
	this.shape_117.setTransform(1795.4684,288.8401,1.3939,1.8837);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#C57EB2").s().p("AgCAWQgHgBgIgFQgIgFACgDQACgCAIgEQAGgCgCAAQgBgBgHABQgGAAgBgDQgBgFAHgIQAHgIABAFQABAFAIAMIgBgIQAAgJACAAQAFgBAHADQAIACgDADQgBACgHAEQgFADABABIAKgDQAIgDABADQACAFgFAKQgGALgEgEIgHgKQgEgEAAABIABALQABAHgDAAIgBAAg");
	this.shape_118.setTransform(1819.0912,261.3545,1.3939,1.8837);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#C57EB2").s().p("AgKAMIgDgJQgBgKAFgEQAFgEAEAGQACAFgCAFQgCADAGgEQAIgFACADQACADgJAHQgHAFgFAAIgFgBg");
	this.shape_119.setTransform(1855.9312,256.5059,1.3939,1.8837);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#C57EB2").s().p("AgNANQgCgEAIgBQAHgBAAgCQgDgGgBgGQgBgJAFACQADACACAJIACAGIAEgGQADgFABAEQABAGgKAGQgKAIgFAAQgBAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAgBg");
	this.shape_120.setTransform(1787.1626,270.7702,1.3939,1.8837);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#C57EB2").s().p("AgLARQAAgCAHgHQAEgFAAgBQgBgBgEADQgEACgDgBQgFgCgCgGQgCgIAFgDQAGgDABAAQABAAAAABQAAAAABAAQAAAAAAABQABAAAAABQADAJAFAEQACgIgDgDQgBgDAAgDQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAAAAAQAEABAFAEQAHAEgCAEQgFAGgDACIAEgBQAHgBABACQABABgBAIQgBAHgCAAQgCAAgEgGIgEgFIgBAIQgBAHgFABIgEABQgIAAABgFg");
	this.shape_121.setTransform(1794.1648,263.9304,1.3939,1.8837);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#C57EB2").s().p("AgNAXQAAgDAGgKQAGgJgDAAQgCABgGAHQgGAHgEgBQgFgBADgRQAEgSADADIAGAJQAEAFAFAAIAAgJQAAgJADgBQAEgCAFACQAFABgBAEQgBADgHAHQgGAGAAABQABABAKgIQAJgHADABQADADAAAJQAAAJgFABIgMgCQgHgCACACIAGAHQAFAEgEADQgFADgIACIgFAAQgFAAgBgCg");
	this.shape_122.setTransform(1832.7902,259.5453,1.3939,1.8837);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#C57EB2").s().p("AABAXQgHgCABgEQAFgJgDgIIgDAEQgDADAAADQAAADgDACQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAgBQgDgDgBgHQgBgGADgBQAHgCAEABIgDgCQgGgEABgCQABgCAFgFQAGgFABACQABABgBAHQgBAHACAAIAFgGQAFgFAEADQAMAHgFAEQgCABgJABQgIAAAAABQABABAEABQAFAAABAEQADAFgEAGQgDAGgFAAIgCAAg");
	this.shape_123.setTransform(1841.4446,256.5492,1.3939,1.8837);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#C57EB2").s().p("AgLASQAAgDAHgGQAEgGAAgBQgBgBgEADQgEACgDgBQgFgCgCgGQgCgIAFgDQAGgDABAAQABAAAAAAQAAAAABABQAAAAAAABQABAAAAABQADAKAFADQACgIgDgDQgBgCAAgEQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAAAAAQAEABAFAEQAHAFgCADQgFAGgEACIAFgBQAHgBABACQABABgBAIQgBAHgCAAQgCgBgEgFIgEgFIgBAIQgBAHgFABIgGABQgGAAABgEg");
	this.shape_124.setTransform(1808.94,290.7179,1.3939,1.8837);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#C57EB2").s().p("AgBAZQgHgBgIgDQgJgEACgEQABgDALgEQAJgEgCgCQgCAAgJACQgIACgDgDQgEgDANgMQAOgNAAAFIAAAKQABAHADACIAEgHQAGgHADABQAGABADAEQADAEgEADQgCACgKABQgJABABABQAAABAMAAQAMgBABADQACADgGAIQgGAIgEgCQgDgBgGgIQgEgFAAACIABAKQABAGgCAAIgBAAg");
	this.shape_125.setTransform(1795.1161,277.247,1.3939,1.8837);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#C57EB2").s().p("AgCAWQgHgBgIgFQgHgGACgDQABgCAIgDQAGgCgCgBIgIAAQgFABgBgEQgCgEAHgIQAHgIABAEQABAFAIANIgBgIQAAgJADgBQAEgBAHADQAIADgCADQgCACgHAEQgFACACACQABABAIgEQAIgDABADQACAFgFAKQgFALgFgEIgHgKQgDgFgBACIABAKQABAIgDAAIgBAAg");
	this.shape_126.setTransform(1860.8191,283.7105,1.3939,1.8837);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#C57EB2").s().p("AgLARQAAgCAHgHQAFgFgBgBQgBgBgEADQgDACgEgBQgFgCgCgHQgCgHAGgDQAFgDACAAQAAAAAAAAQABABAAAAQAAAAAAABQABAAAAABQADAJAGAEQABgJgDgDQgBgCAAgDQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAABAAQADAAAGAFQAGAEgCADQgGAJgEAAIAGgBQAHgBABACQABABgBAHQgBAIgCAAQgCgBgEgGQgDgFgBABIgBAIQgBAHgFABIgFABQgHAAABgFg");
	this.shape_127.setTransform(1811.5562,253.5611,1.3939,1.8837);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#C57EB2").s().p("AgHAIQgHgIACgFQACgHAGADQAEADABAGQABACADgHQADgJADABQAFADgEAKQgDAMgJACIgHgGg");
	this.shape_128.setTransform(1823.5188,251.5956,1.3939,1.8837);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#C57EB2").s().p("AgGARQgEgCgBgGIAAgGIABgKQACgKAFABQADABgCAHQgEAHACABQAFAAAGADQAIAEgEADQgFADgHgEIgHgDIADAIQABAAAAABQAAABAAAAQAAABAAAAQAAAAgBAAIgBAAg");
	this.shape_129.setTransform(1833.9737,248.6371,1.3939,1.8837);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#C57EB2").s().p("AgLASQAAgDAHgGQAEgGAAgBQgBgBgEADQgEACgDgBQgFgCgCgGQgCgIAFgDQAGgDABAAQABAAAAAAQAAAAABABQAAAAAAABQABAAAAABQADAKAFADQACgIgDgDQgBgCAAgEQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAAAAAQAEABAFAEQAHAFgCADQgFAFgDACIAEAAQAHgBABACQABABgBAIQgBAHgCAAQgCgBgEgFIgEgFIgBAIQgBAHgFABIgGABQgGAAABgEg");
	this.shape_130.setTransform(1826.2242,286.1028,1.3939,1.8837);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#C57EB2").s().p("AgBAZQgHgBgIgDQgIgEABgEQABgDALgEQAKgEgDgCQgCAAgJACQgIACgDgDQgEgDAOgMQANgNABAFIAAAKQAAAHADACIAEgHQAGgHAEABQAFABADAFQADAEgDACQgDACgKABQgJABABABQAAABAMAAQAMgBABADQACAEgGAIQgGAHgEgCQgCgBgGgIQgFgFAAACIABAKQABAGgCAAIgBAAg");
	this.shape_131.setTransform(1840.2797,278.9423,1.3939,1.8837);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#C57EB2").s().p("AgQAUQgJgEACgDQABgDALgFQAJgEgCgBQgCAAgJACQgIACgDgDQgEgDANgNQAOgNAAAFIAAALQABAHADACIAEgHQAGgHADABQAFABAEAEQADAEgEADQgCACgKABQgJABAAAAQABACAMgBQAMAAABACQACAEgGAIQgGAIgEgCIgJgJQgEgFAAACIABAKQABAGgEAAQgGgBgIgEg");
	this.shape_132.setTransform(1859.2351,269.6618,1.3939,1.8837);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#C57EB2").s().p("AgLARQAAgCAHgHQAFgFgBgBQgBgBgEADQgEACgDgBQgFgCgCgHQgCgHAGgDQAFgDACAAQAAAAAAABQABAAAAAAQAAAAABABQAAAAAAABQACAIAHAFQABgIgDgDQgBgDAAgDQAAAAAAgBQAAgBABAAQAAAAAAgBQABAAABAAQADAAAGAFQAGAEgCAEIgGAFIgDADQAMgDABADQABABgBAIQgBAHgCAAQgCAAgEgHQgDgFgBABIgBAIQgBAHgFABIgFABQgHAAABgFg");
	this.shape_133.setTransform(1810.1553,271.0804,1.3939,1.8837);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#BEBB3D").s().p("AgKAdIAEgKQACgEgFABQgYADADgDIAFgCQAAAAABgBQAAAAAAAAQAAgBAAAAQAAgBgBAAIgGgGQgEgDAGABIAQACQAIAAgBgCIgMgHQgJgHADgBIAHgBQAAAAABAAQAAAAAAgBQABAAAAAAQAAAAAAgBIgEgJQAAgCgBgBQAAgBAAgBQABAAAAAAQAAAAABAAIAJAIQABABABAAQABABAAAAQABAAAAAAQAAAAAAgBQAAgEACgDQAAAAABgBQAAAAAAAAQABAAAAAAQAAABABAAIACALQACAIACgDIAFgKQADgGABACIABAEQAAAAAAABQABAAAAAAQAAABABAAQAAAAABgBIAIgGQAGgFABAEQAAADgJALQgJAJAEAAQAFABADACQACACgFgBIgJgDQgEgBABAEQABAEgGACQgGABAAABQgLAWgBAAIAAgBg");
	this.shape_134.setTransform(1812.0976,284.4657,1.3939,1.8837);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#BEBB3D").s().p("AgZAlQABgIAFgJQADgGgDABIgOACQgJAAAJgFQAIgEANgEQAJgDgJgDQgPgEgHgEQgIgEAFAAIAOgBQAFAAgDgFIgHgKQgCgGAMAKQAMALAEAHQACAFAAgMQAAgMABAEQADAFACgJQAEgMADgCQAEgDABAMQAAAMgCAJQgCAGAKgEQALgFAEACQAEADgHAEIgNAFQgBAAgBAAQAAAAgBAAQAAABAAAAQAAAAABABIAFACQAEAEgaAAIgFAiQAAADgFgEQgHgGgGAGIgFACQgCAAABgGg");
	this.shape_135.setTransform(1803.4625,261.447,1.3939,1.8837);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#90982F").s().p("AAMB2IgWgaQgXgdgBgJQAAgGgRgWQgPgUAGgGQAGgFAQAXQAQAZAFgBQAFgBgcgtQgdgxAIgKQAHgKAcAiQAZAfAAgOIgKg6QgFglAOgCQAMgDADA4QADA4ADgBIAVgPQANgKgEALQgBAGgNAXQgKASABALQAAAJAYgDQAVgCgKAQIgeAxQgNASgEAAQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAAAAAgBg");
	this.shape_136.setTransform(1826.389,281.266,1.3939,1.8837);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#9DA62D").s().p("AhEBQQgXgVAlgfQAagVAcgKIgPADQgjAEgQgIQgSgKAGgEQAFgEAjgTQAYgPATALIAJAFQADABAAgHQAAgFgLgbQgFgOAUAHQAOAFAdA5QAeA7gZADIgkgIQgcgHgNAKIgZAqQgIAMgJAAQgJAAgJgIg");
	this.shape_137.setTransform(1815.8934,297.8814,1.3939,1.8837);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#90982F").s().p("AAfBpQgEgdgRgdQglhCgJgZQgXg8AhgQQAggQgCAUQgBALgKAlQgDASAXgMQAYgNAAAQQAAARgZAXQgTASAIAFQAFADAbgEQARgDgFAaQgEATgBAwQgBAhgHACQABgJgCgOg");
	this.shape_138.setTransform(1812.4104,269.7583,1.3939,1.8837);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#BEBB3D").s().p("AgTAlIAAgMQAAgBAAAAQAAAAgBAAQAAAAgBAAQgBABgBABQgHAIgGAAQgHAAACgDIAJgIQADgDgEgBQgKgBgDgCQgGgDAGgBIAOgCQABAAAAAAQABgBAAAAQAAAAAAgBQAAAAgBAAQgGgDgCgCQgCgDAIABIARAFQAHABgGgHQgJgKgCgFQgDgFAEADIAMAKQAFAEgEgMQgGgQABgFQABgHAHANQAGALABAHQABAEABgFQABgHACgCQACgDABAKQAAAKgCAFQAAABAAAAQAAABABgBQAAAAABgBQABAAABgCIAJgLQABgBAAAAQABgBABAAQAAAAAAABQAAAAAAABIgCAIQAAAEALgGQANgIAGACQAGACgLAKIgRANQgDACAFABQAJACADADQADAEgFAAIgJABQAAAAAAAAQAAABAAAAQAAAAAAABQABAAAAAAQAEADgCACQgDAGgegSQgIALgHAHIgCACQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAg");
	this.shape_139.setTransform(1821.4227,254.2572,1.3939,1.8837);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#BEBB3D").s().p("AgWAUQgDgFABgMIABgJIANgLQAJgHgCADIgGAKQgCAGADAAQAEAAAEADQADACAAACQAAABANAFQANAEgFACQgEABgOgGQgJgGACAFIAFALQACADgFgCIgKgJQgEgEAAAFQgBAHgCADIgCABQgCAAgCgDg");
	this.shape_140.setTransform(1859.9514,277.0906,1.3939,1.8837);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#BEBB3D").s().p("AgDAcIgHgQQgNADgKAAQgFAAADgDIAIgIQACgDgGAAQgKABgEgCQgGgFAEgBIALAAQAFAAgCgDQgHgIgBgEQgDgGAGAEIALAHQABABABAAQAAAAABAAQAAAAAAgBQAAAAAAgBQgDgGAAgDQABgEAEAHIAKAPQAFAGAAgKIABgTQACgHABAGIACAPQABAGAEgMQAGgQAEgDQAGgDgDANQgDANgEAGQgBABAAAAQAAABAAAAQABAAAAgBQABAAABgBIAJgEQAEgBgHAIQgGAIgFACQgBABAAAAQAAAAAAAAQABAAABAAQABAAACAAIAPgCQAFAAgDABIgHAFQgDACANADQAPAEADAFQAFAJgmgFQgEAAADAEQAGAIgBAEQAAAFgEgEIgHgFQAAAAAAAAQgBAAAAABQAAAAAAABQABAAAAABQABAEgDABIgBAAQgDAAgGgPg");
	this.shape_141.setTransform(1848.1061,255.9384,1.3939,1.8837);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#BEBB3D").s().p("AgEAcIgGgQQgOADgJAAQgGABAEgEIAIgIQACgDgHAAQgJABgFgCQgIgHASABQAGAAgEgDIgIgLQgCgHAFAEIAMAIQABAAABAAQAAAAABAAQAAAAAAAAQAAgBgBAAQgCgGAAgDQAAgFAFAHIAKAPQAEAGABgKIABgTQACgGABAFIACAQQABAGAEgMQAGgRAEgCQAFgEgDAOQgDAMgDAGQgBABAAAAQAAABAAAAQABAAAAgBQABAAABAAQAGgFADAAQAEAAgHAIQgHAHgFADQAAAAAAAAQAAABAAAAQABAAABgBQABAAACAAIAOgCQACAAAAAAQABAAAAABQABAAAAAAQgBAAAAAAIgHAFQgDACAMADQAPAEADAFQAGAJgngEQgEgBAEAFQAFAHAAAEQgBAFgDgDIgHgGQAAAAAAAAQAAAAgBABQAAAAAAABQAAAAAAABQABAEgDABIAAAAQgEAAgGgPg");
	this.shape_142.setTransform(1843.5491,275.6701,1.3939,1.8837);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#BEBB3D").s().p("AABAnIAGgLQADgFgFACQgHAEgGABQgFABAHgFQAEgDAKgFQAGgDgGABIgKADQgDAAgCgDQgCgCADgEQADgDgGgCIgMgFQgEgBAHgBIAQgBQAGAAgCgEQgDgEgEgOQgFgPAEACQABABAFAHQAEAGADgEIAHgKQADgDABAGQAAADgFAPQgEAKAFgBIAIgFQAAAAABAAQAAAAAAAAQAAABAAAAQAAABAAABQgCAEAAAIIAAAIIgHABIABAHQABAFgEAGQgJALgBAAIgBgBg");
	this.shape_143.setTransform(1785.8628,279.8666,1.3939,1.8837);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#BEBB3D").s().p("AgBAfIABgXQAAgJgFAGQgJALgHAFQgJAGAEgIQACgFAGgHQABAAAAgBQAAAAgBgBQgBAAgBAAQgBAAgBAAQgLABgIgCQgKgDAJgDQAIgEgCgIQgCgGADAAIAhAJQAKgYACAGIAAAGQAAAAAAAAQAAAAAAAAQABAAAAAAQABgBABAAIAKgKQAGgFABAFQABAEgKAJQgHAHAGABQAJABALAFQAKAGgEACQgCACgNgCQgJgBADAEQADADgKgEQgLgEADADQAEAGAFAQQAEAPgEgEQgCgCgFgJQgCgFgDAFIgGAMIgBACQgBAAAAgHg");
	this.shape_144.setTransform(1849.941,289.8725,1.3939,1.8837);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#9DA62D").s().p("AhdAkQAlgdANgOQASgUAIAQQANAXAEACQAKAEADgaQAEghANgLQAMgKAFAcQAEAaANgNQAMgNAUgaQAOgNAHAkQAHAkg+ARQgZAHhMAKQghAEgZAOIgTANQgDgHAagVg");
	this.shape_145.setTransform(1848.7339,293.8583,1.3939,1.8837);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#90982F").s().p("AgeBcQgdgXgMgWQgHgPAPADQAWAEAGgQQAFgNgXgjQgWgiAKgSQALgTANAjQARAxAGAGQAHAHALgwQALg4AYgDQAZgDgeA0QghA7AEAIQAFAJARgZQATgdATAHQAXAJgSATQgPAOgcAKQgTAGgFAlQgDASAAARQABAFgDAAQgFAAgTgPg");
	this.shape_146.setTransform(1834.7809,284.5825,1.3939,1.8837);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#7E8731").s().p("AgtgOQABgQAHALIARAeQAHAKAFglQAHgzAOgTQAQgTgFApQgIA4AFAIQAFAKAOghQASgpARgFQAbgHgcAwQgcAugjAJQgdAJgmAdIgfAcQAohQACgbg");
	this.shape_147.setTransform(1853.193,276.2898,1.3939,1.8837);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#BEBB3D").s().p("AAAAkIgGgMQgCgFgDAFIgHALQgEAEAEgPQAFgQAFgGQADgDgLAEQgLAFADgEQAEgEgKABQgMACgDgCQgEgBALgGQAKgGAJgBQAGgBgHgHQgKgJABgEQABgFAGAFIAKAKQABABABAAQAAABABAAQAAAAABAAQAAAAAAgBIAAgGQABgGAKAYIAhgIQADgBgCAHQgCAIAIADQAJAEgJACQgIACgLgBQgCAAgBAAQgBAAgBAAQAAABAAAAQAAABAAAAQAHAIABAEQAEAIgIgGQgIgGgJgKQgGgFABAJIABAWQAAAHgBAAIgBgCg");
	this.shape_148.setTransform(1796.7438,294.0166,1.3939,1.8837);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#90982F").s().p("AAEA7QgEAAgTAIQgLAFgIgNQgJgRAHgJQAGgIAOAGQAQAIAEgCQAEgDgKgSQgIgMghADQggACgGgMQgLgXAXgYQAXgYASAeQAPANAQgmQAOgjAGANQAHAOgDAoQgDAhAKACQAGACARgWQAOgSAPAVQAOAUgLAsQgLArAIAIQg8glgSAAg");
	this.shape_149.setTransform(1798.4245,288.9101,1.3939,1.8837);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#9DA62D").s().p("AAyBOQgNgQgNgLQgXgVgTgBQgaAAgTgMQgUgMAHgOQAEgIAiASQAeAQgDgWIgJg9QgCgbANAOQAIAIASA7QAOAsALgPQAQgWAMgGQANgGgFAZIgNA8QgFARgEAAQgDAAgDgHg");
	this.shape_150.setTransform(1799.4881,271.183,1.3939,1.8837);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#5F5D2B").s().p("AgXBXIgRgOQgDgDgGAGQgLAKgDACQgIAEgMgFQgPgGgIgCQgKgBgJADQgKAFgdgEQgfgEgLgLQgDgEgIgEIgDgIIAQgnQAPASAbAEQAfAEADgaQAEgdAOgPQAOgQAOALIARAZQAJANAWABQATABAfAHQAZADAQgRQADgEAUgjQAKgSAUgDQAOgCAMgKQAQgNAFgCQgSAdAAACQgDAKAUADQAIABAbgLQANgGAGAcIALAvQAAANgXAFQgQADgaAAQgVAAgJAEIggATQgXANgMAFQgKAFgVgGQgUgGgIAGQgHAEgDANQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAgBAAQgDAAgHgFg");
	this.shape_151.setTransform(1836.1955,290.8656,1.3939,1.8837);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#7E8731").s().p("AAxChIgRgOQgDgDgGAGQgLAKgDACQgIAEgLgFQgPgGgIgCQgKgBgJADQgKAFgdgEQgfgEgLgLQgHgIgtgOQgsgOgFgIQgFgHAaAJQAbAKgGgOQgHgOgQgIQgQgJgFgIQgEgHAMACQALABgNgQQgKgNgYgBQgSgCgHgaQgJgjAMgdQALgcAMALQACACATAkQALAVACgcIAFgxQACgMAJALQAHAIAJAPQAGAIAGgQQAFgLAQATQAPATAGgTQACgGAHgkQACgNAKAFQAIAFAGAFQACABAGgJQAHgMABAAQADAAALAOQAOASAEADQAHAFASAEQAbAFAHgCQAOgCAIgXQAMggAHgIQAKgNAHAZQAJAfAEAGQAHAJAMgLQAJgIAOgSQAKgMAGAOQACAFACARQABAGAPACIAdAEQALAEgCARQgCAOgDAOQAAAHANACQALABAZgDQARABgMAWQgKARgNATQgEAMAVADQAIABAbgLQANgGAGAcIALAwQAAANgXAFQgQADgaAAQgVAAgJAEIggATQgXANgMAFQgKAFgVgGQgUgGgJAGQgHAEgDANQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgDAAgHgFg");
	this.shape_152.setTransform(1826.0123,276.9052,1.3939,1.8837);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#C9B7AB").s().p("AglAgQgfgGgHgNQgHgNAMgLQANgMAcAAIAfgFQAdgEAXgBQAfAAgIAaQgIAZgmAKQgWAGgUAAQgNAAgNgCg");
	this.shape_153.setTransform(1830.9031,354.9652,1.3939,1.8837);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#BBA79C").s().p("Ag0A8QgrgIgggsQgdgmAIgOQAGgIAUAAQAKAAAJABQBFAOBQgLQApgGAsgIQATAAAAAWQAAAXgUAaQgUAcg5AQQgkAKghAAQgSAAgSgDg");
	this.shape_154.setTransform(1826.9661,354.7954,1.3939,1.8837);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#BBA79C").s().p("AgvAgQg1gDgfgJQgbgIgEgUQgDgSAhABQASABAkAHQAvAGBugOIA3gGQAegBgBATQgCAih0AJQgfACgeAAIgfAAg");
	this.shape_155.setTransform(1827.294,333.5702,1.3939,1.8837);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#7C655A").s().p("Ah3AZQh6gPglggIAAgJQAlAgB6AOQB3APB4gPQB7gOAkggIAAAJQglAgh6APQg8AHg8AAQg7AAg8gHg");
	this.shape_156.setTransform(1825.5323,321.8533,1.3939,1.8837);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#7C655A").s().p("AgiAYQgggfgIgqQgDgRABgZIACgFQAbAdA9ASQgrgKgMAEQgFACAEASQAFAVANAWQAkA+BBAbQhAgZgvgwg");
	this.shape_157.setTransform(1797.4314,347.8954,1.3939,1.8837);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#C9B7AB").s().p("Ag9AkQAAgBAWgFIAZgEQArgKANgIQAKgEADgHIABgEIgCgFQgFgHgSgHIgbgKQAOADAQAFQATAHAGAGQACADABAEIgBAHQgFALgbAJIgqALQglAHgIAAIgDgBg");
	this.shape_158.setTransform(1855.8602,299.9382,1.3939,1.8837);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FCF9F6").s().p("AAOAeQgbgGgPgFQgbgJgFgLQgBgDAAgEQABgEACgDQAGgGATgHQAQgFAOgDIgbAKQgSAHgFAHIgCAFIAAAEQAEAHAKAEQANAHArALQAvAIAAACIgDABQgIAAglgHg");
	this.shape_159.setTransform(1794.9948,299.9382,1.3939,1.8837);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#C9B7AB").s().p("Ah9gDQgGgGAKgBQAIAAALACQASACBrgBIBngBQARAOh8AEIgoABQhXAAgRgOg");
	this.shape_160.setTransform(1825.0436,314.7778,1.3939,1.8837);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#BBA79C").s().p("AiwgIQgJgIANABIAZADQAaADCYACICTACQAYAUiuABIgNAAQiiAAgdgYg");
	this.shape_161.setTransform(1825.4102,313.966,1.3939,1.8837);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#BBA79C").s().p("AiagHQgIgHAKAAIAXADQAWADCGABICBACQAVASiZABIgMABQiNAAgZgWg");
	this.shape_162.setTransform(1822.7925,322.022,1.3939,1.8837);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#7C655A").s().p("AjLAPQhVgPAAgWQAAgEAEgEIgBAEQAAAWBUAPQBTAQB2AAQB3AABUgQQBTgPAAgWIgBgEQAEAEAAAEQAAAWhVAPQhUAQh4AAQh2AAhVgQg");
	this.shape_163.setTransform(1825.5323,303.7933,1.3939,1.8837);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#7D3628").s().p("AjYACQAdgKA6gHQA7gHBGAAQBHAAA7AHQA6AHAdAKQhRAViIAAQiHAAhRgVg");
	this.shape_164.setTransform(1825.3293,303.1119,1.3938,1.8836);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#7D3628").s().p("AiPAUQhAgHgggNQAggMBAgHQBCgIBNAAQBPAABBAIQBAAHAgAMQggANhAAHQhBAIhPAAQhOAAhBgIg");
	this.shape_165.setTransform(1825.3293,302.1701,1.3938,1.8836);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#9F877B").s().p("AApAbQABgLgQgNQghgahbgOQBWAEA3ANQA4AOAAAPQAAAQgzANQgGgGgBgFg");
	this.shape_166.setTransform(1848.5315,296.5882,1.3939,1.8837);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#BBA99F").s().p("Ai6AiQhNgOAAgUQAAgTBNgOQBOgPBsAAQBtAABOAPQBNAOAAATQAAAUhNAOQhOAPhtAAQhsAAhOgPg");
	this.shape_167.setTransform(1825.5323,298.3306,1.3939,1.8837);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#9F877B").s().p("AjJAmQhUgQAAgWQAAgVBUgQQBUgPB1AAQB2AABUAPQBUAQAAAVQAAAWhUAQQhUAPh2AAQh1AAhUgPg");
	this.shape_168.setTransform(1825.5323,298.8015,1.3939,1.8837);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#7C655A").s().p("AgbAKIgBgDQgCgHADgJIAJgXIAUAAIAcAcIgigIQgVgEAJASQAIASAVANQgZgJgPgOg");
	this.shape_169.setTransform(1787.9859,305.7712,1.3939,1.8837);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#91796C").s().p("AhWABIgBgCQgCgHAEgKIAJgXIA7ABIAMAHIA7AWQAxAQgWABIhHgFQgqgCAEAKQAEAMAUALQAJAGAJAEQhJgQgbgZg");
	this.shape_170.setTransform(1796.0926,307.3723,1.3939,1.8837);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#7C655A").s().p("AAEAYQAKgJAFgGQAGgJgDgEQgEgGgMADIgmAHQAigIASgXIACAAIAJAXQADAJgCAHIgBADQgNAMgWAJg");
	this.shape_171.setTransform(1862.6953,305.5828,1.3939,1.8837);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#91796C").s().p("AApAMQgEgNgbAEQgaAEgsADIglACICNgxIArAAIAJAXQADAKgCAGIgBADQgVAUgyANQAUgMgEgOg");
	this.shape_172.setTransform(1853.6001,306.7131,1.3939,1.8837);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#BBA79C").s().p("AigALIg5gKQgGgGDWgIIDXgHQAOATgDAFQgDAEhEAGQhNAHhSAAQhMAAhHgKg");
	this.shape_173.setTransform(1824.7314,306.5247,1.3939,1.8837);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#9F877B").s().p("Ah9AsQiHgQglgjIgBgDQgCgHAEgKIAJgXIEfAGIEggGIAJAXQAEAKgCAHIgBADQglAjiHAQQg/AHg/AAQg+AAg/gHg");
	this.shape_174.setTransform(1825.5323,309.0912,1.3939,1.8837);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#7C655A").s().p("Ah9ArQiDgPgnghIgDgIIAAgEIACgJIAJgYIEfAGIEggGIAJAYIACAJIAAAEIgDAIQgnAhiDAPQg/AIg/AAQg+AAg/gIg");
	this.shape_175.setTransform(1825.5323,309.5857,1.3939,1.8837);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#7C655A").s().p("AgGAHQgEgEgCgMIgBgMIgBgCQAhAUgFgCQgJgDgFADQgGACADAGQADAKAMALQgGgEgMgNg");
	this.shape_176.setTransform(1786.2698,312.6467,1.3939,1.8837);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#91796C").s().p("AgrAQIgMgMQgFgEgCgMIAAgMIgDgHIACgCQAJgEBGAbQBGAagcACQgVABgugMQgjgIADAHQAGAOAbAPQgWgJgNgKg");
	this.shape_177.setTransform(1793.1763,313.2211,1.3939,1.8837);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#91796C").s().p("AAXArQhagLgsgVQgRgIgRgPQgEgFgCgMIgBgMIAAgCQAlgCCOAcQCOAbgSAEQgRAEg2gCQgygCgigFQhggOARARQAOAPBgARg");
	this.shape_178.setTransform(1805.6432,316.489,1.3939,1.8837);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#7C655A").s().p("AABARQAFgHgBgHQgBgFgKABIgLABIAJgIQAJgJAFgGQAHgEADACIACACIgDAHQABAVgIAHIgFAGIgKAJIAIgKg");
	this.shape_179.setTransform(1864.5612,311.8247,1.3939,1.8837);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#91796C").s().p("AAEAQQAlgVgfgEQgIgBAUgRQATgQAIAEIACABIgDAHQAAAWgHAHQgNAMgIAFQgXAPgvALQAYgGAegTg");
	this.shape_180.setTransform(1860.0311,314.5275,1.3939,1.8837);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#91796C").s().p("AgiAyQBOgNAAgVQAAgHgYgCQgPgBAtgfIAwgfIAKgCIAVgDIACAGQAEAKgCAHIgEAIQABAWgIAHQgQAQgRAIQgsAVhaALQgnAFgxACQAzgDAwgJg");
	this.shape_181.setTransform(1848.6518,314.342,1.3939,1.8837);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#9F877B").s().p("Ah3A/QhbgLgsgVQgRgIgQgRQgFgEgCgMIAAgLIgEgJQgCgGAEgLIAJgWIEfAFIEggFIAJAWQAEALgCAGIgEAJQABAVgIAGQgQARgRAIQgsAVhbALQg8AHg8AAQg7AAg8gHg");
	this.shape_182.setTransform(1825.5323,312.788,1.3939,1.8837);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#91796C").s().p("Ag8AAQgCgEAAgYIAAgXIAgADIBdAmQg1gDgYgGQgXgGgBAZQgBAbApAZQgzgTgLghg");
	this.shape_183.setTransform(1795.4242,325.55,1.3939,1.8837);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#9F877B").s().p("AhVgFQgCgGgBgYIAAgWIArADICGAuQgPgBgTAAQgkABgPAJQgRALAFASQAFAQAVANQhYgXgPgpg");
	this.shape_184.setTransform(1798.9787,326.8215,1.3939,1.8837);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#91796C").s().p("AApABQgCgXgWAGQgPADggAEIgeACIBignIAXgCQAAArgDAIQgJAbgoATQAjgYgDgYg");
	this.shape_185.setTransform(1855.9589,325.032,1.3939,1.8837);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#91796C").s().p("AARAeQACgOgQgLQgNgIglgBIgiAAICMgvIAXgCQAAArgDAJQgMAkhCATQAPgMABgMg");
	this.shape_186.setTransform(1853.0666,326.021,1.3939,1.8837);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#9F877B").s().p("AiyAvQhTgWgPgoQgCgFAAgYIAAgXIEVAcQAXAAEBgcQABArgDAJQgOAmhTAXQhMAVhnABIgEAAQhlAAhKgVg");
	this.shape_187.setTransform(1825.5372,328.565,1.3939,1.8837);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#7C655A").s().p("AANACQARgmgKgEQgIgCgYAEIgYAEIAFgCQAxgSAagZIABADQAIBCgxAxQgUAVgdAUQAoghASgtg");
	this.shape_188.setTransform(1857.2867,345.0463,1.3939,1.8837);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#91796C").s().p("AAEATQAFgSAAgaQABgZADgGQA8gSAfgeIABAEQAIBCgxAwQhFBHhkAUQBcgaARg8g");
	this.shape_189.setTransform(1848.9233,349.6614,1.3939,1.8837);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#91796C").s().p("AANBQQg2gYgqgrQgggfgIgqQgDgRABgZIACgFQAgAiBPATQABAEABAfQABAaAHASQAXA8BpAXQg8gEg1gYg");
	this.shape_190.setTransform(1804.2441,349.9439,1.3939,1.8837);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#9F877B").s().p("AjpAMQgggfgIgpQgDgSABgYIACgGQAeAhBNAUQBIASBZACQDOACBKhJIAAAEQAIBCgxAwQhfBhiLAAQiLAAhehhg");
	this.shape_191.setTransform(1825.1958,350.0381,1.3939,1.8837);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#7C655A").s().p("AjpAPQgggfgIgpQgDgSABgYQABgFAEgEIAFgDQALAPAXANQBCAjCoAAQCoAABCgjQAXgNAKgNQAFAFAAAFQAIBCgxAwQhfBhiLAAQiLAAhehhg");
	this.shape_192.setTransform(1825.1958,349.473,1.3939,1.8837);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#BBA79C").s().p("AhXAxQAHgDAJAAQBxgGAbglQAPgSgFgRQgDgKgIgGQAUAPAAARQAAAagvAUQgvAThEAAg");
	this.shape_193.setTransform(1835.7774,382.2493,1.3939,1.8837);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#BBA79C").s().p("AgPATQgmgCgZgRQgXgPAIgEQADgBARAEIAnAHQAkAEAqgGIAhgGQAPgDACABQAJADgXAQQgZARgnACIgQABIgPgBg");
	this.shape_194.setTransform(1825.8276,378.7645,1.3939,1.8837);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#7C655A").s().p("AghAiQgigQgEgZQgDgOAIgJQADgFAMgGQAFgDAFgHQA4ATA6gDQgLAKglgCIg5gEQgXgBgFALQgFAKAMAPQAfApBAAHQgtgDgegPg");
	this.shape_195.setTransform(1816.4633,377.2104,1.3939,1.8837);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#7C655A").s().p("AA1AGQANgQgFgKQgFgMgYABQgjAEgVABQglABgLgJQA6ABA3gTQAGAJAFACQAMAGAEAGQAHAIgDAOQgEAZgiARQgfAPgtADQBBgIAegng");
	this.shape_196.setTransform(1834.5339,377.1162,1.3939,1.8837);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#7C655A").s().p("AgmATQhDgIAAgbIAWgCQBTAUBWgWQATADAAAIQABASgzAIQgaAEgaAAQgUAAgVgCg");
	this.shape_197.setTransform(1825.7068,372.2814,1.3939,1.8837);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#9F877B").s().p("AhaAcQgqgMgEgVQgDgKAIgHQAEgEALgFQAFgCAFgEQBqAZBpgaQAGAFAGACQALAFAEAEQAHAHgCAKQgFAVgqAMQgmALg0AAQg0AAgmgLg");
	this.shape_198.setTransform(1825.4997,374.6203,1.3939,1.8837);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#BBA79C").s().p("ABKAxQhDAAgvgTQgvgUAAgaQAAgRAUgPQgJAHgCAJQgFARAPASQAbAlBxAGQAJAAAHADg");
	this.shape_199.setTransform(1815.0084,382.2493,1.3939,1.8837);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#9F877B").s().p("AhyAoQgwgQAAgYQAAgWAwgRQAwgQBCAAQBDAAAwAQQAwARAAAWQAAAYgwAQQgwAQhDAAQhCAAgwgQg");
	this.shape_200.setTransform(1825.3929,377.1162,1.3939,1.8837);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#9F877B").s().p("AiLAyQg6gVAAgdQAAgcA6gVQA6gUBRAAQBSAAA6AUQA6AVAAAcQAAAdg6AVQg7AUhRAAQhRAAg6gUg");
	this.shape_201.setTransform(1825.3929,379.7063,1.3939,1.8837);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#E4D0AF").s().p("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");
	this.shape_202.setTransform(2147.8165,425.1928,1.0479,1.4161);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#A68C7D").s().p("ElAPANIIAA6PMKAfAAAIAAaPg");
	this.shape_203.setTransform(2147.5878,425.4849,1.0478,1.4159);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#C8DA7A").s().p("ElBgANIIAA6PMKDBAAAIAAaPg");
	this.shape_204.setTransform(2156.1014,563.3237,1.0478,1.4159);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4312.5,682.3);


(lib.אישכחוליושב = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0771B9").p("AAcgKQAIAUgCASQgCASgMAFQgLAFgNgMQgPgMgIgVQgIgUACgSQACgTAMgEQALgFANAMQAPAMAIAVg");
	this.shape.setTransform(103.0872,21.0206,1.5587,1.5587);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0771B9").s().p("AgEAsQgPgMgIgVQgIgUACgSQACgTAMgEQALgFANAMQAPAMAIAVQAIAUgCASQgCASgMAFIgHABQgJAAgIgIg");
	this.shape_1.setTransform(103.0872,21.0206,1.5587,1.5587);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#0771B9").p("AAcAKQgIAWgNAMQgNAMgMgEQgLgEgDgTQgDgSAIgUQAIgWANgMQANgMAMAFQALAEADASQADASgIAUg");
	this.shape_2.setTransform(85.8397,21.7781,1.5587,1.5587);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0771B9").s().p("AgSA0QgLgEgDgTQgDgSAIgUQAIgWANgMQANgMAMAFQALAEADASQADASgIAUQgIAWgNAMQgKAJgIAAIgHgBg");
	this.shape_3.setTransform(85.8397,21.7781,1.5587,1.5587);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#0771B9").p("AmMlPQgBAvAcAxQAaAqArAlQAjAdApAcQBAAqAOgJQhRA7hjACQgbAAgUgHQgYgJgJgTQgDgIgCgNQgBgPgCgHQgHgpghAIQggAHgHAlQgBAHgBAiQgBAagHANQgIASgVAQQgCABglAYQg1AhAEAnQABAPAMAOQALAMAQAGQAbAKAmgJQArgLAkgcQAkgcAUgnQAJAgAcAXQAbAWAhADQAiADAfgRQAegRAQgdQgeBfAJBlQgKgQgWADQgVADgRAPQgcAbgCACQgSAOgSgBQgQgBgWgTQgZgWgMgKQgWgSgTgIQgYgLgYAEQgbAEgOATQgZAjAhA+QAzBkBSBIQAgAdAaAIQASAGARgCQATgDAMgLQAOgMAQgtQAOgnAVgKQAWgKAeAQQARAJAhAXQAkAXAvADQAqAEAsgMQAngLArgWQAcgPAwgeQgBAqAgAgQAgAgApAAQArAAA3goQAxgmAkgyQAjgzATg6QAMgkgLgTQgLgWgdgBQgbAAgVAQQgQANgSAZQgZAjgFAGQgTAWgYAIQgaAKgVgMQgNgHgMgTQgRgdgDgDQgMgQgVgCQgVgDgHAQQAChfgghcQA9AbBEgcQBEgcAYg/QAbBCArAcQAZAQAfACQAgACAXgRQAZgRAFggQAFghgVgVQgPgNgvgMQgrgMgNgUQgJgPAAgZQADgdAAgOQAAgXgOgSQgQgUgTAGQgKAEgHAKQgGAJgBAMQgCAIAAAPQAAAPgBAHQgKBShaAEQhSAFg5gzQgJgJgCgGQgDgJAFgJQAEgJAJgGQAIgFAcgHQBFgRAvg6QAvg6AChGQADhchLhGQhAg7higZQhTgUhVAGQhWAFhPAgQiLA4gsBYQgRAjAAAjg");
	this.shape_4.setTransform(96.8425,91.7002,1.5587,1.5587);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0198FF").s().p("AlPJIQgagIgggdQhShIgzhkQghg+AZgjQAOgTAbgEQAYgEAYALQATAIAWASIAlAgQAWATAQABQASABASgOIAegdQARgPAVgDQAWgDAKAQQgJhlAehfQgQAdgeARQgfARgigDQghgDgbgWQgcgXgJggQgUAngkAcQgkAcgrALQgmAJgbgKQgQgGgLgMQgMgOgBgPQgEgnA1ghIAngZQAVgQAIgSQAHgNABgaIACgpQAHglAggHQAhgIAHApIADAWQACANADAIQAJATAYAJQAUAHAbAAQBjgCBRg7QgOAJhAgqQgpgcgjgdQgrglgagqQgcgxABgvQAAgjARgjQAshYCLg4QBPggBWgFQBVgGBTAUQBiAZBAA7QBLBGgDBcQgCBGgvA6QgvA6hFARQgcAHgIAFQgJAGgEAJQgFAJADAJQACAGAJAJQA5AzBSgFQBagEAKhSIABgWQAAgPACgIQABgMAGgJQAHgKAKgEQATgGAQAUQAOASAAAXQAAAOgDAdQAAAZAJAPQANAUArAMQAvAMAPANQAVAVgFAhQgFAggZARQgXARgggCQgfgCgZgQQgrgcgbhCQgYA/hEAcQhEAcg9gbQAgBcgCBfQAHgQAVADQAVACAMAQIAUAgQAMATANAHQAVAMAagKQAYgIATgWQAFgGAZgjQASgZAQgNQAVgQAbAAQAdABALAWQALATgMAkQgTA6gjAzQgkAygxAmQg3AogrAAQgpAAggggQggggABgqQgwAegcAPQgrAWgnALQgsAMgqgEQgvgDgkgXQghgXgRgJQgegQgWAKQgVAKgOAnQgQAtgOAMQgMALgTADIgJAAQgNAAgNgEg");
	this.shape_5.setTransform(96.8425,91.7002,1.5587,1.5587);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,195.8,185.8);


(lib.אישכחול = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// flash0_ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0771B9").p("AAegFQAEAUgFAQQgGARgMADQgMACgLgMQgMgNgFgWQgEgUAFgQQAGgRAMgDQALgCAMANQAMANAFAVg");
	this.shape.setTransform(107.8242,35.5096,3.0479,3.0479);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0771B9").s().p("AgMApQgMgNgFgWQgEgUAFgQQAGgRAMgDQALgCAMANQAMANAFAVQAEAUgFAQQgGARgMADIgEAAQgKAAgJgKg");
	this.shape_1.setTransform(107.8242,35.5096,3.0479,3.0479);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#0771B9").p("AAcAMQgIAUgOAKQgNALgMgFQgLgFgDgRQgCgSAIgTQAJgUANgKQANgLAMAFQALAFADARQACASgIATg");
	this.shape_2.setTransform(79.4829,32.7283,3.0479,3.0479);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0771B9").s().p("AgTAwQgLgFgDgRQgCgSAIgTQAJgUANgKQANgLAMAFQALAFADARQACASgIATQgIAUgOAKQgJAHgIAAQgEAAgEgBg");
	this.shape_3.setTransform(79.4829,32.7283,3.0479,3.0479);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#0771B9").p("AD2AhQgJBEhPAmQhOAmhlgOQhmgOhCg6QhCg5AKhDQAJhDBPgmQBOgmBlAOQBmAOBCA5QBBA6gJBCg");
	this.shape_4.setTransform(103.8857,50.8812,3.0483,3.0483);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0198FF").s().p("AgVCjQhmgOhCg6QhCg5AKhDQAJhDBPgmQBOgmBlAOQBmAOBCA5QBBA6gJBCQgJBEhPAmQg5AchFAAQgaAAgbgEg");
	this.shape_5.setTransform(103.8857,50.8812,3.0483,3.0483);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#0771B9").p("AACgTQgEAKAAAJQAAALAGAJ");
	this.shape_6.setTransform(43.3377,103.6767,3.0475,3.0475);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0198FF").s().p("AgCAAQgBgJAFgKIABAnQgFgJAAgLg");
	this.shape_7.setTransform(43.4819,103.6767,3.0475,3.0475);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#0771B9").p("ABZgSQgEgCgIAEQgJAEgDACQgXAIgKAAQgEAAgOgDQgOgEABgDQAMgMAAgMQACgYgzAEQgEAAgGgHQgGgHgCgBQgOgGgSAKQgSAKgDAOIAAAIQADAgAQAYQARAcAaANQA4AcBkgk");
	this.shape_8.setTransform(55.6285,114.5753,3.0475,3.0475);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0198FF").s().p("AguA+QgbgNgRgcQgPgYgDggIAAgIQACgOASgKQASgKAOAGIAJAIQAGAHADAAQAzgEgBAYQgBAMgLAMQgBADAOAEQAOADAEAAQAKAAAWgIIANgGQAIgEADACIACABIAUBHQg4AUgqAAQggAAgZgMg");
	this.shape_9.setTransform(56.1355,114.5753,3.0475,3.0475);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#0771B9").p("Ah4g+IAEAcQAHAhAOAUQArBEBchJQgGAFAVAkQAUAjAHAFQAMAIAIgHQAGgFAGgPQAOgogMgpQgLgogPgUQgYghgdAWQgHAGgNAAQgXABgYgg");
	this.shape_10.setTransform(159.4092,228.4055,3.0479,3.0479);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0198FF").s().p("ABSBgQgHgFgUgjQgVgkAGgFIAAAAIAAAAQhcBJgrhEQgOgUgHghIgEgcIBagnQAYAgAXgBQANAAAHgGQAdgWAYAhQAPAUALAoQAMApgOAoQgGAPgGAFQgEAEgFAAQgFAAgGgFg");
	this.shape_11.setTransform(159.3998,228.0991,3.0479,3.0479);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#0771B9").p("Ahqi8IgTAqQgUA0gGAwQgSCbCFBDIAdAIQAiAGAhgIQA3gNAWgXQAfgggZg0QgugggtgtQhZheAKhMQgQACgSABQgkABgJgHg");
	this.shape_12.setTransform(108.3308,153.6714,3.0483,3.0483);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0198FF").s().p("AgHC5IgdgIQiFhDASibQAGgwAUg0IATgqQAJAHAkgBIAigDQgKBMBZBeQAtAtAuAgQAZA0gfAgQgWAXg3ANQgSAFgTAAQgPAAgPgDg");
	this.shape_13.setTransform(108.3308,153.3306,3.0483,3.0483);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#0771B9").p("AgLgUQASAUAEAZ");
	this.shape_14.setTransform(40.6499,209.161,3.0475,3.0475);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0198FF").s().p("AgKgWQARAUAEAZg");
	this.shape_15.setTransform(40.4408,209.807,3.0475,3.0475);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#0771B9").p("AA6h1QgcgHgbAGQg2ALAAA9QgrgUgkgDQhHgGAoBPIAZAeQAfAhAbAWQBYBFAdhMQgMgvAFgnQAMhQBbAfQgYgNgWgOQgrgdAMgIg");
	this.shape_16.setTransform(53.5696,217.7814,3.0479,3.0479);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0198FF").s().p("Ag5BZQgcgWgeghIgZgeQgphPBIAGQAjADAsAUQAAg9A2gLQAbgGAbAHQgMAIAsAdQAWAOAYANQhbgfgMBQQgGAnAMAvQgPAogfAAQgcAAgqghg");
	this.shape_17.setTransform(47.3014,217.7814,3.0479,3.0479);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#0771B9").p("AgCgWQgFALADANQADANAJAI");
	this.shape_18.setTransform(146.5222,137.9614,3.0475,3.0475);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0198FF").s().p("AgFACQgDgNAFgLIAKAtQgJgIgDgNg");
	this.shape_19.setTransform(146.7906,137.9614,3.0475,3.0475);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#0771B9").p("AhUgNIAngBQAoAIAEAvIAJANQANAOANAHQAqAXAdg5QABgOgGgNQgNgaglAFQAHgXgPgUQgfgohyANg");
	this.shape_20.setTransform(130.4717,132.7239,3.0479,3.0479);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0198FF").s().p("AAhBLQgNgHgMgOIgJgNQgFgvgogIIgmABIgUhAQBzgNAeAoQAQAUgIAXQAlgFANAaQAHANgBAOQgVAogcAAQgLAAgMgGg");
	this.shape_21.setTransform(130.7038,132.7239,3.0479,3.0479);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#0771B9").p("AAegFQAEAUgFAQQgGARgMADQgMACgLgMQgMgNgFgVQgEgVAFgQQAGgRAMgDQALgCAMANQAMANAFAVg");
	this.shape_22.setTransform(101.6777,37.3095,3.2006,3.2006);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0771B9").s().p("AgMApQgMgNgFgVQgEgVAFgQQAGgRAMgDQALgCAMANQAMANAFAVQAEAUgFAQQgGARgMADIgEAAQgKAAgJgKg");
	this.shape_23.setTransform(101.6777,37.3095,3.2006,3.2006);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0771B9").s().p("AgTAwQgLgFgDgRQgCgSAIgTQAJgUANgKQANgLAMAFQALAFADARQACASgIATQgIAUgOAKQgJAIgJAAIgHgCg");
	this.shape_24.setTransform(71.9433,34.4268,3.2006,3.2006);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#0771B9").p("AD2AiQgJBDhPAmQhOAmhlgOQhmgOhCg5QhCg6AKhDQAJhDBPgmQBOgmBlAOQBmAOBCA5QBBA6gJBDg");
	this.shape_25.setTransform(97.3549,53.4799,3.2012,3.2012);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0198FF").s().p("AgVCjQhmgOhCg5QhCg6AKhDQAJhDBPgmQBOgmBlAOQBmAOBCA5QBBA6gJBDQgJBDhPAmQg5AchGAAQgaAAgagEg");
	this.shape_26.setTransform(97.3549,53.4799,3.2012,3.2012);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#0771B9").p("AgJgSQABALAGAIQAFAJAKAE");
	this.shape_27.setTransform(30.3587,143.1139,3.2002,3.2002);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#0198FF").s().p("AgEADQgGgHAAgMIAVAhQgKgFgFgJg");
	this.shape_28.setTransform(30.8616,142.3502,3.2002,3.2002);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#0771B9").p("AA+hGQgFABgEAHQgDAEgEAIQgNASgKAGQgfANABgEQACgRgFgKQgMgVgqAgQgDABgIgCQgKgCgCAAQgPADgKASQgKARAGANIAFAHQAUAZAaANQAdAOAegEQAjgEAkgdQAagVAdgl");
	this.shape_29.setTransform(47.9388,147.5025,3.2002,3.2002);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#0198FF").s().p("AhBA8QgbgMgUgZIgEgHQgGgOAKgRQAKgSAOgCQADgBAJADQAJACACgCQAqgfAMAUQAGALgDAQQgBAFAfgNQAKgGANgTIAHgMQAFgHAEgBIACAAIA5AyQgdAlgbAVQgjAcgkAFIgMAAQgXAAgXgLg");
	this.shape_30.setTransform(48.1028,147.4225,3.2002,3.2002);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#0771B9").p("Aheh1IgHAcQgGAhAFAZQAOBOBxggQgHACAFAqQAFAoAFAHQANAVAXgaQAdghAFgrQAFgngGgZQgKgngjAJQgJADgMgFQgXgJgKgm");
	this.shape_31.setTransform(145.4211,244.0386,3.2006,3.2006);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#0198FF").s().p("AAhBsQgFgHgFgoQgFgqAHgCQhxAggOhOQgFgZAGghIAHgcIBhgBQAKAmAXAJQAMAFAJgDQAjgJAKAnQAGAZgFAnQgFArgdAhQgNAOgKAAQgHAAgGgJg");
	this.shape_32.setTransform(145.4211,243.4325,3.2006,3.2006);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#0771B9").p("Ahqi8QgkBBgJBNQgSCbCFBDIAdAIQAiAGAhgIQA3gNAWgXQAfgggZg0QgugggtgtQhZheAKhMQgQACgSABQgkABgJgHg");
	this.shape_33.setTransform(102.0229,161.3828,3.2012,3.2012);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#0198FF").s().p("AgHC5IgdgIQiFhDASibQAJhNAkhBQAJAHAkgBIAigDQgKBMBZBeQAtAtAuAgQAZA0gfAgQgWAXg3ANQgSAFgTAAQgPAAgPgDg");
	this.shape_34.setTransform(102.0229,161.0249,3.2012,3.2012);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#0771B9").p("AgUgOQAXAKAPAW");
	this.shape_35.setTransform(57.8358,223.4225,3.2002,3.2002);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#0198FF").s().p("AgSgPQAXAKAOAWg");
	this.shape_36.setTransform(57.3435,223.7959,3.2002,3.2002);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#0771B9").p("AAYh9QgHABgKAEQgTAGgOAKQguAfAXA4QgvgBgiALQhEAUBEA7QA3AfA2APQBsAegEhSQgdgmgKgmQgUhPBggGQgbgDgagFQgzgKAIgMg");
	this.shape_37.setTransform(67.9127,224.3943,3.2006,3.2006);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#0198FF").s().p("AABB2Qg2gPg3gfQhEg7BEgUQAigLAwABQgYg4AugfQAOgKATgGQAKgEAHgBQgIAMA0AKQAaAFAbADQhgAGAUBPQAKAmAdAmQADA8g6AAQgVAAgdgIg");
	this.shape_38.setTransform(60.7099,224.3943,3.2006,3.2006);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#0771B9").p("AAJgWQgKAIgDAMQgEANAFAN");
	this.shape_39.setTransform(125.4687,165.0718,3.2002,3.2002);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#0198FF").s().p("AgFgBQADgNAKgJIgMAuQgFgMAEgMg");
	this.shape_40.setTransform(125.7839,165.0718,3.2002,3.2002);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#0771B9").p("AhJgrIAjARQAfAagTArIACAQQAFATAIAMQAZAoA1gjQAIgMAAgPQABgdgigOQARgQgEgYQgIgyhrgsg");
	this.shape_41.setTransform(115.1765,148.9786,3.2006,3.2006);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#0198FF").s().p("AgMBZQgIgMgEgTIgDgQQATgrgfgaIgjgRIAOhCQBrAsAIAyQAEAYgSAQQAjAOgBAdQgBAPgHAMQgZARgTAAQgWAAgNgWg");
	this.shape_42.setTransform(115.2848,149.2793,3.2006,3.2006);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#0771B9").p("AAcAMQgIAUgOAKQgNALgMgFQgLgFgDgRQgCgSAIgTQAIgTAOgLQANgLAMAFQALAFADARQACASgIATg");
	this.shape_43.setTransform(72.6652,29.226,3.3386,3.3386);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#0771B9").s().p("AgTAwQgLgFgDgRQgCgSAIgTQAIgTAOgLQANgLAMAFQALAFADARQACASgIATQgIAUgOAKQgJAIgJAAIgHgCg");
	this.shape_44.setTransform(72.6652,29.226,3.3386,3.3386);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#0771B9").p("AgMgNQADAKAJAGQAHAHALAB");
	this.shape_45.setTransform(37.4434,173.2434,3.3381,3.3381);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#0198FF").s().p("AgDAFQgIgGgEgLIAfAYQgLAAgIgHg");
	this.shape_46.setTransform(38.24,172.6728,3.3381,3.3381);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#0771B9").p("AAphRQgDACgDAJQgBAEgDAJQgHAWgHAIQgaAWgBgFQgCgQgJgJQgRgQgfAqQgCACgJABQgKAAgCABQgNAGgEAUQgFAUAKALIAGAFQAaASAdAFQAgAGAagMQAigPAaglQATgbARgs");
	this.shape_47.setTransform(56.0241,171.4592,3.3381,3.3381);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#0198FF").s().p("AgrBQQgdgFgagSIgGgFQgKgLAFgUQAEgUANgGIAMgBQAJgBACgCQAfgqARAQQAJAJACAQQABAFAagWQAHgIAHgWIAEgNQADgJADgCIACAAIBEAgQgRAsgTAbQgaAlgiAPQgRAIgVAAQgKAAgKgCg");
	this.shape_48.setTransform(56.0241,171.3757,3.3381,3.3381);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#0771B9").p("AgfiJIgVATQgXAYgKAYQggBJBwAkQgHgDgSAmQgSAkAAAJQgBAYAigJQAogKAdgiQAbgeAIgZQAOglgigMQgKgCgHgLQgOgUANgl");
	this.shape_49.setTransform(130.7965,239.8196,3.3386,3.3386);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#0198FF").s().p("AgwB4QAAgJASgkQASglAHACIAAAAIAAAAQhwgkAghJQAKgYAXgYIAVgTIBSA1QgNAlAOAUQAHALAKACQAiAMgOAlQgIAZgbAeQgdAigoAKQgJACgGAAQgTAAABgRg");
	this.shape_50.setTransform(130.7965,239.5965,3.3386,3.3386);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#0771B9").p("AgXADQAYgIAaAG");
	this.shape_51.setTransform(81.9352,247.3855,3.3381,3.3381);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#0198FF").s().p("AAZABIgyACQAZgIAZAGg");
	this.shape_52.setTransform(82.5528,247.4349,3.3381,3.3381);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#0771B9").p("AhKhZIgKAOQgKASgEARQgMA2A3AZIgUAUQgXAXgLAUQgjA9BagDQA9gOAygaQBkg0g6g5QgvgIgigWQhDgsBBhGIgrAfQgtAbgCgOg");
	this.shape_53.setTransform(93.5473,234.6932,3.3386,3.3386);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#0198FF").s().p("AhtBYQALgTAXgYIAUgTQg3gaAMg1QAEgRAKgSIAKgPQACAPAtgcIArgeQhBBFBDAtQAiAWAvAIQA6A5hkA0QgyAZg9APIgIAAQhRAAAig7g");
	this.shape_54.setTransform(93.5473,239.1653,3.3386,3.3386);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#0771B9").p("AAYAHQgJgIgNgDQgNgCgMAG");
	this.shape_55.setTransform(32.3984,154.6245,3.3381,3.3381);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#0198FF").s().p("AgXAAQAMgHANACQANADAJAIg");
	this.shape_56.setTransform(32.3984,154.9025,3.3381,3.3381);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#0771B9").p("AAmhPIgNAlQgWAhgugOQgGACgJADQgSAGgMAJQglAdApAxQANAGAPgBQAdgCAKgjQARAQAYgHQAxgNAghvg");
	this.shape_57.setTransform(47.1598,142.9545,3.3386,3.3386);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#0198FF").s().p("AhTBLQgpgyAlgcQALgKASgGIAQgEQAtAOAXgiIANgkIBDAGQggBvgxANQgZAHgRgQQgKAkgdACIgEAAQgNAAgKgFg");
	this.shape_58.setTransform(46.9167,143.0135,3.3386,3.3386);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#0771B9").p("AAegFQAEAUgFAQQgFARgNADQgLACgMgMQgMgNgEgVQgFgVAGgQQAFgRAMgDQAMgCALANQAMANAFAVg");
	this.shape_59.setTransform(102.8278,33.5029,3.2619,3.2619);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#0771B9").s().p("AgMApQgMgNgEgVQgFgVAGgQQAFgRAMgDQALgCAMANQAMANAEAVQAFAUgGAQQgEARgNADIgEAAQgJAAgKgKg");
	this.shape_60.setTransform(102.8278,33.5029,3.2619,3.2619);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#0771B9").p("AD2AiQgJBDhPAmQhOAmhlgOQhmgOhCg5QhCg6AKhDQAJhDBOgmQBPgmBlAOQBmAOBCA5QBCA6gKBDg");
	this.shape_61.setTransform(98.4371,49.981,3.2624,3.2624);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#0198FF").s().p("AgVCjQhmgOhCg5QhBg6AJhDQAJhDBOgmQBPgmBlAOQBmAOBBA5QBDA6gKBDQgJBDhOAmQg6AchGAAQgaAAgagEg");
	this.shape_62.setTransform(98.4371,49.981,3.2624,3.2624);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#0771B9").p("AgSAKQALAAAIgGQAJgFAEgK");
	this.shape_63.setTransform(87.4077,200.8918,3.2616,3.2616);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#0198FF").s().p("AARgKQgFAKgJAFQgIAGgLAAg");
	this.shape_64.setTransform(86.5923,200.411,3.2616,3.2616);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#0771B9").p("AhFg+QAAAFAIAEQAEADAHAFQASAMAHALQAMAfgFgBIgbADQgVALAfArQACADgDAIQgCAKAAACQACAOASALQASAKANgGIAHgEQAZgUANgaQAPgcgDgeQgHg+hRhC");
	this.shape_65.setTransform(92.3025,183.0881,3.2616,3.2616);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#0198FF").s().p("AgSBxQgSgKgCgPQAAgCACgJQADgJgCgDQgfgqAVgLIAbgDQAFABgMgfQgHgLgSgNIgLgHQgIgFAAgEIgBgCIA0g4QBRBCAHA/QADAdgPAdQgNAagZAUIgHAEQgFACgGAAQgIAAgMgHg");
	this.shape_66.setTransform(92.2209,182.9094,3.2616,3.2616);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#0771B9").p("ABThxQgwgEgkARQhJAiA8BlQgEgGgnAPQgkAPgHAHQgRASAgAQQAmAUArgHQAngFAXgMQAkgUgSgfQgFgJABgMQADgYAjgS");
	this.shape_67.setTransform(63.6424,223.5069,3.2619,3.2619);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#0198FF").s().p("AhXBkQgfgQAQgSQAHgHAlgPQAmgPAEAGIAAAAIAAAAQg7hlBJgiQAjgRAxAEIAaBfQgiASgDAYQgCAMAGAJQARAfgjAUQgXAMgnAFQgLACgKAAQggAAgdgPg");
	this.shape_68.setTransform(64.0645,223.5069,3.2619,3.2619);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#0771B9").p("Ahqi8QgkBBgJBNQgSCbCFBDIAdAIQAiAGAggIQA4gNAWgXQAfgggZg0QgugggtgtQhZheAKhMQgQACgSABQgkABgJgHg");
	this.shape_69.setTransform(103.2583,159.947,3.2624,3.2624);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#0198FF").s().p("AgHC5IgdgIQiFhDASibQAJhNAkhBQAJAHAkgBIAigDQgKBMBZBeQAtAtAuAgQAZA0gfAgQgWAXg4ANQgRAFgTAAQgPAAgPgDg");
	this.shape_70.setTransform(103.2583,159.5822,3.2624,3.2624);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#0771B9").p("AgRASQAOgWAXgL");
	this.shape_71.setTransform(140.8304,233.0504,3.2616,3.2616);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#0198FF").s().p("AATgQIglAhQAOgWAXgLg");
	this.shape_72.setTransform(141.3061,233.435,3.2616,3.2616);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#0771B9").p("Ah9glIACASQAEATAHAQQAZAyA7gPIgDAcQgDAgAEAWQAMBGBDg7QAmgyAXg0QAshmhRgIQgqAXgnAEQhRAJAHhgIgPA0QgRAxgLgKg");
	this.shape_73.setTransform(144.7787,221.7686,3.2619,3.2619);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#0198FF").s().p("AgeBwQgEgWADggIADgcQg7APgZgxQgHgQgEgUIgCgSQALAKARgxIAPg0QgHBgBRgJQAngEAqgXQBRAIgsBmQgXA0gmAyQgfAbgTAAQgXAAgGgmg");
	this.shape_74.setTransform(144.7787,228.6013,3.2619,3.2619);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#0771B9").p("AAKAXQACgNgHgLQgFgMgNgF");
	this.shape_75.setTransform(22.7694,125.9553,3.2616,3.2616);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#0198FF").s().p("AgLgUQALAFAHAMQAHALgDANg");
	this.shape_76.setTransform(22.2824,126.6167,3.2616,3.2616);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#0771B9").p("ABQgOQgRALgUACQgoACgRgsQgUgSgYgFQgugLgNA/IANAYQATAWAjgPIACAOQAEAQANAJQAoAfBrgtg");
	this.shape_77.setTransform(43.0811,128.4068,3.2619,3.2619);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#0198FF").s().p("AgeA4QgNgJgEgQIgCgOQgjAPgTgWIgNgYQANg/AuALQAYAFAUASQARAsAogCQAUgCARgLIAkA4QhAAbgoAAQgaAAgRgNg");
	this.shape_78.setTransform(42.7269,128.4068,3.2619,3.2619);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21,p:{scaleX:3.0479,scaleY:3.0479,x:130.7038,y:132.7239}},{t:this.shape_20,p:{scaleX:3.0479,scaleY:3.0479,x:130.4717,y:132.7239}},{t:this.shape_19,p:{scaleX:3.0475,scaleY:3.0475,x:146.7906,y:137.9614}},{t:this.shape_18,p:{scaleX:3.0475,scaleY:3.0475,x:146.5222,y:137.9614}},{t:this.shape_17,p:{scaleX:3.0479,scaleY:3.0479,x:47.3014,y:217.7814}},{t:this.shape_16,p:{scaleX:3.0479,scaleY:3.0479,x:53.5696,y:217.7814}},{t:this.shape_15,p:{scaleX:3.0475,scaleY:3.0475,x:40.4408,y:209.807}},{t:this.shape_14,p:{scaleX:3.0475,scaleY:3.0475,x:40.6499,y:209.161}},{t:this.shape_13,p:{x:108.3308,y:153.3306}},{t:this.shape_12,p:{x:108.3308,y:153.6714}},{t:this.shape_11,p:{scaleX:3.0479,scaleY:3.0479,x:159.3998,y:228.0991}},{t:this.shape_10,p:{scaleX:3.0479,scaleY:3.0479,x:159.4092,y:228.4055}},{t:this.shape_9,p:{scaleX:3.0475,scaleY:3.0475,x:56.1355,y:114.5753}},{t:this.shape_8,p:{scaleX:3.0475,scaleY:3.0475,x:55.6285,y:114.5753}},{t:this.shape_7,p:{scaleX:3.0475,scaleY:3.0475,x:43.4819,y:103.6767}},{t:this.shape_6,p:{scaleX:3.0475,scaleY:3.0475,x:43.3377,y:103.6767}},{t:this.shape_5,p:{x:103.8857,y:50.8812}},{t:this.shape_4,p:{x:103.8857,y:50.8812}},{t:this.shape_3,p:{scaleX:3.0479,scaleY:3.0479,x:79.4829,y:32.7283}},{t:this.shape_2,p:{scaleX:3.0479,scaleY:3.0479,x:79.4829,y:32.7283}},{t:this.shape_1,p:{scaleX:3.0479,scaleY:3.0479,x:107.8242,y:35.5096}},{t:this.shape,p:{scaleX:3.0479,scaleY:3.0479,x:107.8242,y:35.5096}}]}).to({state:[{t:this.shape_42,p:{scaleX:3.2006,scaleY:3.2006,x:115.2848,y:149.2793}},{t:this.shape_41,p:{scaleX:3.2006,scaleY:3.2006,x:115.1765,y:148.9786}},{t:this.shape_40,p:{scaleX:3.2002,scaleY:3.2002,x:125.7839,y:165.0718}},{t:this.shape_39,p:{scaleX:3.2002,scaleY:3.2002,x:125.4687,y:165.0718}},{t:this.shape_38,p:{scaleX:3.2006,scaleY:3.2006,x:60.7099,y:224.3943}},{t:this.shape_37,p:{scaleX:3.2006,scaleY:3.2006,x:67.9127,y:224.3943}},{t:this.shape_36,p:{scaleX:3.2002,scaleY:3.2002,x:57.3435,y:223.7959}},{t:this.shape_35,p:{scaleX:3.2002,scaleY:3.2002,x:57.8358,y:223.4225}},{t:this.shape_34,p:{scaleX:3.2012,scaleY:3.2012,x:102.0229,y:161.0249}},{t:this.shape_33,p:{scaleX:3.2012,scaleY:3.2012,x:102.0229,y:161.3828}},{t:this.shape_32,p:{scaleX:3.2006,scaleY:3.2006,x:145.4211,y:243.4325}},{t:this.shape_31,p:{scaleX:3.2006,scaleY:3.2006,x:145.4211,y:244.0386}},{t:this.shape_30,p:{scaleX:3.2002,scaleY:3.2002,x:48.1028,y:147.4225}},{t:this.shape_29,p:{scaleX:3.2002,scaleY:3.2002,x:47.9388,y:147.5025}},{t:this.shape_28,p:{scaleX:3.2002,scaleY:3.2002,x:30.8616,y:142.3502}},{t:this.shape_27,p:{scaleX:3.2002,scaleY:3.2002,x:30.3587,y:143.1139}},{t:this.shape_26,p:{scaleX:3.2012,scaleY:3.2012,x:97.3549,y:53.4799}},{t:this.shape_25,p:{scaleX:3.2012,scaleY:3.2012,x:97.3549,y:53.4799}},{t:this.shape_24,p:{scaleX:3.2006,scaleY:3.2006,x:71.9433,y:34.4268}},{t:this.shape_2,p:{scaleX:3.2006,scaleY:3.2006,x:71.9433,y:34.4268}},{t:this.shape_23,p:{scaleX:3.2006,scaleY:3.2006,x:101.6777,y:37.3095}},{t:this.shape_22,p:{scaleX:3.2006,scaleY:3.2006,x:101.6777,y:37.3095}}]},4).to({state:[{t:this.shape_58,p:{scaleX:3.3386,scaleY:3.3386,x:46.9167,y:143.0135}},{t:this.shape_57,p:{scaleX:3.3386,scaleY:3.3386,x:47.1598,y:142.9545}},{t:this.shape_56,p:{scaleX:3.3381,scaleY:3.3381,x:32.3984,y:154.9025}},{t:this.shape_55,p:{scaleX:3.3381,scaleY:3.3381,x:32.3984,y:154.6245}},{t:this.shape_54,p:{scaleX:3.3386,scaleY:3.3386,x:93.5473,y:239.1653}},{t:this.shape_53,p:{scaleX:3.3386,scaleY:3.3386,x:93.5473,y:234.6932}},{t:this.shape_52,p:{scaleX:3.3381,scaleY:3.3381,x:82.5528,y:247.4349}},{t:this.shape_51,p:{scaleX:3.3381,scaleY:3.3381,x:81.9352,y:247.3855}},{t:this.shape_34,p:{scaleX:3.339,scaleY:3.339,x:104.035,y:161.272}},{t:this.shape_33,p:{scaleX:3.339,scaleY:3.339,x:104.035,y:161.6453}},{t:this.shape_50,p:{scaleX:3.3386,scaleY:3.3386,x:130.7965,y:239.5965}},{t:this.shape_49,p:{scaleX:3.3386,scaleY:3.3386,x:130.7965,y:239.8196}},{t:this.shape_48,p:{scaleX:3.3381,scaleY:3.3381,x:56.0241,y:171.3757}},{t:this.shape_47,p:{scaleX:3.3381,scaleY:3.3381,x:56.0241,y:171.4592}},{t:this.shape_46,p:{scaleX:3.3381,scaleY:3.3381,x:38.24,y:172.6728}},{t:this.shape_45,p:{scaleX:3.3381,scaleY:3.3381,x:37.4434,y:173.2434}},{t:this.shape_26,p:{scaleX:3.339,scaleY:3.339,x:99.1019,y:49.0969}},{t:this.shape_25,p:{scaleX:3.339,scaleY:3.339,x:99.1019,y:49.0969}},{t:this.shape_44,p:{scaleX:3.3386,scaleY:3.3386,x:72.6652,y:29.226}},{t:this.shape_43,p:{scaleX:3.3386,scaleY:3.3386,x:72.6652,y:29.226}},{t:this.shape_23,p:{scaleX:3.3386,scaleY:3.3386,x:103.6818,y:32.233}},{t:this.shape_22,p:{scaleX:3.3386,scaleY:3.3386,x:103.6818,y:32.233}}]},5).to({state:[{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_44,p:{scaleX:3.2619,scaleY:3.2619,x:72.6053,y:30.565}},{t:this.shape_43,p:{scaleX:3.2619,scaleY:3.2619,x:72.6053,y:30.565}},{t:this.shape_60},{t:this.shape_59}]},5).to({state:[{t:this.shape_58,p:{scaleX:3.338,scaleY:3.338,x:46.9594,y:147.3837}},{t:this.shape_57,p:{scaleX:3.338,scaleY:3.338,x:47.2025,y:147.3248}},{t:this.shape_56,p:{scaleX:3.3371,scaleY:3.3371,x:32.4423,y:159.2578}},{t:this.shape_55,p:{scaleX:3.3371,scaleY:3.3371,x:32.4423,y:158.9798}},{t:this.shape_54,p:{scaleX:3.338,scaleY:3.338,x:93.5809,y:243.5166}},{t:this.shape_53,p:{scaleX:3.338,scaleY:3.338,x:93.5809,y:239.0454}},{t:this.shape_52,p:{scaleX:3.3371,scaleY:3.3371,x:82.5829,y:251.7647}},{t:this.shape_51,p:{scaleX:3.3371,scaleY:3.3371,x:81.9655,y:251.7154}},{t:this.shape_34,p:{scaleX:3.3386,scaleY:3.3386,x:104.0738,y:165.6519}},{t:this.shape_33,p:{scaleX:3.3386,scaleY:3.3386,x:104.0738,y:166.0251}},{t:this.shape_50,p:{scaleX:3.338,scaleY:3.338,x:130.8227,y:243.9478}},{t:this.shape_49,p:{scaleX:3.338,scaleY:3.338,x:130.8227,y:244.1708}},{t:this.shape_48,p:{scaleX:3.3371,scaleY:3.3371,x:56.0615,y:175.7264}},{t:this.shape_47,p:{scaleX:3.3371,scaleY:3.3371,x:56.0615,y:175.8099}},{t:this.shape_46,p:{scaleX:3.3371,scaleY:3.3371,x:38.2823,y:177.0231}},{t:this.shape_45,p:{scaleX:3.3371,scaleY:3.3371,x:37.4859,y:177.5936}},{t:this.shape_26,p:{scaleX:3.3386,scaleY:3.3386,x:99.1413,y:53.4901}},{t:this.shape_25,p:{scaleX:3.3386,scaleY:3.3386,x:99.1413,y:53.4901}},{t:this.shape_44,p:{scaleX:3.338,scaleY:3.338,x:72.7029,y:33.6187}},{t:this.shape_43,p:{scaleX:3.338,scaleY:3.338,x:72.7029,y:33.6187}},{t:this.shape_23,p:{scaleX:3.338,scaleY:3.338,x:103.7134,y:36.6251}},{t:this.shape_22,p:{scaleX:3.338,scaleY:3.338,x:103.7134,y:36.6251}}]},5).to({state:[{t:this.shape_42,p:{scaleX:3.2003,scaleY:3.2003,x:116.7251,y:149.2657}},{t:this.shape_41,p:{scaleX:3.2003,scaleY:3.2003,x:116.6169,y:148.965}},{t:this.shape_40,p:{scaleX:3.1999,scaleY:3.1999,x:127.221,y:165.0535}},{t:this.shape_39,p:{scaleX:3.1999,scaleY:3.1999,x:126.9058,y:165.0535}},{t:this.shape_38,p:{scaleX:3.2003,scaleY:3.2003,x:62.1552,y:224.3739}},{t:this.shape_37,p:{scaleX:3.2003,scaleY:3.2003,x:69.3573,y:224.3739}},{t:this.shape_36,p:{scaleX:3.1999,scaleY:3.1999,x:58.7881,y:223.7712}},{t:this.shape_35,p:{scaleX:3.1999,scaleY:3.1999,x:59.2804,y:223.3979}},{t:this.shape_34,p:{scaleX:3.201,scaleY:3.201,x:103.4684,y:161.0172}},{t:this.shape_33,p:{scaleX:3.201,scaleY:3.201,x:103.4684,y:161.375}},{t:this.shape_32,p:{scaleX:3.2003,scaleY:3.2003,x:146.8587,y:243.4103}},{t:this.shape_31,p:{scaleX:3.2003,scaleY:3.2003,x:146.8587,y:244.0163}},{t:this.shape_30,p:{scaleX:3.1999,scaleY:3.1999,x:49.5484,y:147.4062}},{t:this.shape_29,p:{scaleX:3.1999,scaleY:3.1999,x:49.3844,y:147.4862}},{t:this.shape_28,p:{scaleX:3.1999,scaleY:3.1999,x:32.3091,y:142.3344}},{t:this.shape_27,p:{scaleX:3.1999,scaleY:3.1999,x:31.8063,y:143.098}},{t:this.shape_26,p:{scaleX:3.201,scaleY:3.201,x:98.8006,y:53.4772}},{t:this.shape_25,p:{scaleX:3.201,scaleY:3.201,x:98.8006,y:53.4772}},{t:this.shape_24,p:{scaleX:3.2003,scaleY:3.2003,x:73.3875,y:34.4236}},{t:this.shape_2,p:{scaleX:3.2003,scaleY:3.2003,x:73.3875,y:34.4236}},{t:this.shape_23,p:{scaleX:3.2003,scaleY:3.2003,x:103.1193,y:37.306}},{t:this.shape_22,p:{scaleX:3.2003,scaleY:3.2003,x:103.1193,y:37.306}}]},5).to({state:[{t:this.shape_21,p:{scaleX:3.0478,scaleY:3.0478,x:126.2567,y:134.9661}},{t:this.shape_20,p:{scaleX:3.0478,scaleY:3.0478,x:126.0247,y:134.9661}},{t:this.shape_19,p:{scaleX:3.0474,scaleY:3.0474,x:142.3431,y:140.2035}},{t:this.shape_18,p:{scaleX:3.0474,scaleY:3.0474,x:142.0747,y:140.2035}},{t:this.shape_17,p:{scaleX:3.0478,scaleY:3.0478,x:42.8568,y:220.0211}},{t:this.shape_16,p:{scaleX:3.0478,scaleY:3.0478,x:49.1248,y:220.0211}},{t:this.shape_15,p:{scaleX:3.0474,scaleY:3.0474,x:35.9964,y:212.0469}},{t:this.shape_14,p:{scaleX:3.0474,scaleY:3.0474,x:36.2056,y:211.4009}},{t:this.shape_13,p:{x:103.9308,y:155.5806}},{t:this.shape_12,p:{x:103.9308,y:155.9214}},{t:this.shape_11,p:{scaleX:3.0478,scaleY:3.0478,x:154.9519,y:230.3385}},{t:this.shape_10,p:{scaleX:3.0478,scaleY:3.0478,x:154.9613,y:230.6448}},{t:this.shape_9,p:{scaleX:3.0474,scaleY:3.0474,x:51.6907,y:116.8181}},{t:this.shape_8,p:{scaleX:3.0474,scaleY:3.0474,x:51.1838,y:116.8181}},{t:this.shape_7,p:{scaleX:3.0474,scaleY:3.0474,x:39.0375,y:105.9198}},{t:this.shape_6,p:{scaleX:3.0474,scaleY:3.0474,x:38.8933,y:105.9198}},{t:this.shape_5,p:{x:99.4857,y:53.1312}},{t:this.shape_4,p:{x:99.4857,y:53.1312}},{t:this.shape_3,p:{scaleX:3.0478,scaleY:3.0478,x:75.0374,y:34.9736}},{t:this.shape_2,p:{scaleX:3.0478,scaleY:3.0478,x:75.0374,y:34.9736}},{t:this.shape_1,p:{scaleX:3.0478,scaleY:3.0478,x:103.3779,y:37.7548}},{t:this.shape,p:{scaleX:3.0478,scaleY:3.0478,x:103.3779,y:37.7548}}]},5).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.6,-7.6,203.1,301.3);


(lib.אישירוק = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// flash0_ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4A8522").s().p("AgTA/QgTgVgHggQgHggAJgaQAIgaATgEQASgEATAUQASAVAHAgQAHAggJAaQgIAagTAEIgHAAQgOAAgPgQg");
	this.shape.setTransform(142.9872,143.8349,1.8696,1.8696);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4A8522").s().p("AgeBKQgRgHgEgbQgEgbANgeQAMgfAWgQQAVgRASAHQARAIAEAbQAEAbgNAeQgMAfgWAQQgOAMgNAAQgGAAgGgDg");
	this.shape_1.setTransform(116.1113,141.1948,1.8696,1.8696);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#7DA761").p("AF9A0QgOBph6A6Qh5A7idgVQiegWhmhZQhlhZAOhoQAOhpB6g6QB5g7CdAVQCfAWBlBZQBmBZgPBog");
	this.shape_2.setTransform(139.1002,158.432,1.8702,1.8702);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A4C290").s().p("AghD9QiegWhmhZQhlhZAOhoQAOhpB6g6QB5g7CdAVQCfAWBlBZQBmBZgPBoQgOBph6A6QhZArhtAAQgnAAgpgFg");
	this.shape_3.setTransform(139.1002,158.432,1.8702,1.8702);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#7DA761").ss(0.9,1,1).p("AADgeQgIAOABAQQAAASAJAN");
	this.shape_4.setTransform(82.0347,208.6643,1.8696,1.8696);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#7DA761").ss(0.9).p("ACMgcIgDgCQgGgCgMAGQgOAHgFACQggANgTAAQgzgKADgFQASgUABgSQADglhRAFQgFABgJgKQgKgLgEgCQgVgJgcAPQgbAPgEAXQgBAEABAIQAEAxAYAnQAaAqApAUQAzAaBGgHQA0gGBFgY");
	this.shape_5.setTransform(93.7169,219.0288,1.8689,1.8689);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A5C291").s().p("AhJBfQgpgUgZgqQgZgngEgxQgBgIABgEQAEgXAbgPQAcgPAWAJQADACAKALQAJAKAGgBQBQgFgDAlQgBASgRAUQgEAFA0AKQASAAAggNIATgJQANgGAFACIADACIAfBwQhFAYg0AGIgdABQgzAAgpgUg");
	this.shape_6.setTransform(94.0288,219.0288,1.8689,1.8689);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#7DA761").p("Ai7hgIAHAsQALAzAVAgQBDBoCPhwQgJAHAgA5QAfA2ALAIQAfAVASgzQAWg/gShAQgRg8gXghQglgzguAiQgLAKgTABQglAAglgx");
	this.shape_7.setTransform(192.009,327.0908,1.8696,1.8696);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A5C291").s().p("AB/CWQgLgIgfg2Qggg5AJgHQiPBwhDhoQgVgggLgzIgHgsICMg8QAlAxAlAAQATgBALgKQAugiAlAzQAXAhARA8QASBAgWA/QgNAkgTAAQgIAAgJgGg");
	this.shape_8.setTransform(192.004,326.9026,1.8696,1.8696);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#7DA761").p("AilkjQg3BjgOB5QgdDvDOBoIAtANQA2AKAygMQBWgWAigjQAvgxglhSQhIgwhGhIQiJiQAPh2QgZADgcABQg4ADgOgLg");
	this.shape_9.setTransform(143.3753,256.1489,1.8702,1.8702);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A6C392").s().p("AgMEfIgtgNQjOhoAdjwQAOh4A3hkQAOALA4gCQAcgBAZgEQgPB2CJCRQBGBHBIAxQAlBRgvAxQgiAkhWAVQgbAHgeAAQgXAAgYgEg");
	this.shape_10.setTransform(143.3753,255.9091,1.8702,1.8702);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#7DA761").ss(1,1,1).p("AgRgiQAcAdAHAo");
	this.shape_11.setTransform(79.1394,309.5775,1.8696,1.8696);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#7DA761").p("ABli3QgrgKgqAJQhUASAABdQhEgeg3gFQhugKA/B8IAmAuQAwA0ArAiQCIBrAsh3QgThHAJg+QATh8CNAwQgmgUghgWQhEgtATgNg");
	this.shape_12.setTransform(89.4329,317.1268,1.8696,1.8696);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A3C18F").s().p("AhZCKQgrgigvg0IgnguQg+h8BuAKQA3AFBDAeQAAhdBUgSQArgJAqAKQgSANBDAtQAiAWAlAUQiNgwgSB8QgKA+ATBHQgXA/gwAAQgrAAhCgzg");
	this.shape_13.setTransform(85.5761,317.1268,1.8696,1.8696);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#7DA761").ss(1.1,1,1).p("AgFgjQgJASAFAUQAFAVAPAN");
	this.shape_14.setTransform(180.2596,241.1958,1.8696,1.8696);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#7DA761").ss(1.1).p("AiDgUIATgDQAWgDATADQA+ANAHBJIAOAUQAUAWAUALQBBAjAuhYQABgVgKgVQgUgng5AGQAMgjgYgfQgwg+iyAUg");
	this.shape_15.setTransform(164.6318,236.2287,1.8696,1.8696);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#A4C290").s().p("AA0B0QgVgLgTgWIgPgUQgHhJg9gNQgUgDgWADIgSADIgehkQCygUAvA+QAYAfgMAjQA5gGAVAnQAKAVgCAVQghA/gqAAQgRAAgSgKg");
	this.shape_16.setTransform(164.7867,236.2287,1.8696,1.8696);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#4A8522").s().p("AgeBKQgRgHgEgbQgEgbANgeQAMgfAWgQQAUgRATAHQARAIAEAbQAEAbgNAeQgNAfgVAQQgOAMgNAAQgGAAgGgDg");
	this.shape_17.setTransform(114.3363,139.7996,1.9225,1.9225);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#7DA761").ss(0.9,1,1).p("AgRgYQABARAJANQAJAOAQAG");
	this.shape_18.setTransform(76.1266,240.2254,1.9225,1.9225);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#7DA761").ss(0.9).p("ABihtIgDAAQgHABgHAMQgEAGgHAMQgUAdgPAJQgxAUABgGQAEgagJgQQgSgghBAwQgEADgNgDQgPgEgDABQgXAEgPAbQgQAbAKAWQACAFAFAFQAeAmAqAUQAsAWAugGQA4gHA3gsQApghAtg5");
	this.shape_19.setTransform(92.06,244.9749,1.922,1.922);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#A5C291").s().p("AhmBdQgpgUgfgmQgEgFgDgFQgJgWAPgbQAPgbAXgEQADgBAQAEQANADAEgDQBBgwASAgQAJAQgEAaQgBAGAwgUQAPgJAUgdIALgSQAIgMAGgBIADAAIBYBNQgsA5gpAhQg4Asg3AHIgUABQgkAAgjgRg");
	this.shape_20.setTransform(92.1593,244.9749,1.922,1.922);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#7DA761").p("AiSi0IgLArQgJAzAHAmQAXB6CugxQgLADAIBAQAIA+AIAMQAMASAQgFQAMgEAQgSQAtgyAIhDQAHg9gJgnQgPg+g3APQgPAFgRgIQgkgOgPg7");
	this.shape_21.setTransform(182.7529,334.7542,1.9225,1.9225);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#A5C291").s().p("AAzCoQgIgMgIg+QgIhAALgDQiuAxgXh6QgHgmAJgzIALgrICXgDQAPA7AkAOQARAIAPgFQA3gPAPA+QAJAngHA9QgIBDgtAyQgQASgMAEIgHABQgMAAgJgOg");
	this.shape_22.setTransform(182.7529,334.3882,1.9225,1.9225);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#7DA761").ss(1,1,1).p("AgdgYQAmAQAVAh");
	this.shape_23.setTransform(100.7826,316.0681,1.9225,1.9225);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#7DA761").p("AAxjCQgKACgQAEQgdAKgXAQQhHAxAkBWQhKgBg1AQQhpAhBqBbQBWAwBUAXQCnAugGh/Qgtg7gPg7Qgfh6CVgKQgrgEgngIQhQgPAMgTg");
	this.shape_24.setTransform(108.209,316.5743,1.9225,1.9225);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#A3C18F").s().p("AABC3QhTgXhVgwQhqhbBpghQA1gQBJABQgkhWBIgxQAVgQAfgKIAagGQgNATBQAPQAoAIAqAEQiUAKAeB6QAQA7AtA7QAEBdhZAAQghAAgtgMg");
	this.shape_25.setTransform(103.8826,316.5743,1.9225,1.9225);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#7DA761").ss(1.1,1,1).p("AAMgjQgPALgGAVQgGAUAIAT");
	this.shape_26.setTransform(164.4586,261.421,1.9225,1.9225);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#7DA761").ss(1.1).p("AhyhEIASAGQAVAIAPANQAwAogeBEIAFAZQAGAcANAUQAnA+BTg4QALgSABgXQACgtg2gWQAbgZgGgmQgMhOimhDg");
	this.shape_27.setTransform(154.5784,246.4889,1.9225,1.9225);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#A4C290").s().p("AgTCLQgMgUgHgcIgEgZQAdhEgwgoQgPgNgVgIIgSgGIAVhmQCmBDANBOQAGAmgbAZQA1AWgBAtQgBAXgMASQgnAbgeAAQghAAgUghg");
	this.shape_28.setTransform(154.6647,246.6865,1.9225,1.9225);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#7DA761").ss(0.9,1,1).p("AgXgTQAFAQANALQANAKARAC");
	this.shape_29.setTransform(82.6068,271.9547,1.9774,1.9774);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#7DA761").ss(0.9).p("ABDh+IgDABQgGADgDANQgDAHgDANQgLAhgMAOQgpAhAAgGQgEgagNgNQgagagxBBQgDAEgOABQgPAAgDACQgVAJgHAfQgHAfAPASIAKAIQAoAcAuAHQAxAJApgTQA0gWApg7QAdgpAbhF");
	this.shape_30.setTransform(98.8897,270.7806,1.977,1.977);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#A5C291").s().p("AhCB8QgugHgogcIgKgIQgPgSAHgfQAHgfAVgJQADgCAPAAQAOgBADgEQAxhBAaAaQANANAEAaQAAAGApghQAMgOALghIAGgUQADgNAGgDIADgBIBqAxQgbBFgdApQgpA7g0AWQgcANggAAQgPAAgPgDg");
	this.shape_31.setTransform(98.8897,270.7552,1.977,1.977);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#7DA761").p("AgwjVIghAeQgkAmgPAkQgyByCtA4QgKgDgdA5QgbA3gBAPQAAAlA0gNQAigJAagRQAZgQAXgbQApgwANglQAWg6g2gTQgPgEgLgPQgWggAVg5");
	this.shape_32.setTransform(167.5017,333.4874,1.9774,1.9774);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#A5C291").s().p("AhMC5QABgOAbg3QAdg6AKADQitg4AyhyQAPgkAkglIAhgeIB/BSQgVA6AWAfQALAQAPAEQA2ASgWA6QgNAlgpAxQgXAbgZAQQgaAQgiAJQgOAEgKAAQgcAAAAgcg");
	this.shape_33.setTransform(167.5017,333.3589,1.9774,1.9774);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#7DA761").ss(1,1,1).p("AgmAEQAmgNAoAK");
	this.shape_34.setTransform(123.2414,340.5011,1.9774,1.9774);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#7DA761").p("AhziSIgPAWQgQAcgGAbQgUBTBWAnIgfAfQgjAkgRAeQg3BgCMgFQBegWBOgoQCbhRhahZQhJgLg1gjQhohFBlhsIhDAwQhFAqgDgWg");
	this.shape_35.setTransform(133.3013,330.3026,1.9774,1.9774);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#A3C18F").s().p("AipCJQARgeAjglIAfgeQhWgnAUhUQAGgaAQgcIAPgXQADAXBFgrIBDgvQhlBsBoBFQA1AiBJANQBaBYibBQQhOAoheAXIgNAAQh8AAA0hbg");
	this.shape_36.setTransform(133.3013,332.9762,1.9774,1.9774);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#7DA761").ss(1.1,1,1).p("AAlAKQgOgOgVgEQgUgDgSAJ");
	this.shape_37.setTransform(77.169,255.6966,1.9774,1.9774);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#7DA761").ss(1.1).p("AA7h7IgDASQgGAWgLAQQgjA0hHgWQgKACgOAFQgcAKgSAOQg5AuBABMQAUAKAWgCQAugDAPg4QAbAZAmgLQBMgUAxisg");
	this.shape_38.setTransform(90.5908,244.6918,1.9774,1.9774);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#A4C290").s().p("AiBB0QhAhMA5guQASgOAbgKQAOgFALgCQBHAWAig0QALgQAGgWIAEgSIBoAKQgyCshLAUQgmALgbgZQgQA4gtADIgGAAQgTAAgRgIg");
	this.shape_39.setTransform(90.432,244.7368,1.9774,1.9774);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#4A8522").s().p("AgdBKQgSgHgFgbQgDgbAMgeQANgfAWgQQAUgRASAHQATAIAEAbQADAbgMAeQgOAfgVAQQgOAMgNAAQgGAAgFgDg");
	this.shape_40.setTransform(114.7724,141.9815,1.9916,1.9916);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#7DA761").ss(0.9,1,1).p("AgZARQARAAANgJQAOgJAHgP");
	this.shape_41.setTransform(127.9665,302.7245,1.9916,1.9916);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#7DA761").ss(0.9).p("AhshjIAAADQABAGALAIQAGAEAMAHQAcAUAKAQQATAxgHgBQgGgBgJAAQgRAAgKAFQggARAvBCQADAEgEAOQgEAOABAEQADAXAbAQQAcAPAVgIIAKgHQAngeAVgpQAXgsgFguQgFg4gsg4Qgggqg4gt");
	this.shape_42.setTransform(133.39,286.1945,1.9909,1.9909);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#A5C291").s().p("AgdCvQgbgQgDgXQgBgDAEgPQAEgNgDgEQgvhCAggSQAKgFARAAIAPABQAHACgTgxQgKgQgcgUIgSgMQgLgHgBgHIAAgDIBPhWQA4AuAgAqQAsA4AFA3QAFAugXAsQgVApgnAeIgKAHQgIAEgIAAQgPAAgSgLg");
	this.shape_43.setTransform(133.39,286.0857,1.9909,1.9909);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#7DA761").p("ACAiwQhLgFg3AaQhxA1BcCcQgGgJg8AYQg6AXgKAKQgZAcAwAYQA8AfBDgJQA9gJAjgTQA3gegbgxQgIgNACgTQAFglA1gd");
	this.shape_44.setTransform(106.4222,324.5257,1.9916,1.9916);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#A5C291").s().p("AiHCaQgwgYAZgcQAKgKA6gXQA8gYAGAJQhcicBxg1QA3gaBLAFIApCTQg1AdgFAlQgCATAIANQAbAxg3AeQgjATg9AJQgQACgPAAQgyAAgugYg");
	this.shape_45.setTransform(106.678,324.5257,1.9916,1.9916);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#7DA761").ss(1,1,1).p("AgcAaQAVghAlgS");
	this.shape_46.setTransform(179.7969,333.9423,1.9916,1.9916);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#7DA761").p("AjBhEIADAaQAFAgAMAXQAnBOBagYIgFAsQgDAxAFAjQASBtBphcQA8hOAihQQBFigh+gMQhAAlg+AGQh9AOALiVIgXBQQgaBNgRgPg");
	this.shape_47.setTransform(183.0745,325.0541,1.9916,1.9916);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#A3C18F").s().p("AgvCtQgFgiADgyIAFgrQhaAYgnhNQgMgZgFgfIgDgbQARAPAahMIAXhQQgLCUB9gNQA+gHBAgkQB+AMhFCfQgiBRg8BNQgxAqgdAAQgjAAgKg7g");
	this.shape_48.setTransform(183.0745,329.3228,1.9916,1.9916);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#7DA761").ss(1.1,1,1).p("AASAhQADgUgKgSQgLgSgSgJ");
	this.shape_49.setTransform(67.2114,232.8207,1.9916,1.9916);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#7DA761").ss(1.1).p("AB8gWQgZARggACQg+AEgbhEQgggcgkgIQhHgQgVBhIAFANQAGAOAJAKQAfAiA1gWIADAVQAHAZAUAOQA+AvCnhFg");
	this.shape_50.setTransform(86.7888,234.529,1.9916,1.9916);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#A4C290").s().p("AgvBXQgUgOgHgZIgDgVQg1AWgfgiQgJgKgGgOIgFgNQAVhhBHAQQAkAIAgAcQAbBEA+gEQAggCAZgRIA5BXQhjApg/AAQgpAAgagTg");
	this.shape_51.setTransform(86.542,234.529,1.9916,1.9916);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16,p:{scaleX:1.8696,scaleY:1.8696,x:164.7867,y:236.2287}},{t:this.shape_15,p:{scaleX:1.8696,scaleY:1.8696,x:164.6318,y:236.2287}},{t:this.shape_14,p:{scaleX:1.8696,scaleY:1.8696,x:180.2596,y:241.1958}},{t:this.shape_13,p:{scaleX:1.8696,scaleY:1.8696,x:85.5761,y:317.1268}},{t:this.shape_12,p:{scaleX:1.8696,scaleY:1.8696,x:89.4329,y:317.1268}},{t:this.shape_11,p:{scaleX:1.8696,scaleY:1.8696,x:79.1394,y:309.5775}},{t:this.shape_10,p:{scaleX:1.8702,scaleY:1.8702,x:143.3753,y:255.9091}},{t:this.shape_9,p:{scaleX:1.8702,scaleY:1.8702,x:143.3753,y:256.1489}},{t:this.shape_8,p:{scaleX:1.8696,scaleY:1.8696,x:192.004,y:326.9026}},{t:this.shape_7,p:{scaleX:1.8696,scaleY:1.8696,x:192.009,y:327.0908}},{t:this.shape_6,p:{scaleX:1.8689,scaleY:1.8689,x:94.0288,y:219.0288}},{t:this.shape_5,p:{scaleX:1.8689,scaleY:1.8689,x:93.7169,y:219.0288}},{t:this.shape_4,p:{scaleX:1.8696,scaleY:1.8696,x:82.0347,y:208.6643}},{t:this.shape_3,p:{scaleX:1.8702,scaleY:1.8702,x:139.1002,y:158.432}},{t:this.shape_2,p:{scaleX:1.8702,scaleY:1.8702,x:139.1002,y:158.432}},{t:this.shape_1,p:{scaleX:1.8696,scaleY:1.8696,x:116.1113,y:141.1948}},{t:this.shape,p:{scaleX:1.8696,scaleY:1.8696,x:142.9872,y:143.8349}}]}).to({state:[{t:this.shape_28,p:{scaleX:1.9225,scaleY:1.9225,x:154.6647,y:246.6865}},{t:this.shape_27,p:{scaleX:1.9225,scaleY:1.9225,x:154.5784,y:246.4889}},{t:this.shape_26,p:{scaleX:1.9225,scaleY:1.9225,x:164.4586,y:261.421}},{t:this.shape_25,p:{scaleX:1.9225,scaleY:1.9225,x:103.8826,y:316.5743}},{t:this.shape_24,p:{scaleX:1.9225,scaleY:1.9225,x:108.209,y:316.5743}},{t:this.shape_23,p:{scaleX:1.9225,scaleY:1.9225,x:100.7826,y:316.0681}},{t:this.shape_10,p:{scaleX:1.9231,scaleY:1.9231,x:142.3669,y:257.7603}},{t:this.shape_9,p:{scaleX:1.9231,scaleY:1.9231,x:142.3669,y:258.0069}},{t:this.shape_22,p:{scaleX:1.9225,scaleY:1.9225,x:182.7529,y:334.3882}},{t:this.shape_21,p:{scaleX:1.9225,scaleY:1.9225,x:182.7529,y:334.7542}},{t:this.shape_20,p:{scaleX:1.922,scaleY:1.922,x:92.1593,y:244.9749}},{t:this.shape_19,p:{scaleX:1.922,scaleY:1.922,x:92.06,y:244.9749}},{t:this.shape_18,p:{scaleX:1.9225,scaleY:1.9225,x:76.1266,y:240.2254}},{t:this.shape_3,p:{scaleX:1.9231,scaleY:1.9231,x:137.9709,y:157.5251}},{t:this.shape_2,p:{scaleX:1.9231,scaleY:1.9231,x:137.9709,y:157.5251}},{t:this.shape_17,p:{scaleX:1.9225,scaleY:1.9225,x:114.3363,y:139.7996}},{t:this.shape,p:{scaleX:1.9225,scaleY:1.9225,x:141.9722,y:142.5143}}]},4).to({state:[{t:this.shape_39,p:{scaleX:1.9774,scaleY:1.9774,x:90.432,y:244.7368}},{t:this.shape_38,p:{scaleX:1.9774,scaleY:1.9774,x:90.5908,y:244.6918}},{t:this.shape_37,p:{scaleX:1.9774,scaleY:1.9774,x:77.169,y:255.6966}},{t:this.shape_36,p:{scaleX:1.9774,scaleY:1.9774,x:133.3013,y:332.9762}},{t:this.shape_35,p:{scaleX:1.9774,scaleY:1.9774,x:133.3013,y:330.3026}},{t:this.shape_34,p:{scaleX:1.9774,scaleY:1.9774,x:123.2414,y:340.5011}},{t:this.shape_10,p:{scaleX:1.9779,scaleY:1.9779,x:142.9737,y:261.6124}},{t:this.shape_9,p:{scaleX:1.9779,scaleY:1.9779,x:142.9737,y:261.866}},{t:this.shape_33,p:{scaleX:1.9774,scaleY:1.9774,x:167.5017,y:333.3589}},{t:this.shape_32,p:{scaleX:1.9774,scaleY:1.9774,x:167.5017,y:333.4874}},{t:this.shape_31,p:{scaleX:1.977,scaleY:1.977,x:98.8897,y:270.7552}},{t:this.shape_30,p:{scaleX:1.977,scaleY:1.977,x:98.8897,y:270.7806}},{t:this.shape_29,p:{scaleX:1.9774,scaleY:1.9774,x:82.6068,y:271.9547}},{t:this.shape_3,p:{scaleX:1.9779,scaleY:1.9779,x:138.4523,y:158.5188}},{t:this.shape_2,p:{scaleX:1.9779,scaleY:1.9779,x:138.4523,y:158.5188}},{t:this.shape_1,p:{scaleX:1.9774,scaleY:1.9774,x:114.1456,y:140.2884}},{t:this.shape,p:{scaleX:1.9774,scaleY:1.9774,x:142.5701,y:143.0805}}]},5).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_10,p:{scaleX:1.9922,scaleY:1.9922,x:143.8147,y:264.1852}},{t:this.shape_9,p:{scaleX:1.9922,scaleY:1.9922,x:143.8147,y:264.4406}},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_3,p:{scaleX:1.9922,scaleY:1.9922,x:139.2607,y:160.3455}},{t:this.shape_2,p:{scaleX:1.9922,scaleY:1.9922,x:139.2607,y:160.3455}},{t:this.shape_40},{t:this.shape,p:{scaleX:1.9916,scaleY:1.9916,x:143.4011,y:144.7937}}]},5).to({state:[{t:this.shape_39,p:{scaleX:1.9929,scaleY:1.9929,x:90.2447,y:245.8232}},{t:this.shape_38,p:{scaleX:1.9929,scaleY:1.9929,x:90.4047,y:245.7778}},{t:this.shape_37,p:{scaleX:1.9929,scaleY:1.9929,x:76.8775,y:256.8691}},{t:this.shape_36,p:{scaleX:1.9929,scaleY:1.9929,x:133.4507,y:334.7557}},{t:this.shape_35,p:{scaleX:1.9929,scaleY:1.9929,x:133.4507,y:332.0611}},{t:this.shape_34,p:{scaleX:1.9929,scaleY:1.9929,x:123.3118,y:342.3397}},{t:this.shape_10,p:{scaleX:1.9933,scaleY:1.9933,x:143.1942,y:262.8226}},{t:this.shape_9,p:{scaleX:1.9933,scaleY:1.9933,x:143.1942,y:263.0781}},{t:this.shape_33,p:{scaleX:1.9929,scaleY:1.9929,x:167.9198,y:335.1414}},{t:this.shape_32,p:{scaleX:1.9929,scaleY:1.9929,x:167.9198,y:335.271}},{t:this.shape_31,p:{scaleX:1.9924,scaleY:1.9924,x:98.7669,y:272.0386}},{t:this.shape_30,p:{scaleX:1.9924,scaleY:1.9924,x:98.7669,y:272.0642}},{t:this.shape_29,p:{scaleX:1.9929,scaleY:1.9929,x:82.3579,y:273.2548}},{t:this.shape_3,p:{scaleX:1.9933,scaleY:1.9933,x:138.6376,y:158.9249}},{t:this.shape_2,p:{scaleX:1.9933,scaleY:1.9933,x:138.6376,y:158.9249}},{t:this.shape_1,p:{scaleX:1.9929,scaleY:1.9929,x:114.1445,y:140.5542}},{t:this.shape,p:{scaleX:1.9929,scaleY:1.9929,x:142.7923,y:143.3683}}]},5).to({state:[{t:this.shape_28,p:{scaleX:2.0104,scaleY:2.0104,x:156.5374,y:250.7748}},{t:this.shape_27,p:{scaleX:2.0104,scaleY:2.0104,x:156.4473,y:250.5683}},{t:this.shape_26,p:{scaleX:2.0104,scaleY:2.0104,x:166.779,y:266.1827}},{t:this.shape_25,p:{scaleX:2.0104,scaleY:2.0104,x:103.4346,y:323.8566}},{t:this.shape_24,p:{scaleX:2.0104,scaleY:2.0104,x:107.9587,y:323.8566}},{t:this.shape_23,p:{scaleX:2.0104,scaleY:2.0104,x:100.193,y:323.3273}},{t:this.shape_10,p:{scaleX:2.0108,scaleY:2.0108,x:143.6682,y:262.3383}},{t:this.shape_9,p:{scaleX:2.0108,scaleY:2.0108,x:143.6682,y:262.5962}},{t:this.shape_22,p:{scaleX:2.0104,scaleY:2.0104,x:185.9093,y:342.4847}},{t:this.shape_21,p:{scaleX:2.0104,scaleY:2.0104,x:185.9093,y:342.8673}},{t:this.shape_20,p:{scaleX:2.0099,scaleY:2.0099,x:91.1774,y:248.9922}},{t:this.shape_19,p:{scaleX:2.0099,scaleY:2.0099,x:91.0736,y:248.9922}},{t:this.shape_18,p:{scaleX:2.0104,scaleY:2.0104,x:74.4101,y:244.0185}},{t:this.shape_3,p:{scaleX:2.0108,scaleY:2.0108,x:139.0718,y:157.5332}},{t:this.shape_2,p:{scaleX:2.0108,scaleY:2.0108,x:139.0718,y:157.5332}},{t:this.shape_17,p:{scaleX:2.0104,scaleY:2.0104,x:114.366,y:139.0032}},{t:this.shape,p:{scaleX:2.0104,scaleY:2.0104,x:143.2649,y:141.8419}}]},5).to({state:[{t:this.shape_16,p:{scaleX:1.974,scaleY:1.974,x:165.2269,y:241.4689}},{t:this.shape_15,p:{scaleX:1.974,scaleY:1.974,x:165.0633,y:241.4689}},{t:this.shape_14,p:{scaleX:1.974,scaleY:1.974,x:181.5634,y:246.7133}},{t:this.shape_13,p:{scaleX:1.974,scaleY:1.974,x:81.595,y:326.8824}},{t:this.shape_12,p:{scaleX:1.974,scaleY:1.974,x:85.6671,y:326.8824}},{t:this.shape_11,p:{scaleX:1.974,scaleY:1.974,x:74.7991,y:318.9117}},{t:this.shape_10,p:{scaleX:1.9745,scaleY:1.9745,x:142.6187,y:262.2454}},{t:this.shape_9,p:{scaleX:1.9745,scaleY:1.9745,x:142.6187,y:262.4986}},{t:this.shape_8,p:{scaleX:1.974,scaleY:1.974,x:193.9633,y:337.2039}},{t:this.shape_7,p:{scaleX:1.974,scaleY:1.974,x:193.9686,y:337.4025}},{t:this.shape_6,p:{scaleX:1.9734,scaleY:1.9734,x:90.5256,y:223.3213}},{t:this.shape_5,p:{scaleX:1.9734,scaleY:1.9734,x:90.1963,y:223.3213}},{t:this.shape_4,p:{scaleX:1.974,scaleY:1.974,x:77.856,y:212.3659}},{t:this.shape_3,p:{scaleX:1.9745,scaleY:1.9745,x:138.1051,y:159.3292}},{t:this.shape_2,p:{scaleX:1.9745,scaleY:1.9745,x:138.1051,y:159.3292}},{t:this.shape_1,p:{scaleX:1.974,scaleY:1.974,x:113.8346,y:141.1307}},{t:this.shape,p:{scaleX:1.974,scaleY:1.974,x:142.2106,y:143.9181}}]},5).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(33,104.6,199.1,276.70000000000005);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0571B9").p("AFpmhQgGgmgegOQgPgHgRAFQgSAFgGAOQgFALACAVQABAXgDAKQgGAPgdAVQgdAUgDARQgCAIAEAfQAEAZgKALQgLAMgOgEQgIgBgDgFQgFgFgBgJQgBgEABgNQACgXgggWQgEgDgwgZQg9ghhBgSQiGgkiHAYQg6ALhpBZQhAA3gSBuQgRBlAgBLQATArAiAeQAkAfArAJQAhAGAxgHQAcgEA3gIQAsgDAkANQArAQAPAjQAPAkgTA3QgFAPgMAdQgJAZgDATQgDAZAHAWQAHAYATAMQAPAKAhADQAwADBDgIQBMgIBNgOQAUgEAKgEQARgFAKgKQATgSgBgeQgCgdgTgWQgggkhDgDQgNgBgYAAQgbABgLgBQgXgBgNgHQgIgFgFgIQgFgJABgJQABgLANgKQAHgGAPgMQANgLAGgSQAGgRgCgSQgDgfgXgjQgfgugvgeQgwgeg2gHQAlAEBLgDQAKAAADgCQAHgEgCgRQgCgQgGgFQAKAHARAFQALADAUAFQAmAKAmAFQBPAIBKgQQBJgQBAgmQBBgmAxg4QAsgxACgqQACgkgagfQgZgegkgHQgwgLguAdQgLAJgHAFQgMAJgGgGQgEgEABgWQABgbAAgDg");
	this.shape.setTransform(57.8154,82.5617);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0099FE").s().p("AhMHZQghgDgPgKQgTgMgHgYQgHgWADgZQADgTAJgZIARgsQATg3gPgkQgPgjgrgQQgkgNgsADIhTAMQgxAHghgGQgrgJgkgfQgigegTgrQgghLARhlQAShuBAg3QBphZA6gLQCHgYCGAkQBBASA9AhIA0AcQAgAWgCAXIAAARQABAJAFAFQADAFAIABQAOAEALgMQAKgLgEgZQgEgfACgIQADgRAdgUQAdgVAGgPQADgKgBgXQgCgVAFgLQAGgOASgFQARgFAPAHQAeAOAGAmIgBAeQgBAWAEAEQAGAGAMgJIASgOQAugdAwALQAkAHAZAeQAaAfgCAkQgCAqgsAxQgxA4hBAmQhAAmhJAQQhKAQhPgIQgmgFgmgKIgfgIQgRgFgKgHQAGAFACAQQACARgHAEQgDACgKAAQhLADglgEQA2AHAwAeQAvAeAfAuQAXAjADAfQACASgGARQgGASgNALIgWASQgNAKgBALQgBAJAFAJQAFAIAIAFQANAHAXABIAmAAQAYAAANABQBDADAgAkQATAWACAdQABAegTASQgKAKgRAFQgKAEgUAEQhNAOhMAIQgxAGgmAAIgcgBg");
	this.shape_1.setTransform(57.8154,82.5617);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#0571B9").p("AlcgLQgigpgSgzQgSg0ADg1QADg2AZgwQAZgxArggQBCgyBwgJQBjgIBKAbQBMAbBcBUQBlBcA0BVQBDBwgDBuQgBAWgHALQgJANgWAGQgbAGgMAFQgVAJgPAWQgNAUgEAZQgDASAXAeQAcAkADAMQAOAygeA1QgIAOgcALQgXAIgVACQgfADgngRQgzgXg0g3Qg4hCgcggQgkgpg7guQhGgzgjgZQhBgwgEgEQgngegYgcg");
	this.shape_2.setTransform(86.6872,45.2654);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0099FE").s().p("ACrG2QgzgXg0g3IhUhiQgkgpg7guIhphMIhFg0QgngegYgcQgigpgSgzQgSg0ADg1QADg2AZgwQAZgxArggQBCgyBwgJQBjgIBKAbQBMAbBcBUQBlBcA0BVQBDBwgDBuQgBAWgHALQgJANgWAGQgbAGgMAFQgVAJgPAWQgNAUgEAZQgDASAXAeQAcAkADAMQAOAygeA1QgIAOgcALQgXAIgVACIgKABQgbAAghgPg");
	this.shape_3.setTransform(86.6872,45.2654);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#0571B9").ss(1.3).p("Ag1AaQAKANAJATQAFALAKAWQAKAXAOgBQAKAAALgMQAvgyAUg9QASg3gbgcQgOgOgXgEQgWgEgWAHQghAKghAlQgRAQgIAKQgOARAEALQACAFASALQAVAMAEAFg");
	this.shape_4.setTransform(120.3788,67.6143);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0099FE").s().p("AgTBbIgPghQgJgTgKgNQgEgFgVgMQgSgLgCgFQgEgLAOgRQAIgKARgQQAhglAhgKQAWgHAWAEQAXAEAOAOQAbAcgSA3QgUA9gvAyQgLAMgKAAIAAAAQgOAAgKgWg");
	this.shape_5.setTransform(120.3788,67.6143);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#0571B9").ss(1.5).p("AkBiiQAZCbgwCTQBwBCCDAbQCDAbCDgQQAvgFAMgWQAPgXgWglQgWglgmgaQglgZgsgJQgUgEg3gDQgvgDgZgIQgNgEgIgGQgKgJABgKQABgNATgFQALgEAWgEQAggIANgiQANgggNgfQgUgxhLgkQhXgqhZgDQgigBgIABQgfACgCAOQgBAFAPAcQAQAeACAHg");
	this.shape_6.setTransform(74.3849,98.2943);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0099FE").s().p("AglDpQiDgbhwhCQAwiTgZibQgCgHgQgeQgPgcABgFQACgOAfgCQAIgBAiABQBZADBXAqQBLAkAUAxQANAfgNAgQgNAiggAIQgWAEgLAEQgTAFgBANQgBAKAKAJQAIAGANAEQAZAIAvADQA3ADAUAEQAsAJAlAZQAmAaAWAlQAWAlgPAXQgMAWgvAFQgxAGgwAAQhTAAhSgRg");
	this.shape_7.setTransform(74.3849,98.2943);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#0571B9").ss(2.4).p("AgZBsQAfAGAmgMQAYgIAtgWQATgKAGgOQAHgUgLgoQgKgjgIgTQgNgbgQgKQgKgGgPAAQgJAAgRAFQg4AMgnANQhLAZgFAgQgGApAxAtQApAlAeAHg");
	this.shape_8.setTransform(81.4353,76.2874);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0099FE").s().p("AgZBsQgegHgpglQgxgtAGgpQAFggBLgZQAngNA4gMQARgFAJAAQAPAAAKAGQAQAKANAbQAIATAKAjQALAogHAUQgGAOgTAKQgtAWgYAIQgZAIgVAAQgMAAgLgCg");
	this.shape_9.setTransform(81.4353,76.2874);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-1,-1,132.4,132), null);


(lib.Scene_1_sun = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sun
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F39415").p("AHkKNIknknIBQGZIjDlxIgsGfIhMmaIikF/IAumeIkNE+ICml+IlfDgIEQk8ImSBuIFhjdImhgNIGThrImLiHIGhAPIlRj1IGJCKIj5lOIFPD3IiMmIID3FPIgSmgICKGJIBomTIAQGgIDbliIhsGTIE7kSIjeFhIF9ipIk8EPIGegxIl+CnIGaBKImfAuIFyDBImZhOIEoElIlwjDg");
	this.shape.setTransform(368.7032,182.5118,1.9885,1.9885);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFEE00").s().p("AguGTIikGAIAumeIkNE9ICml+IlfDgIEQk8ImSBvIFhjeImhgNIGThrImLiHIGhAPIlRj1IGJCKIj5lOIFPD4IiMmJID3FPIgSmgICKGKIBomUIAQGgIDbliIhsGTIE7kSIjeFhIF9ipIk8EQIGegyIl+CnIGaBKImfAuIFyDBImZhOIEoEmIlwjEIDFFwIknknIBQGZIjDlwIgsGeg");
	this.shape_1.setTransform(368.6744,182.479,1.9885,1.9885);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},359).wait(801));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Speech_bubbles = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Speech_bubbles
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.5).p("AAAAOQABgBABABIANAAIgHgWIgcApQgCABgBAAIgDAAIgGgFQgCgCAAgBIABgDIAQgYIgRgOQgBgCAAgCQAAgBACgCIAKgIIACgCQACAAACACIAKAPIAKgQQABgCACAAIADAAIALAHQAEACAAACIAMAzIAAABIgBADQgBABgCAAIgeAAIgDgBQgBgCAAgCIABgLQAAgCABgCg");
	this.shape.setTransform(620.0009,676.8472,2.0187,2.0187);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgaAhIgGgEIgCgDIABgEIAQgXIgRgOQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAIAKgJIACgBQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAIAKAPIAKgQQAAgBABAAQAAgBAAAAQABAAAAAAQABAAAAAAIADAAIALAHQAEACAAACIAMAzIAAABIgBACIgDABIgeAAIgDgBIgBgDIABgLQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAIANABIgHgWIgcAoIgDADg");
	this.shape_1.setTransform(619.9683,676.8472,2.0187,2.0187);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.5).p("AAdgOQgBABgCAAIgJAAIACAqQABAFgFAAIgKABQgEAAAAgFIABgrIgbgBQgCAAgBgCQgBAAAAgDIACgLQABgEADAAIAwADQAFAAAAAFIAAAIQAAACgBACg");
	this.shape_2.setTransform(605.9512,676.8926,2.0187,2.0187);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AABAeIABgrIgbgBQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIACgLQABgEADAAIAwADQAFAAAAAFIAAAIQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAIgJAAIACAqQABAFgFAAIgKABQgEAAAAgFg");
	this.shape_3.setTransform(605.9512,676.8926,2.0187,2.0187);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(0.5).p("AAKAhQgCACgBgBIgHAAQgFAAAAgEIgFg6QAAgDABAAQABgCACAAIAMAAQACAAABABQABABAAACIABA7QAAACgBABg");
	this.shape_4.setTransform(596.7536,677.0112,2.0187,2.0187);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAHAiIgHAAQgFAAAAgEIgFg6QAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAAAAAQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAMAAQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAIABA7IgBADIgCABIgBAAg");
	this.shape_5.setTransform(596.7536,677.0112,2.0187,2.0187);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(0.5).p("AAOgiIAMABQAEAAAAAFIgBA3QAAAEgEABIgwAEQgEABAAgGIgBgMQgBgCABgCIAEgBIANAAIgOgoIgBgCQAAgCAEgCIAKgCIACgBQACAAACAEIALAsIAHAAIgCgqQAAgFAEAAg");
	this.shape_6.setTransform(587.4004,677.115,2.0187,2.0187);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgbAfIgBgMIAAgEIAEgBIANAAIgOgoIgBgCQAAgCAEgCIAKgCIACgBQACAAACAEIALAsIAHAAIgCgqQAAgFAEAAIAMABQAEAAAAAFIgBA3QAAAEgEABIgwAEIgBAAQgDAAAAgFg");
	this.shape_7.setTransform(587.4004,677.115,2.0187,2.0187);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(0.5).p("AAggUIgBADIgRATIAPASIABADQAAACgBABIgKAIIgCABQgCAAgCgCIgQgaIgIAZIgBADIgCABIgCgBIgMgFQgDAAAAgDIABgDIAPgcIgOgQIgBgDQAAgCACgCIAJgHIADgBQACAAABACIAQAYIANgVQABgCACAAQACAAABABIAIAHQACACAAACg");
	this.shape_8.setTransform(566.8771,677.0793,2.0187,2.0187);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgQAkIgMgGQAAAAgBAAQgBAAAAgBQAAAAgBgBQAAAAAAgBIABgCIAPgdIgOgQIgBgDQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAIAJgIIADgBQABAAAAAAQAAAAABABQAAAAAAAAQABABAAAAIAQAYIANgVQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAAAIAIAHQABABAAAAQAAABAAAAQABABAAAAQAAABAAAAIgBADIgRATIAPASIABADQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAABIgKAHIgCABQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAIgQgZIgIAYIgBADIgCABg");
	this.shape_9.setTransform(566.8771,677.049,2.0187,2.0187);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(0.5).p("AAkAdQgBABgCAAIgNgBQgCAAgBgBQgCgBAAgDIACgjIgXgEIAGAoQAAAEgEACIgXAFIgBAAQgDAAgBgEIgFgNIAAgCQAAgDAEAAIAMgCIgGgqIABgEQABgCADABIAyADQAEABABAEIAEA0g");
	this.shape_10.setTransform(551.6926,677.5705,2.0187,2.0187);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgcAkQgDAAgBgEIgEgNIAAgCQAAAAAAgBQAAgBAAAAQABAAAAgBQABAAABAAIAMgCIgFgqIABgEQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAzADQADABABAEIAFA0IgBAEQgBAAAAABQgBAAAAAAQgBAAAAAAQAAAAgBAAIgNgBIgDgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQgBgBAAgBIACgjIgWgEIAFAoQAAAEgEACIgWAFg");
	this.shape_11.setTransform(551.6866,677.5705,2.0187,2.0187);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(0.5).p("AAaAiIgNAAQgCAAgBgBIgBgEIABgsIgiABQgCAAgCgBIgBgEIABgKQABgEAEAAIAuACQAEAAAAAEIADA4QAAAFgEAAgAgaAgQgBAAAAgCIAAgCIAEgYQAAgDABgBIADAAIAJAAQAEAAAAAFIgCAXQAAAEgEABIgLAAQgCAAgBgBg");
	this.shape_12.setTransform(537.1486,677.2004,2.0187,2.0187);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AANAiIgDgBIgBgEIABgsIgiABQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAIgBgEIAAgKQABgEAFAAIAuACQAEAAAAAEIADA4QAAAFgEAAgAgaAgQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIAAgCIAEgYQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAIADAAIAIAAQAFAAAAAFIgCAXQAAAEgEABIgLAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBAAAAg");
	this.shape_13.setTransform(537.1521,677.2004,2.0187,2.0187);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(0.5).p("AAbAMQAEABAAAEIAAAIIgBAEQgBABgCAAIg1ADQgCAAgBgBQgBgBAAgDIABgNQABgEAEAAIAdAAIABgZIgeACQgCAAgBgBIgBgEIABgLQAAgFAEAAIAoAAQAEAAAAAFIABAog");
	this.shape_14.setTransform(516.9485,677.2509,2.0187,2.0187);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgdAgQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAgBIABgNQABgEAEAAIAdAAIABgZIgeACQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAIgBgEIABgLQAAgEAEgBIAoAAQAEAAAAAGIABAnIAFAAQAEABAAAEIAAAJIgBADQAAAAgBABQAAAAgBAAQAAAAAAAAQgBAAAAAAIg1AEQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBAAAAg");
	this.shape_15.setTransform(516.9485,677.2509,2.0187,2.0187);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(0.5).p("AAKAhQgCACgBgBIgHAAQgFAAAAgEIgFg6QAAgDABAAQABgCACAAIAMAAQACAAABABQABABAAACIABA7QAAACgBABg");
	this.shape_16.setTransform(507.3262,677.0112,2.0187,2.0187);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAHAiIgHAAQgFAAAAgEIgFg6QAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAAAAAQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAMAAQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAIABA7IgBADIgCABIgBAAg");
	this.shape_17.setTransform(507.3262,677.0112,2.0187,2.0187);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(0.5).p("AgagiQABgCACABIAvAFQADAAAAACQABAAAAADIAAAxQAAAEgEABIgtAHIgBAAQgEAAAAgEIgBgMQAAgFAEAAIAigDIgBgaIghACQgCAAgBgBIgBgEIAAgOQgBgCACgBg");
	this.shape_18.setTransform(498.2085,677.2677,2.0187,2.0187);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgWAkQgEAAAAgEIgBgMQAAgFAEAAIAigDIgBgaIghACIgDgBIgBgEIAAgOQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAAAIAvAFQABAAABABQAAAAAAAAQABAAAAAAQAAABAAAAQABAAAAAAQAAABAAAAQAAAAAAABQAAABAAAAIAAAxQAAAEgEABIgtAHg");
	this.shape_19.setTransform(498.2085,677.2677,2.0187,2.0187);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(0.5).p("AAaAiIgNAAQgDAAAAgBQgCgCABgCIABgsIgjABQgCAAgBgBQgBgBAAgDIABgKQAAgEAEAAIAvACQAEAAAAAEIADA4QAAAFgEAAgAgaAgQgBAAAAgCIAAgCIADgYQAAgDACgBIADAAIAIAAQAFAAgBAFIgBAXQAAAEgEABIgLAAQgCAAgBgBg");
	this.shape_20.setTransform(485.3226,677.2004,2.0187,2.0187);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AANAiQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIABgsIgjABQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAgBIABgKQAAgEAEAAIAvACQAEAAAAAEIADA4QAAAFgEAAgAgaAgIgBgCIAAgCIADgYQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAIADAAIAIAAQAFAAgBAFIgBAXQAAAEgEABIgLAAIgDgBg");
	this.shape_21.setTransform(485.3226,677.2004,2.0187,2.0187);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(0.5).p("AgPgqIAmABIADACQABABAAACIgBAdQAAAEgEABIgMAEIgBAIQAAADgBAAQgBACgCgBIgFAAQgEAAAAgFIABgLQAAgDADgCIALgGIgCgLIgQAAIgBAKQgBAEgDAAIgBAAIgJgCQgEgBAAgEIAAgBIAGgUQABgEAEAAgAgFAnIgBgKIABgDQABgCACAAIAKAAIADABIABADIgBAMQAAAEgEAAIgHAAQgEAAgBgFg");
	this.shape_22.setTransform(473.0087,675.1313,2.0187,2.0187);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAAArQgEAAgBgEIgBgKIABgEQAAAAAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAKAAIADABIABADIgBAMQAAADgEAAgAAFAOIgFAAQgEgBAAgEIABgLQAAgEADgCIALgFIgCgMIgQAAIgBALQgBADgDABIgBAAIgJgCQgEgBAAgEIAAgBIAGgUQABgEAEgBIAmACIADACIABADIgBAdQAAAEgEABIgMAEIgBAIQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAAAIgCABIgBAAg");
	this.shape_23.setTransform(473.0087,675.1313,2.0187,2.0187);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(0.5).p("AAAAOQAAAAACAAIANABIgHgXIgcApQgCABgCAAQgBAAgBAAIgGgFQgCgBAAgCIABgDIAQgXIgRgPIgBgDQAAgCABgCIALgIIACgCQACAAACACIAKAPIAKgQQABgCACAAIADAAIALAHQADACABADIAMAyIAAACQAAACgBAAQgBABgCAAIgfAAQgBAAgBgBQgCgCABgCIABgLg");
	this.shape_24.setTransform(581.9668,645.5577,2.0187,2.0187);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgaAhIgGgDQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIABgDIAQgYIgRgOIgBgEQAAAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAIALgIIADgBQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIALAPIAJgQQAAgBABAAQAAgBABAAQAAAAABAAQAAAAAAAAIADABIAMAGQACACABADIAMAyIAAACIgBACIgDABIgfAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIABgLIABgEIADAAIAMABIgHgYIgcApQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAIgDgBg");
	this.shape_25.setTransform(581.9668,645.5577,2.0187,2.0187);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(0.5).p("AgaAhIgBgDIAAgBIADgZQABgDABAAQABgBACAAIAJAAQAEABAAAEIgCAXQAAAFgEAAIgLABgAAaAiIgNAAIgDgBQgBgCAAgCIABgsIgiABIgEgBIgBgDIABgLQABgEAEAAIAuACQAEAAAAAFIADA4QAAAEgEAAg");
	this.shape_26.setTransform(567.7317,645.9564,2.0187,2.0187);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AANAiIgEgBIgBgEIABgsIgiABIgDgBIgBgDIABgLQABgEADAAIAvACQAEAAAAAFIADA4QAAAEgEAAgAgbAhIAAgDIAAgBIADgZIACgDQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAABAAIAJAAQADABAAAEIgBAXQAAAFgEAAIgLABg");
	this.shape_27.setTransform(567.7351,645.9564,2.0187,2.0187);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(0.5).p("AAegmIABAIIAAACIgBAEIgOAmQAAAEgDAAIgCgBIgIgDQgDgCAAgDIAAgBIAMghIgmgCQgEAAAAgEIAAgBIABgKQABgEAEAAIAxADQAEAAABAFgAgXgNQABAAACAAIAFAAQAEAAABAEIAJAxIAAABQAAAEgEAAIgMACIgBAAQgEAAAAgEIgCg0QAAgCABgCg");
	this.shape_28.setTransform(547.5134,648.5857,2.0187,2.0187);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgSAvQgEAAAAgEIgCg0QAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIADgBIAFAAQAEAAABAEIAJAxIAAABQAAAEgEAAIgMACgAALARIgIgDQgDgCAAgDIAAgBIAMghIgmgCQgEAAAAgEIAAgBIABgKQABgEAEAAIAxADQAEAAABAFIABAIIAAACIgBAEIgOAnQAAAAAAABQAAAAgBABQAAAAgBAAQgBAAAAAAg");
	this.shape_29.setTransform(547.4978,648.5857,2.0187,2.0187);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(0.5).p("AgSgiIAnADQACAAABACQABABAAACIgBA4IgBAEIgDABIgMgBIgDgBIgBgDIAAgBIAHgoIgegCQgFgBABgEIAAgMQABgEAEAAg");
	this.shape_30.setTransform(535.2293,645.8634,2.0187,2.0187);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAIAjIgDgBIgBgDIAAgCIAHgnIgegDQgFgBABgEIAAgLQABgFAEAAIAnAEQAAAAABAAQAAAAABAAQAAAAAAAAQAAABABAAIABADIgBA5IgBADIgDABg");
	this.shape_31.setTransform(535.2293,645.8605,2.0187,2.0187);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(0.5).p("AgaAhIgBgDIAAgBIADgZQAAgCACgBQABgBACAAIAIAAQAFABAAAEIgCAXQAAAFgEAAIgLABgAAaAiIgNAAIgDgBQgBgBAAgDIABgsIgjABIgDgBQgBgBAAgCIABgLQABgEADAAIAvACQAEAAAAAFIADA4QABAEgFAAg");
	this.shape_32.setTransform(523.2905,645.9564,2.0187,2.0187);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AANAiIgDgBIgBgEIABgsIgjABIgDgBIgBgDIABgLQABgEADAAIAvACQAEAAAAAFIADA4QABAEgFAAgAgaAhIgBgDIAAgBIADgZIACgDIADgBIAIAAQAFABAAAEIgCAXQAAAFgEAAIgLABg");
	this.shape_33.setTransform(523.2905,645.9564,2.0187,2.0187);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(0.5).p("AgPgqIAmABQACAAABACQABAAAAADIgBAeQAAADgEACIgMADIgBAIQAAADgBAAIgDABIgFAAQgEAAAAgFIABgLQAAgDADgCIALgGIgCgLIgQAAIgBAKQgBAEgDAAIgBAAIgJgCQgEgBAAgDIAAgCIAGgVQABgEAEABgAgFAnIgBgKIABgEQABgBACAAIAKAAQACAAABABIABADIgBALQAAAFgEAAIgHAAQgEAAgBgFg");
	this.shape_34.setTransform(503.6926,643.9371,2.0187,2.0187);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAAAsQgEAAgBgFIgBgKIABgEQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAIAKAAIADABIABADIgBALQAAAFgEAAgAAAAOQgEAAAAgFIABgLQAAgDADgCIALgGIgCgLIgQAAIgBAKQgBAEgDAAIgBAAIgJgCQgEgBAAgDIAAgCIAGgVQABgEAEABIAmABQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAAAQAAAAABABQAAAAAAABQAAAAAAABIgBAeQAAADgEACIgMADIgBAIQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAIgDABg");
	this.shape_35.setTransform(503.6926,643.9371,2.0187,2.0187);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#4D4D4D").p("AgLlCQDCAACKBbQCJBaAACBQAABAgoA8IA+DSIkIhAQhqAnh5AAQjDAAiJhbQiKhbAAh/QAAiBCKhaQCJhbDDAAg");
	this.shape_36.setTransform(547.8097,668.4835,2.019,2.019);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#808080").s().p("ADZEDQhqAmh5AAQjDAAiJhaQiKhbAAh/QAAiBCKhbQCJhbDDAAQDCAACKBbQCJBbAACBQAABAgoA8IA+DSg");
	this.shape_37.setTransform(547.5823,668.293,2.019,2.019);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(0.8).p("Agrg3QACgDADABIBNAJQADAAACACQACACAAAEIAABOQAAAHgHABIhKAMIgCAAQgFAAAAgGIgBgUQAAgHAGgBIA3gFIgCgpIg1ACQgDAAgCgCQgCgBAAgEIgBgXQAAgDACgCg");
	this.shape_38.setTransform(475.7473,759.5342,1.2461,1.2461);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgkA6QgGAAAAgGIgBgUQAAgHAHgBIA2gFIgCgpIg1ACQgDAAgCgCQgCgBAAgEIgBgXQAAgDACgCQACgDAEABIBMAJQABAAAAAAQABAAABABQAAAAABAAQAAABABAAQABACAAAEIAABOQAAAHgGABIhKAMg");
	this.shape_39.setTransform(475.7473,759.5342,1.2461,1.2461);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(0.8).p("AANAcQgBADgEgBIgNAAQgGgBgBgHIgDgqQAAgEACgCQABgBAEgBIARgBQADAAACACQACACAAADIgBAtQAAAEgCABg");
	this.shape_40.setTransform(466.962,756.4171,1.2461,1.2461);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAJAeIgOAAQgGgBgBgHIgDgqQAAgEACgCQABgBAEgBIARgBQADAAACACQACACAAADIgBAtQAAAEgCABQAAABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgBAAg");
	this.shape_41.setTransform(466.962,756.4171,1.2461,1.2461);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(0.8).p("AAagnIAFBJQAAAGgGADIgpAOIgDABQgEAAgCgGIgEgOIgBgDQAAgFAGgBIAYgGIgDguIgNgCQgGAAAAgGIAEgUQABgGAEAAIADABIAeAJQAGACAAAGg");
	this.shape_42.setTransform(452.9118,759.4897,1.2461,1.2461);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgZA0IgEgOIgBgDQAAgFAGgBIAYgHIgDgtIgNgBQgGgBAAgGIAEgTQABgHAEAAIADABIAeAJQAGACAAAGIAFBJQAAAGgGADIgpAOIgDABQgEgBgCgFg");
	this.shape_43.setTransform(452.9118,759.4897,1.2461,1.2461);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(0.8).p("Agqg3QABgDAEABIBMAJQADAAACACQACACAAAEIAABOQAAAHgHABIhJAMIgCAAQgGAAAAgGIgBgUQAAgHAGgBIA3gFIgCgpIg1ACQgDAAgCgCQgCgBAAgEIAAgXQAAgDACgCg");
	this.shape_44.setTransform(442.6,759.5342,1.2461,1.2461);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgkA6QgGAAAAgGIgBgUQAAgHAGgBIA2gFIgBgpIg1ACQgDAAgCgCQgCgBAAgEIgBgXQAAgDADgCQABgDAEABIBMAJQABAAAAAAQABAAABABQAAAAABAAQAAABAAAAQACACABAEIAABOQAAAHgHABIhJAMg");
	this.shape_45.setTransform(442.6,759.5342,1.2461,1.2461);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(0.8).p("AAsg3IACAAIAQAEQAFABAAAFIAAADIgXBXQgBAGgGAAIhOAHQgHABgBgHIgRheIAAgBQAAgDABgCQABgBAEgBIAVgDQACAAADABQACACAAADIAHAnIASgsQADgFADAAIACAAIAPAFIAEACIABAEIgBADIgSAuQgCAFgEAAIgCAAIgRgFIADATIAsgBIAOhGQABgGAFAAg");
	this.shape_46.setTransform(427.7398,759.2483,1.2461,1.2461);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgxA0IgRheIAAgBIABgFIAFgCIAVgDQACAAADABQACACAAADIAHAnIASgsQADgFADAAIACAAIAPAFIAEACIABAEIgBADIgSAuQgCAFgEAAIgCAAIgRgFIADATIAsgBIAOhGQABgGAFAAIACAAIAQAEQAFABAAAFIAAADIgXBXQgBAGgGAAIhOAHIgCAAQgFAAgBgGg");
	this.shape_47.setTransform(427.7398,759.2483,1.2461,1.2461);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(0.8).p("AArgeQADAAACADQACACgBADIgCAQQAAAEgDAEIgjBBQgDAEgDAAQgDAAAAgBIgSgNQgDgDAAgDIACgFIAig0Ig5AAQgHAAAAgHIABgyQAAgDACgCQACgCADAAIATACQACAAACACQACACAAACIgGAZg");
	this.shape_48.setTransform(412.3396,757.714,1.2461,1.2461);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AAABGIgSgNQgDgDAAgDIACgFIAig0Ig5AAQgHAAAAgHIABgyQAAgDACgCQACgCADAAIATACQAAAAABAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABIgGAZIBBAHQADAAACADQACACgBADIgCAQQAAAEgDAEIgjBBQgDAEgDAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQAAAAAAAAg");
	this.shape_49.setTransform(412.3396,757.714,1.2461,1.2461);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(0.8).p("AA6AuQgCACgDAAIgVgBQgDAAgCgCQgCgCAAgEIACg5IgkgGIAJBAQAAAHgGACIgnAIQgFAAgBgFIgHgVIgBgDQAAgFAGgBIAUgCIgJhFQgBgDACgCQABgCAEAAIBRAFQAHAAAAAHIAIBVQAAAEgCABg");
	this.shape_50.setTransform(397.7078,759.8324,1.2461,1.2461);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgzA0IgHgVIgBgDQAAgFAGgBIAUgCIgJhFQgBgDACgCQABgCAEAAIBRAFQAHAAAAAHIAIBVQAAAEgCABQgCACgDAAIgVgBQgDAAgCgCQgCgCAAgEIACg5IgkgGIAJBAQAAAHgGACIgnAIQgFAAgBgFg");
	this.shape_51.setTransform(397.7078,759.8324,1.2461,1.2461);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(0.8).p("AAOAcQgDADgDgBIgNAAQgHgBAAgHIgDgqQAAgDACgDQABgBAEgBIARgBQACAAADACQACADAAACIgBAtQAAAEgBABg");
	this.shape_52.setTransform(387.3898,756.4171,1.2461,1.2461);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AAIAeIgNAAQgHgBAAgHIgDgqQAAgDACgDIAFgCIARgBQACAAADACQACADAAACIgBAtQAAAEgBABQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAIgCAAg");
	this.shape_53.setTransform(387.3898,756.4171,1.2461,1.2461);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(0.8).p("AArATQAHABAAAHIAAAOQAAADgCACQgCACgDAAIhVAFQgDAAgCgCQgCgCABgEIACgVQABgHAGAAIAvABIACgoIgxACQgDABgCgCQgCgCABgEIABgSQAAgHAHAAIBAAAQAHAAAAAHIABBAg");
	this.shape_54.setTransform(371.1277,759.5209,1.2461,1.2461);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgvAzQgCgCABgEIACgVQABgHAGAAIAvABIACgoIgxACQgDABgCgCQgCgCABgEIABgSQAAgHAHAAIBAAAQAHAAAAAHIABBAIAIAAQAHABAAAHIAAAOQAAADgCACQgCACgDAAIhVAFQgDAAgCgCg");
	this.shape_55.setTransform(371.1277,759.5209,1.2461,1.2461);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(0.8).p("AgBAXQACgCADAAIAUACIgLglIguBCQgCADgDAAQgCAAgCgCIgKgGQgDgDAAgDIABgFIAbgmIgbgXQgDgDAAgDQAAgCADgDIAQgNQACgDADAAQADAAACAEIARAXIAPgZQACgEAEAAIAEABIASALQAGADAAAFIAUBSQAAACgCACQgCACgDAAIgxAAQgCAAgCgCQgCgCAAgEIABgSQAAgCACgDg");
	this.shape_56.setTransform(356.9591,759.1159,1.2461,1.2461);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgqA1IgKgHQgDgCAAgDIABgFIAbgmIgbgYQgDgCAAgDQAAgCADgDIAQgNQABgBAAAAQABgBAAAAQABAAABAAQAAgBABAAQADAAACAEIARAWIAPgYQACgEAEAAIAEABIASAKQAGAEAAAEIAUBTQAAAAAAABQAAAAgBABQAAAAAAABQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAIgxAAQgCAAgCgBQgCgDAAgDIABgSQAAgCACgDQACgCADAAIAUACIgLglIguBCQgCADgDAAQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_57.setTransform(356.9591,759.1159,1.2461,1.2461);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(0.8).p("AArATQAHABAAAHIAAAOQAAADgCACQgCACgDAAIhUAFQgEAAgCgCQgCgCABgEIACgVQABgHAGAAIAvABIACgoIgxACQgDABgCgCQgBgCAAgEIABgSQAAgHAHAAIBAAAQAHAAAAAHIABBAg");
	this.shape_58.setTransform(342.9026,759.5209,1.2461,1.2461);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgvAzQgCgCABgEIACgVQABgHAGAAIAvABIACgoIgxACQgDABgCgCQgBgCAAgEIABgSQAAgHAHAAIBAAAQAHAAAAAHIABBAIAIAAQAHABAAAHIAAAOQAAADgCACQgCACgDAAIhUAFQgEAAgCgCg");
	this.shape_59.setTransform(342.9026,759.5209,1.2461,1.2461);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(0.8).p("AAVAvIgGhJIgXACIgDBFQAAAHgHAAIgUACQgEAAgBgCQgDgDABgDIAIhEIgHABQgDAAgDgBQgBgCAAgEIAAgSQAAgDACgDQACgBADAAIBOADQAHAAABAHIAKBaQABAEgCACQgCACgDAAIgSAAQgHAAAAgIg");
	this.shape_60.setTransform(329.2532,759.4274,1.2461,1.2461);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AAcA2QgHAAAAgHIgGhJIgXACIgDBEQAAAIgHAAIgUABQgEAAgBgBQgDgDABgDIAIhDIgHAAQgDAAgDgCQgBgBAAgEIAAgSQAAgEACgCQACgCADABIBOADQAHAAABAHIAKBaQABAEgCACQgCABgDAAg");
	this.shape_61.setTransform(329.2532,759.4274,1.2461,1.2461);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(0.8).p("AAPBDQgCABgEAAIgMAAQgDAAgDgCQgCgDAAgDIgFh3QAAgIAHAAIASAAQAEAAACABQACACAAAEIAAB5QAAACgCAEg");
	this.shape_62.setTransform(319.5749,761.172,1.2461,1.2461);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgDBEQgDAAgDgCQgCgDAAgDIgFh3QAAgIAHAAIASAAQAEgBACACQACACAAAEIAAB5QAAADgCADQgCABgEAAg");
	this.shape_63.setTransform(319.5749,761.172,1.2461,1.2461);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(0.8).p("AAzghQAAACgCADIgbAgIAYAcQACACAAADQAAADgDADIgOALQgCACgDAAQgCAAgDgDIgbgpIgMAoQgBADgBABQgCABgCAAQgCAAgBgBIgSgHQgFgCAAgEIABgEIAZgtIgXgbQgCgCAAgDQAAgCADgDIAPgLQACgCADAAQADAAACADIAaAmIAUghQADgEACAAQACAAADADIANALQADACAAADg");
	this.shape_64.setTransform(435.4035,728.5543,1.2461,1.2461);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgbA4IgSgHQgFgCAAgEIABgEIAZgtIgXgbQgCgCAAgDQAAgCADgDIAPgLQABgBAAAAQABAAAAgBQABAAABAAQAAAAABAAQADAAACADIAaAmIAUghQADgEACAAQACAAADADIANALQADACAAADIgCAFIgbAgIAYAcQACACAAADQAAADgDADIgOALQgBAAAAABQgBAAAAAAQgBAAgBABQAAAAgBAAQgCAAgDgDIgbgpIgMAoIgCAEQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgDgBg");
	this.shape_65.setTransform(435.4035,728.5543,1.2461,1.2461);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(0.8).p("AAagnIAFBJQAAAHgGACIgpAPIgCAAQgFAAgCgFIgEgPIgBgDQAAgFAGgBIAYgGIgDguIgNgBQgGgCAAgFIAAgCIAEgSQABgGAFAAIACABIAeAJQAGACAAAGg");
	this.shape_66.setTransform(424.126,728.7101,1.2461,1.2461);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgSA6QgFgBgCgEIgEgPIgBgDQAAgEAGgCIAYgGIgDgtIgNgCQgGgBAAgFIAAgDIAEgSQABgFAFAAIACAAIAeAKQAGABAAAHIAFBIQAAAHgGACIgpAPg");
	this.shape_67.setTransform(424.126,728.7101,1.2461,1.2461);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(0.8).p("AAOAdQgDABgDAAIgNAAQgHAAAAgHIgDgrQAAgEACgCQADgCACAAIARgBQAEAAABACQACACAAADIAAAtQAAACgCAEg");
	this.shape_68.setTransform(417.4903,725.657,1.2461,1.2461);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgFAdQgHABAAgIIgDgqQAAgDABgDQADgCADAAIARgBQADAAACACQACACAAADIgBAtQAAACgCADQgCACgDAAg");
	this.shape_69.setTransform(417.4903,725.657,1.2461,1.2461);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(0.8).p("AArAUQAHAAAAAHIAAAOQAAAEgCABQgBACgEABIhUAEQgEAAgCgCQgCgBABgEIACgWQAAgGAHAAIAvABIACgpIgxADQgDAAgCgCQgBgCAAgEIABgSQABgHAGAAIBAAAQAHAAAAAHIABBAg");
	this.shape_70.setTransform(401.2104,728.7412,1.2461,1.2461);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgvAzQgCgBABgEIACgWQAAgGAHAAIAvABIACgpIgxADQgDAAgCgCQgBgCAAgEIABgSQABgHAGAAIBAAAQAHAAAAAHIABBAIAIABQAHAAAAAHIAAAOQAAAEgCABQgBACgEABIhUAEQgEAAgCgCg");
	this.shape_71.setTransform(401.2104,728.7412,1.2461,1.2461);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(0.8).p("AAPA1QgBACgEAAIgLAAQgHgBAAgHIgIhcQAAgDABgDQACgCADAAIATgBQADAAACACQACACAAADIABBfQAAADgCACg");
	this.shape_72.setTransform(391.7887,728.5231,1.2461,1.2461);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgBA3QgHgBAAgHIgIhdQAAgDABgCQACgCADAAIATgBQADAAACACQACACAAADIABBfQAAADgCACQgBACgEAAg");
	this.shape_73.setTransform(391.7887,728.5231,1.2461,1.2461);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(0.8).p("Agrg3QACgCAEAAIBMAJQADAAACACQACACAAAEIAABOQAAAHgHABIhKAMIgCAAQgFAAAAgHIgBgTQgBgIAHAAIA3gFIgCgpIg1ACQgDAAgCgCQgCgCAAgDIgBgXQAAgEACgBg");
	this.shape_74.setTransform(382.8476,728.8035,1.2461,1.2461);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgqAzIgBgTQgBgIAHAAIA3gFIgCgpIg1ACQgDAAgCgCQgCgCAAgDIAAgXQAAgEABgBQACgCADAAIBMAJQAEAAACACQACACAAAEIAABOQgBAHgGABIhJAMIgCAAQgGAAAAgHg");
	this.shape_75.setTransform(382.8476,728.8035,1.2461,1.2461);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(0.8).p("AApA3IgUgBQgEAAgCgCQgBgBAAgEIABhHIg3ABQgDAAgCgBQgCgCAAgEIABgQQABgIAHABIBKADQAHABAAAGIAFBaQAAAIgHAAgAgqA0QgCgCAAgDIAAgBIAGgoQAAgEACgBQADgBACAAIAOABQAGAAAAAHIgCAlQAAAHgHAAIgRABQgEABgBgCg");
	this.shape_76.setTransform(370.1058,728.7081,1.2461,1.2461);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AAVA2QgEAAgCgCQgBgBAAgEIABhHIg3ABQgDAAgCgBQgCgCAAgEIABgQQABgIAHABIBKADQAHABAAAGIAFBaQAAAIgHAAgAgqA0QgBgBAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBIAAgBIAGgoQAAgEACgBIAFgBIAOABQAGAAAAAHIgCAlQAAAHgHAAIgRABIgCAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAg");
	this.shape_77.setTransform(370.1058,728.7081,1.2461,1.2461);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#4D4D4D").ss(1.6).p("AgsnuQExgLDeCIQDeCHAGDKQAEBng8BgIBtFGImjhWQilBDi+AHQkzALjdiIQjeiHgHjKQgHjJDUiXQDTiWEzgLg");
	this.shape_78.setTransform(401.4236,753.1896,1.2463,1.2463);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#808080").s().p("AFbGYQilBDi+AHQkzALjdiIQjeiHgHjKQgHjJDUiXQDTiWEzgLQExgLDeCIQDeCHAGDKQAEBng8BgIBtFGg");
	this.shape_79.setTransform(401.1833,753.0311,1.2463,1.2463);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(0.8).p("AANAcQgBACgEAAIgNAAQgHgBAAgGIgDgrQgBgDADgDQACgCADAAIARgBQADAAACACQACADAAACIgBAtQAAAEgCABg");
	this.shape_80.setTransform(1053.7347,718.7428,1.3126,1.3126);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgFAdQgHAAAAgHIgDgqQgBgDADgDQACgCADAAIARgBQADAAACACQACADAAACIgBAsQAAAEgCACQgBACgEAAg");
	this.shape_81.setTransform(1053.7347,718.7428,1.3126,1.3126);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(0.8).p("Agjg8IBRAKQAHABgBAHIgIBQQAAAGgGABIhOAQQgFAAgBgGIgFgUQAAgCACgCQACgCACAAIBCgIIACgoIgpgLIgFASIASABQACAAADACQABACgBADIAAALQAAADgCACQgCACgDAAIgmgFQgHgCABgHIAIg1QABgIAHABg");
	this.shape_82.setTransform(1043.8349,722.1073,1.3126,1.3126);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AguA3IgFgUQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABgBQAAAAABAAQABAAAAgBQABAAAAAAIBCgIIACgoIgpgLIgFASIASABQACAAADACQABACgBADIAAALQAAADgCACQgCACgDAAIgmgFQgHgCABgHIAIg1QABgIAHABIBRAKQAHABgBAHIgIBQQAAAGgGABIhOAQQgFAAgBgGg");
	this.shape_83.setTransform(1043.8349,722.1073,1.3126,1.3126);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(0.8).p("AApA3IgUgBQgEAAgCgCQgBgBAAgEIABhHIg3ABQgDAAgCgCQgCgBAAgEIABgQQABgIAHABIBKADQAHABAAAGIAFBaQAAAIgHAAgAgqA0QgCgCAAgDIAAgBIAGgoQAAgEACgBQACgBADAAIAOAAQAGABAAAHIgCAlQAAAHgHAAIgRABQgEAAgBgBg");
	this.shape_84.setTransform(1029.7322,721.9567,1.3126,1.3126);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AAVA2QgEAAgCgCQgBgBAAgEIABhHIg3ABQgDAAgCgCQgCgBAAgEIABgQQABgIAHABIBKADQAHABAAAGIAFBaQAAAIgHAAgAgqA0QgBgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBIAAgBIAGgoQAAgEACgBQACgBADAAIAOAAQAGABAAAHIgCAlQAAAHgHAAIgRABQgEAAgBgBg");
	this.shape_85.setTransform(1029.7322,721.9567,1.3126,1.3126);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(0.8).p("AArAUQAHAAAAAHIgBAOQAAAEgBABQgCACgDABIhVAEQgEAAgBgCQgCgBAAgEIACgWQABgHAHAAIAuABIACgoIgwADQgEAAgBgCQgCgCAAgEIABgSQABgHAHAAIBAAAQAHAAAAAHIABBAg");
	this.shape_86.setTransform(1008.7957,721.9915,1.3126,1.3126);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgvAzQgCgBAAgEIACgWQABgHAHAAIAuABIACgoIgwADQgEAAgBgCQgCgCAAgEIABgSQABgHAHAAIBAAAQAHAAAAAHIABBAIAIABQAHAAAAAHIgBAOQAAAEgBABIgFADIhVAEQgEAAgBgCg");
	this.shape_87.setTransform(1008.7957,721.9915,1.3126,1.3126);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(0.8).p("AAVAvIgFhJIgYACIgEBFQAAAGgGABIgUABQgEAAgBgCQgCgBAAgEIAIhEIgHABQgDAAgCgCQgDgBAAgEIAAgSQAAgDADgDQACgCADABIBOADQAHABABAGIALBaQAAAEgCACQgDACgCAAIgSgBQgGAAgBgHg");
	this.shape_88.setTransform(994.3895,721.9522,1.3126,1.3126);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AAbA2QgFAAgBgHIgGhJIgXACIgDBFQAAAGgIABIgTABQgEAAgCgCQgBgBAAgEIAHhEIgHABQgCAAgCgCQgCgBgBgEIAAgSQABgDACgDQADgCACABIBOADQAHABABAGIAKBaQABAEgCACQgDACgDAAg");
	this.shape_89.setTransform(994.3895,721.9522,1.3126,1.3126);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(0.8).p("AAQA1QgCACgEAAIgLgBQgGAAgBgHIgIhcQAAgDABgDQACgCADAAIATgBQAEAAABACQACACAAADIABBfQAAADgBACg");
	this.shape_90.setTransform(984.0524,721.7618,1.3126,1.3126);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgBA3QgGgCgBgGIgIhdQAAgDABgCQACgCADAAIATgBQAEAAABACQACABAAAEIABBfQAAADgBACQgCACgEAAg");
	this.shape_91.setTransform(984.0524,721.7618,1.3126,1.3126);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(0.8).p("AA0g5QAAACgCACIglAzIAgBCIABAEQAAAEgEACIgKAEIgDABQgEAAgCgEIhJiDIgBgFQAAgEAEgBIASgLIAEgBQAEAAABAFIAUArIASgpQADgEADAAQACAAACABIAUALQAEACAAAEg");
	this.shape_92.setTransform(973.8795,724.7481,1.3126,1.3126);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AAXBLIhJiDIgBgFQAAgEAEgBIASgLIAEgBQAEAAABAFIAUArIASgpQADgEADAAIAEABIAUALQAEACAAAEQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAIglAzIAgBCIABAEQAAAEgEACIgKAEIgDABQgEAAgCgEg");
	this.shape_93.setTransform(973.8795,724.7481,1.3126,1.3126);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(0.8).p("AA6AuQgBACgEAAIgVgBQgEgBgBgBQgCgCAAgEIACg5IgkgGIAJBAQAAAHgGACIgmAIQgFAAgCgFIgHgVIgBgDQAAgFAGgBIAUgCIgJhFQAAgEABgBQACgCADAAIBSAFQAGAAABAHIAHBVQABAEgDABg");
	this.shape_94.setTransform(1077.531,689.9632,1.3126,1.3126);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgzA0IgHgVIgBgDQAAgFAGgBIAUgCIgJhFQAAgEABgBQACgCADAAIBSAFQAGAAABAHIAHBVQABAEgDABQgBACgEAAIgVgBQgEgBgBgBQgCgCAAgEIACg5IgkgGIAJBAQAAAHgGACIgmAIQgFAAgCgFg");
	this.shape_95.setTransform(1077.531,689.9632,1.3126,1.3126);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(0.8).p("Ageg3IA/AGQAEABABABQABADAAADIgBBaQAAADgBACQgDACgDAAIgTgBQgCAAgCgCQgCgCAAgCIAAgCIAKhAIgwgEQgHgBABgHIABgTQAAgIAHABg");
	this.shape_96.setTransform(1063.5961,689.4374,1.3126,1.3126);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AAfA4IgTgBQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAIAAgCIAKhAIgwgEQgHgBABgHIABgTQAAgIAHABIA/AGQAEABABABQABADAAADIgBBaQAAADgBACIgFACIgBAAg");
	this.shape_97.setTransform(1063.5961,689.4374,1.3126,1.3126);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").ss(0.8).p("AAzghQAAAEgCACIgbAgIAYAbQADAEAAABQAAAEgEACIgOALQgDACgBAAQgDAAgDgDIgbgpIgMAoQAAACgCACQgBABgDAAIgDAAIgSgIQgFgCAAgEQAAgBACgDIAYgtIgXgaQgCgDAAgCQAAgDADgDIAQgLQADgCABAAQADAAACADIAaAnIAUgiQACgDAEAAQACAAACACIANALQADADAAACg");
	this.shape_98.setTransform(1050.9313,689.3725,1.3126,1.3126);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgbA5IgSgIQgFgCAAgEIACgEIAYgtIgXgaQgCgDAAgCQAAgDADgDIAQgLIAEgCQADAAACADIAaAnIAUgiQACgDAEAAQAAAAABAAQABAAAAAAQABABAAAAQAAAAABABIANALQADADAAACQAAAEgCACIgbAgIAYAbIADAFQAAAEgEACIgOALIgEACQgDAAgDgDIgbgpIgMAoIgCAEIgEABg");
	this.shape_99.setTransform(1050.9313,689.3725,1.3126,1.3126);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(0.8).p("AApA3IgVAAQgDAAgCgCQgCgCABgEIABhHIg3ACQgEAAgBgCQgCgDAAgDIABgRQABgGAHAAIBKADQAHAAAAAHIAEBaQABAIgHAAgAgrA0QgBgBAAgDIAAgCIAFgoQABgCACgDQACgBADAAIANABQAHAAAAAIIgCAkQAAAHgHAAIgSACQgCAAgDgCg");
	this.shape_100.setTransform(1036.7954,689.5366,1.3126,1.3126);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AAUA3QgDAAgCgCQgCgDABgDIABhHIg3ABQgEAAgBgBQgCgCAAgFIABgQQABgGAHAAIBKADQAHAAAAAHIAEBaQABAIgHAAgAgrA0QAAAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAgBIAAgBIAFgoIADgFQACgBADAAIANABQAHAAAAAIIgCAkQAAAHgHAAIgSACIgFgCg");
	this.shape_101.setTransform(1036.7954,689.5366,1.3126,1.3126);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(0.8).p("AAzghQAAADgCADIgbAgIAYAbQACADAAACQAAAEgDACIgOALIgEACQgDAAgDgDIgbgpIgMAoIgCAEQgBABgDAAIgDAAIgSgIQgFgCAAgEIABgEIAZgtIgXgaQgCgDAAgCQAAgDADgDIAQgLQADgCABAAQADAAACADIAaAnIAUgiQACgDADAAQADAAACACIANALQADADAAACg");
	this.shape_102.setTransform(1015.5557,689.3725,1.3126,1.3126);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgbA5IgSgIQgFgCAAgEIABgEIAZgtIgXgaQgCgDAAgCQAAgDADgDIAQgLIAEgCQADAAACADIAaAnIAUgiQACgDADAAQABAAAAAAQABAAABAAQAAABABAAQAAAAABABIANALQADADAAACQAAADgCADIgbAgIAYAbQACADAAACQAAAEgDACIgOALIgEACQgDAAgDgDIgbgpIgMAoIgCAEIgEABg");
	this.shape_103.setTransform(1015.5557,689.3725,1.3126,1.3126);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").ss(0.8).p("AANAcQgBADgEgBIgNAAQgGgBgBgHIgDgqQAAgEACgCQABgBAEgBIARgBQACAAADACQACACAAADIgBAtQAAAEgCABg");
	this.shape_104.setTransform(1005.5731,686.3656,1.3126,1.3126);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AAIAeIgNAAQgGgBgBgHIgDgqQAAgEACgCQABgBAEgBIARgBQACAAADACQACACAAADIgBAtQAAAEgCABQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAgBAAIgCAAg");
	this.shape_105.setTransform(1005.5731,686.3656,1.3126,1.3126);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").ss(0.8).p("AAkgqIgEAUQgBAFgFAAIgCAAIgPgFIAFBEQAAAHgGACIgRACQAAABgBAAQgGAAAAgHIgDg6QAAgFAEgEIAKgKIgZgIQgFgBAAgFIACgLQADgHAGACIA2AIQAGABAAAFg");
	this.shape_106.setTransform(997.9008,689.5848,1.3126,1.3126);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgQAzIgDg6QAAgFAEgEIAKgKIgZgIQgFgBAAgFIACgLQADgHAGACIA2AIQAGABAAAFIgEAUQgBAFgFAAIgCAAIgPgFIAFBEQAAAHgGACIgRACIgBABQgGAAAAgHg");
	this.shape_107.setTransform(997.9008,689.5848,1.3126,1.3126);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#000000").ss(0.8).p("AApA3IgUAAQgDAAgDgCQgBgCAAgEIAChHIg4ACQgDAAgCgCQgCgDABgDIAAgRQABgGAHAAIBLADQAGAAABAHIAEBaQAAAIgHAAgAgqA0QgCgBAAgDIAAgCIAGgoQAAgDACgCQADgBACAAIAOABQAGAAAAAIIgCAkQAAAHgHAAIgRACQgEAAgBgCg");
	this.shape_108.setTransform(986.0477,689.5366,1.3126,1.3126);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AAVA3QgDAAgDgCQgBgDAAgDIAChHIg4ABQgDAAgCgBQgCgCABgFIAAgQQABgGAHAAIBLADQAGAAABAHIAEBaQAAAIgHAAgAgqA0QgBAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAgBIAAgBIAGgoQAAgDACgCQADgBACAAIAOABQAGAAAAAIIgCAkQAAAHgHAAIgRACQgEAAgBgCg");
	this.shape_109.setTransform(986.0477,689.5366,1.3126,1.3126);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").ss(0.8).p("AAOAcQgDACgDAAIgNAAQgHgBAAgHIgDgqQAAgDACgDQABgBAEgBIARgBQADAAACACQACACAAADIAAAtQAAADgCACg");
	this.shape_110.setTransform(969.2525,686.3534,1.3126,1.3126);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AAIAeIgNAAQgHgBAAgHIgDgqQAAgDACgDIAFgCIARgBQADAAACACQACACAAADIgBAtQAAADgBACQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAIgBAAg");
	this.shape_111.setTransform(969.2525,686.3534,1.3126,1.3126);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#000000").ss(0.8).p("AAQA1QgCACgDAAIgMgBQgHAAAAgHIgJhcQAAgEACgCQACgCADAAIATgBQAEgBABADQACACAAADIACBeQAAAEgCACg");
	this.shape_112.setTransform(963.6738,689.3538,1.3126,1.3126);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AgBA2QgHAAgBgHIgIhcQAAgEADgCQABgCADAAIATgBQADgBACADQACACAAADIABBeQAAAEgCACQgBACgEAAg");
	this.shape_113.setTransform(963.6738,689.3538,1.3126,1.3126);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").ss(0.8).p("AA0AzIhVAGQgDABgCgCQgCgCAAgEIAEhDIgOACQgEABgBgDQgCgBAAgEIAAgZQAAgDABgCQADgCADAAIBbgCQADgBADACQACACAAADIAJBdQAAAHgGABgAgLAVIAnABIgCgvIggAEg");
	this.shape_114.setTransform(952.5187,689.6885,1.3126,1.3126);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AgmA4QgCgCAAgEIAEhDIgOACQgEABgBgDQgCgBAAgEIAAgZQAAgDABgCQADgCADAAIBbgCQADgBADACQACACAAADIAJBdQAAAHgGABIhVAGIgBAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAgAgGgVIgFAqIAnABIgCgvg");
	this.shape_115.setTransform(952.5187,689.6885,1.3126,1.3126);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(0.8).p("AAzghQAAADgCACIgbAgIAYAcQACACAAADQAAADgCADIgPALQgCACgDAAQgCAAgDgDIgbgpIgMAoQgBADgBABQgCABgBAAQgDAAgBgBIgSgHQgFgCAAgEQAAgDACgBIAYgtIgXgbQgCgCAAgDQAAgCADgDIAPgLQADgCACAAQADAAACADIAbAmIATghQADgEADAAQACAAACADIANALQADACAAADg");
	this.shape_116.setTransform(1054.6395,657.016,1.3126,1.3126);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AgbA4IgSgHQgFgCABgEIABgEIAYgtIgXgbQgCgCAAgDQAAgCADgDIAQgLQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABAAQAEAAACADIAaAmIATghQADgEADAAQABAAADADIANALQACACABADQgBADgBACIgbAgIAYAcQADACAAADQAAADgEADIgOALQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQgCAAgCgDIgbgpIgNAoIgCAEQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAIgEgBg");
	this.shape_117.setTransform(1054.6395,657.016,1.3126,1.3126);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").ss(0.8).p("AArgeQAEABABABQACADgBADIgCAQQAAADgCAFIgkBBQgDAEgDAAQgBAAgCgCIgRgNQgEgCAAgDQAAgCACgDIAig0Ig5AAQgHAAAAgIIABgxQAAgDACgDQACgBADAAIATACQADAAACABQABADAAACIgGAZg");
	this.shape_118.setTransform(1040.4056,655.3752,1.3126,1.3126);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AAABFIgRgNQgEgCAAgDIACgFIAig0Ig5AAQgHAAAAgIIABgxQAAgDACgDQACgBADAAIATACQABAAABAAQAAAAABAAQAAAAABABQAAAAABAAIABAFIgGAZIBBAHQAEABABABQACADgBADIgCAQQAAADgCAFIgkBBQgDAEgDAAIgDgCg");
	this.shape_119.setTransform(1040.4056,655.3752,1.3126,1.3126);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#000000").ss(0.8).p("AA6AvQgCACgDAAIgVgCQgCAAgDgCQgCgCAAgDIACg6IgkgGIAJBBQAAAHgGABIglAIIgCAAQgFAAgBgFIgHgVIgBgDQAAgFAGgBIAUgCIgJhEQgBgEACgCQACgCADAAIBRAFQAHABAAAHIAIBUQAAAEgCACg");
	this.shape_120.setTransform(1017.4591,657.5673,1.3126,1.3126);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AgtA5QgFAAgBgFIgHgVIgBgDQAAgFAGgBIAUgCIgJhEQgBgEACgCQACgCADAAIBRAFQAHABAAAHIAIBUQAAAEgCACQgCACgDAAIgVgCQgCAAgDgCQgCgCAAgDIACg6IgkgGIAJBBQAAAHgGABIglAIg");
	this.shape_121.setTransform(1017.4591,657.5673,1.3126,1.3126);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#000000").ss(0.8).p("AArAUQAGAAAAAHIAAAOQAAAEgBABQgCACgDABIhVAEQgDAAgCgCQgBgBAAgEIABgWQABgGAHAAIAvABIABgpIgwADQgEAAgBgCQgBgCAAgEIAAgSQACgHAGAAIBAAAQAHAAAAAHIABBAg");
	this.shape_122.setTransform(1002.3966,657.2129,1.3126,1.3126);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AgvAzQgBgBAAgEIACgWQAAgGAHAAIAvABIABgpIgwADQgDAAgCgCQgCgCABgEIAAgSQACgHAGAAIBAAAQAHAAAAAHIABBAIAIABQAHAAAAAHIAAAOQAAAEgCABQgBACgEABIhVAEQgEAAgBgCg");
	this.shape_123.setTransform(1002.3966,657.2129,1.3126,1.3126);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#000000").ss(0.8).p("Agrg3QACgCAEAAIBMAJQADAAACACQACACAAAEIAABOQAAAHgHABIhJAMIgDAAQgFAAAAgHIgBgTQgBgIAHAAIA3gFIgCgpIg1ACQgDAAgCgCQgCgCAAgDIAAgXQAAgEABgBg");
	this.shape_124.setTransform(988.8108,657.2785,1.3126,1.3126);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AgqAzIgBgTQgBgIAHAAIA2gFIgBgpIg1ACQgDAAgCgCQgCgCAAgDIAAgXQAAgEABgBQACgCAEAAIBLAJQAEAAACACQABACAAAEIAABOQAAAHgGABIhKAMIgBAAQgGAAAAgHg");
	this.shape_125.setTransform(988.8108,657.2785,1.3126,1.3126);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#000000").ss(0.8).p("AApA3IgVgBQgDAAgCgCQgBgBAAgEIABhHIg3ABQgDAAgCgBQgCgCAAgEIABgQQABgIAHABIBKADQAHABAAAGIAFBaQAAAIgHAAgAgqA0QgCgCAAgDIAAgBIAGgoQAAgEACgBQADgBACAAIAOABQAGAAAAAHIgCAlQAAAHgHAAIgRABQgEABgBgCg");
	this.shape_126.setTransform(975.389,657.178,1.3126,1.3126);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AAUA2QgDAAgCgCQgBgBAAgEIABhHIg3ABQgDAAgCgBQgCgCAAgEIABgQQABgIAHABIBKADQAHABAAAGIAFBaQAAAIgHAAgAgqA0QgBgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBIAAgBIAGgoQAAgEACgBIAFgBIAOABQAGAAAAAHIgCAlQAAAHgHAAIgRABIgCAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAg");
	this.shape_127.setTransform(975.389,657.178,1.3126,1.3126);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#4D4D4D").ss(1.6).p("AAtnuQkxgLjeCIQjeCHgHDKQgDBmA8BgIhtFHIGjhWQCkBDC/AHQEyALDeiIQDeiHAHjKQAHjJjUiXQjTiWkzgLg");
	this.shape_128.setTransform(1007.0361,691.9331,1.3127,1.3127);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#808080").s().p("AqQCoQg8hgADhmQAHjKDeiIQDeiHExALQEzAKDTCXQDUCWgHDJQgHDKjeCIQjeCHkygLQi/gGikhDImjBVg");
	this.shape_129.setTransform(1007.2889,691.7673,1.3127,1.3127);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#000000").ss(1.1).p("ABGgtQAAAEgDADIglAsIAiAmQADAEAAADQAAAEgFAEIgTAPQgEADgDAAQgEAAgDgFIglg3IgRA2QgBADgCADQgCACgDAAIgEgCIgZgKQgHgDAAgFQAAgCACgEIAig+IgggkQgCgEAAgDQAAgEAEgEIAVgPQAEgDACAAQAEAAADAFIAkA0IAcgtQADgFAEAAQADAAADADIASAPQAEADAAAFg");
	this.shape_130.setTransform(481.5028,715.0206,1.6106,1.6106);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AglBNIgZgKQgHgDAAgFIACgGIAig+IgggkQgCgEAAgDQAAgEAEgEIAVgPQAEgDACAAQAEAAADAFIAkA0IAcgtQADgFAEAAQADAAADADIASAPQAEADAAAFQAAAEgDADIglAsIAiAmQADAEAAADQAAAEgFAEIgTAPQgEADgDAAQgEAAgDgFIglg3IgRA2QgBADgCADQgBAAAAABQgBAAAAAAQgBABgBAAQAAAAgBAAg");
	this.shape_131.setTransform(481.5028,715.0206,1.6106,1.6106);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#000000").ss(1.1).p("AAkg2IAGBlQAAAJgHADIg5ATIgEABQgGAAgCgHIgGgUIgBgEQAAgGAHgCIAigJIgFg/IgRgCQgIgBAAgIIAAgCIAFgZQABgIAHAAIADABIAqAMQAIADAAAIg");
	this.shape_132.setTransform(461.5312,715.3427,1.6106,1.6106);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AgiBIIgGgUIgBgEQAAgGAHgCIAigJIgFg/IgRgCQgIgBAAgIIAAgCIAFgZQABgIAHAAIADABIAqAMQAIADAAAIIAGBlQAAAJgHADIg5ATIgEABQgGAAgCgHg");
	this.shape_133.setTransform(461.5312,715.3427,1.6106,1.6106);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#000000").ss(1.1).p("AASAnQgCACgFAAIgSAAQgKgBAAgJIgEg7QAAgEACgEQADgDAEAAIAYgBQAFAAACADQADADAAAEIgBA9QAAAGgDACg");
	this.shape_134.setTransform(449.7671,709.9011,1.6106,1.6106);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AgHApQgKgBAAgJIgEg7QAAgEACgEQADgDAEAAIAYgBQAFAAACADQADADAAAEIgBA9QAAAGgDACQgCACgFAAg");
	this.shape_135.setTransform(449.7671,709.9011,1.6106,1.6106);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#000000").ss(1.1).p("Ag7hMQACgDAGABIBoAMQAFAAACADQACACAAAFIAABsQAAAKgIABIhmARIgCAAQgHAAgBgJIgBgbQgBgKAJgBIBLgHIgCg5IhJADQgEABgDgDQgDgDAAgEIAAgfQAAgGACgCg");
	this.shape_136.setTransform(421.5075,715.4433,1.6106,1.6106);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AgyBQQgHAAgBgJIgBgbQgBgKAJgBIBLgHIgCg5IhJADQgEABgDgDQgDgDAAgEIAAgfQAAgGACgCQACgDAGABIBoAMQAFAAACADQACACAAAFIAABsQAAAKgIABIhmARg");
	this.shape_137.setTransform(421.5075,715.4433,1.6106,1.6106);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#000000").ss(1.1).p("AASAnQgCACgFAAIgSAAQgJgBgBgJIgEg7QAAgEACgEQADgDAFAAIAXgBQAFAAACADQADACAAAFIgBA9QAAAGgDACg");
	this.shape_138.setTransform(405.9584,709.9011,1.6106,1.6106);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AgHApQgJgBgBgJIgEg7QAAgEACgEQADgDAFAAIAXgBQAFAAACADQADACAAAFIgBA9QAAAGgDACQgCACgFAAg");
	this.shape_139.setTransform(405.9584,709.9011,1.6106,1.6106);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#000000").ss(1.1).p("AA8hMIADAAIAWAFQAIACAAAHIgBAEIggB3QgBAJgJAAIhrAJQgJABgCgJIgYiBIAAgCQAAgFACgCQADgCADgBIAdgDQAEgBADACQADACABAFIAJA1IAZg8QADgHAFAAIADABIAUAGIAFACQACADAAADIgaBEQgCAHgGAAIgEgBIgXgGIAFAaIA9gCIAThgQABgIAHAAg");
	this.shape_140.setTransform(386.1144,714.988,1.6106,1.6106);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AhEBHIgXiBIAAgCQAAgFACgCIAFgDIAegDQADgBADACQAEACAAAFIAJA1IAZg8QADgHAGAAIACABIAUAGIAGACQABADAAADIgaBEQgCAHgGAAIgDgBIgYgGIAFAaIA8gCIAUhgQABgIAIAAIADAAIAVAFQAHACAAAHIAAAEIgfB3QgCAJgJAAIhrAJIgCABQgHAAgCgJg");
	this.shape_141.setTransform(386.1144,714.988,1.6106,1.6106);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#000000").ss(1.1).p("AA7gpQAEAAADADQACADAAAFIgDAVQAAAFgEAGIgxBaQgDAGgFAAQgCAAgDgDIgXgRQgFgEAAgEQAAgDACgDIAvhIIhNAAQgKAAAAgLIABhEQAAgEACgDQAEgDAEABIAaACQADAAADADQACACAAAEIgIAjg");
	this.shape_142.setTransform(358.7823,712.2355,1.6106,1.6106);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AgBBfIgXgRQgFgEAAgEQAAgDACgDIAvhIIhNAAQgKAAAAgLIABhEQAAgEACgDQAEgDAEABIAaACQADAAADADQACACAAAEIgIAjIBZAJQAEAAADADQACADAAAFIgDAVQAAAFgEAGIgxBaQgDAGgFAAQgCAAgDgDg");
	this.shape_143.setTransform(358.7823,712.2355,1.6106,1.6106);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#000000").ss(1.1).p("AAVBJQgDADgEgBIgQAAQgJgBgBgJIgLh/QAAgFACgDQACgCAFgBIAagBQAFAAACACQADADAAAFIACCBQAAAEgDAEg");
	this.shape_144.setTransform(342.3393,714.9458,1.6106,1.6106);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AAOBLIgQAAQgJgBgBgJIgLh/QAAgFACgDQACgCAFgBIAagBQAFAAACACQADADAAAFIACCBQAAAEgDAEQgCACgEAAIgBAAg");
	this.shape_145.setTransform(342.3393,714.9458,1.6106,1.6106);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#000000").ss(1.1).p("AAUBbQgDAEgEgBIgSgBQgFAAgCgDQgCgCgBgFIgHikQAAgKAJgBIAagBQAFAAACADQADADAAAEIAACnQAAAEgDADg");
	this.shape_146.setTransform(332.8414,718.3402,1.6106,1.6106);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AANBeIgSgBQgFAAgCgDQgCgCgBgFIgHikQAAgKAJgBIAagBQAFAAACADQADADAAAEIAACnQAAAEgDADQgCADgDAAIgCAAg");
	this.shape_147.setTransform(332.8414,718.3402,1.6106,1.6106);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#4D4D4D").ss(1.6).p("AgsnuQExgLDeCIQDeCHAHDKQADBmg7BgIBsFHImjhWQikBDi/AHQkyALjeiIQjeiHgHjKQgHjJDUiXQDTiWEzgLg");
	this.shape_148.setTransform(411.2452,723.6679,1.6107,1.6107);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#808080").s().p("AFbGZQikBDi/AGQkyALjeiHQjeiIgHjKQgHjJDUiWQDTiXEzgKQExgLDeCHQDeCIAHDKQADBlg7BhIBsFGg");
	this.shape_149.setTransform(410.9367,723.4647,1.6107,1.6107);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#000000").ss(1.1).p("AASAnQgCACgFAAIgTAAQgIgBgBgJIgEg7QAAgFACgDQADgDAEAAIAYgBQAEAAADADQADADAAAEIgBA9QAAAFgDADg");
	this.shape_150.setTransform(1166.0561,563.9031,1.6256,1.6256);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AgHApQgJgBgBgJIgEg7QAAgFACgDQADgDAEAAIAZgBQADAAAEADQACADAAAEIgBA9QAAAFgCADQgDACgFAAg");
	this.shape_151.setTransform(1166.0561,563.9031,1.6256,1.6256);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#000000").ss(1.1).p("AA9hMIADAAIAVAFQAIACAAAHIgBAEIgfB3QgCAJgIAAIhsAJQgJABgBgJIgZiDQAAgEADgDQACgCAEgBIAdgDQAEgBADACQADADABAEIAIA1IAag8QACgHAGAAIADABIAUAGQACAAADACQACADAAADIgBAEIgaBAQgCAHgFAAIgEgBIgXgGIAEAaIA9gCIAThgQACgIAHAAg");
	this.shape_152.setTransform(1145.9798,569.0373,1.6256,1.6256);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AhDBHIgZiDQABgEACgDQABgCAFgBIAcgDQAFgBACACQAEADAAAEIAJA1IAZg8QACgHAHAAIADABIAUAGIAFACQACADAAADIgCAEIgZBAQgCAHgFAAIgEgBIgXgGIAEAaIA9gCIAThgQACgIAGAAIADAAIAWAFQAIACAAAHIgBAEIgfB3QgDAJgHAAIhsAJIgBABQgIAAgBgJg");
	this.shape_153.setTransform(1145.9798,569.0373,1.6256,1.6256);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#000000").ss(1.1).p("AA7gpQAEAAADADQACACAAAGIgDAVQAAAFgEAGIgxBaQgDAGgFAAQgDAAgCgDIgYgRQgEgEAAgEQAAgCACgEIAwhIIhPAAQgJAAAAgLIABhEQAAgFADgCQACgDAEABIAaACQAFAAABADQADACAAAEIgIAjg");
	this.shape_154.setTransform(1105.5834,566.2593,1.6256,1.6256);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AgBBfIgYgRQgEgEAAgEQAAgCACgEIAwhIIhOAAQgKAAAAgLIABhEQAAgFACgCQADgDAFABIAaACQAEAAABADQADACAAAEIgIAjIBaAJQADAAADADQACACAAAGIgDAVQAAAFgEAGIgxBaQgDAGgEAAQgEAAgCgDg");
	this.shape_155.setTransform(1105.5834,566.2593,1.6256,1.6256);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#000000").ss(1.1).p("AgphMIBVAIQAEAAADADQADADAAAFIgCB7QAAAGgCACQgDADgEAAIgagCQgEAAgDgCQgCgDAAgDIAOhbIhCgGQgKgBABgKIACgZQABgLAJABg");
	this.shape_156.setTransform(1062.1231,569.1445,1.6256,1.6256);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("AARBLQgEAAgDgCQgCgDAAgDIAOhbIhCgGQgKgBABgKIACgZQABgLAJABIBVAIQAEAAADADQADADAAAFIgCB7QAAAGgCACQgDADgEAAg");
	this.shape_157.setTransform(1062.1231,569.1445,1.6256,1.6256);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#000000").ss(1.1).p("AAehLIAaABQAJABAAAKIgBB5QAAAKgKABIhpAJQgJABgBgKIgDgdQAAgFACgDQADgCAEAAIAdgBIgfhXIAAgEQAAgGAHgDIAWgGIAEAAQAGAAACAHIAaBjIAPAAIgEheQgBgLAKABg");
	this.shape_158.setTransform(1041.2024,569.1996,1.6256,1.6256);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("Ag9BFIgDgdQAAgFACgDQADgCAEAAIAdgBIgfhXIAAgEQAAgGAHgDIAWgGIAEAAQAGAAACAHIAaBjIAPAAIgEheQgBgLAKABIAaABQAJABAAAKIgBB5QAAAKgKABIhpAJIgCAAQgIAAAAgJg");
	this.shape_159.setTransform(1041.2024,569.1996,1.6256,1.6256);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#000000").ss(1.1).p("AATAnQgDACgFAAIgTAAQgIgBgBgJIgEg7QAAgFADgDQACgDAEAAIAYgBQAEAAADADQADADAAAEIgBA9QAAAFgCADg");
	this.shape_160.setTransform(1025.4408,563.9031,1.6256,1.6256);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFFFF").s().p("AgHApQgJgBgBgJIgEg7QAAgFACgDQADgDAEAAIAYgBQAEAAAEADQACADAAAEIgBA9QAAAFgCADQgDACgFAAg");
	this.shape_161.setTransform(1025.4408,563.9031,1.6256,1.6256);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#000000").ss(1.1).p("AAVBJQgCADgFgBIgQAAQgJgBgBgJIgLh/QAAgGACgCQADgDAEAAIAagBQAFAAACACQADADAAAFIACCBQAAAEgDAEg");
	this.shape_162.setTransform(1015.9716,569.007,1.6256,1.6256);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("AAOBLIgQAAQgJgBgBgJIgLh/QAAgGACgCQADgDAEAAIAagBQAFAAACACQADADAAAFIACCBQAAAEgDAEQgCACgDAAIgCAAg");
	this.shape_163.setTransform(1015.9716,569.007,1.6256,1.6256);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#000000").ss(1.1).p("AAUBbQgDADgEAAIgSgBQgEAAgDgDQgDgCAAgFIgHikQAAgKAJgBIAagBQAFAAACADQADADAAAEIAACnQAAAEgDADg");
	this.shape_164.setTransform(1006.3805,572.4085,1.6256,1.6256);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("AANBeIgSgBQgEAAgDgDQgDgCAAgFIgHikQAAgKAJgBIAagBQAFAAACADQADADAAAEIAACnQAAAEgDADQgCADgEAAIgBAAg");
	this.shape_165.setTransform(1006.3805,572.4085,1.6256,1.6256);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#000000").ss(1.3).p("AhBBPQgDgDAAgEIAAgDIAJg8QAAgGAEgCQADgCAFABIAUABQAKAAAAALIgDA4QAAALgLAAIgbACQgEAAgDgCgAA+BTIgfAAQgFAAgDgDQgCgDAAgGIAChtIhUADQgFAAgDgDQgDgDABgGIABgYQABgLAKAAIByAFQAKAAABALIAGCKQABALgLAAg");
	this.shape_166.setTransform(612.4166,642.7472,1.3334,1.3334);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("AAfBTQgFAAgDgDQgCgDAAgGIAChtIhUADQgFAAgDgDQgDgDABgGIABgYQABgLAKAAIByAFQAKAAABALIAGCKQABALgLAAgAhBBPQgDgDAAgEIAAgDIAJg8QAAgGAEgCQADgCAFABIAUABQAKAAAAALIgDA4QAAALgLAAIgbACIgBAAQgDAAgDgCg");
	this.shape_167.setTransform(612.4166,642.7472,1.3334,1.3334);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#000000").ss(1.3).p("AAXBRQgCADgFAAIgSgBQgLAAAAgLIgMiNQgBgFADgEQADgCAFgBIAcgBQAGAAACACQADADAAAGIACCQQAAAFgDADg");
	this.shape_168.setTransform(597.8807,642.4486,1.3334,1.3334);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("AgCBTQgLgBAAgKIgMiOQgBgFADgDQADgCAFgCIAcAAQAGgBACADQADADAAAFIACCQQAAAGgDACQgCADgFAAg");
	this.shape_169.setTransform(597.8807,642.4486,1.3334,1.3334);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#000000").ss(1.3).p("ABNgzQAAAFgDADIgpAxIAlArQAEAEAAADQAAAEgFAFIgWARQgDADgEAAQgEAAgEgFIgpg+IgTA9QgBAEgCACQgCACgEAAIgFgBIgbgMQgHgDAAgGQAAgDACgDIAlhFIgjgoQgDgFAAgDQAAgEAFgEIAXgSQAEgCADAAQAFAAADAFIAoA6IAegzQAEgFAEAAQAEAAADADIAUARQAEADAAAFg");
	this.shape_170.setTransform(582.3518,642.5153,1.3334,1.3334);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("AgqBWIgbgMQgHgDAAgGQAAgDACgDIAlhFIgjgoQgDgFAAgDQAAgEAFgEIAXgSQAEgCADAAQAFAAADAFIAoA6IAegzQAEgFAEAAQAEAAADADIAUARQAEAEAAAEQAAAFgDAEIgpAwIAlArQAEAEAAADQAAAEgFAFIgWARQgDADgEAAQgEAAgEgFIgpg9IgTA9IgDAFQgCACgEAAg");
	this.shape_171.setTransform(582.3518,642.5153,1.3334,1.3334);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#000000").ss(1.3).p("AgBAiQACgCAFABIAfACIgQg6IhHBlQgDAFgFAAQgEAAgDgCIgOgKQgFgDAAgGQAAgDACgEIAog7IgogjQgFgEAAgFQAAgDAFgEIAYgVQAFgDACAAQAFAAADAFIAZAjIAZgmQADgGAFAAQADAAADACIAdAQQAHAEACAIIAcB6IABAEQAAAFgDABQgCADgFAAIhKAAQgEAAgDgEQgDgDABgFIABgbQAAgFADgEg");
	this.shape_172.setTransform(547.2157,642.1819,1.3334,1.3334);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFFFFF").s().p("AhBBRIgOgKQgFgDAAgGQAAgDACgEIAog7IgogjQgFgDAAgFQAAgEAFgEIAYgVQAFgDACAAQAFAAADAGIAZAiIAZgmQADgGAFABIAGABIAdAQQAHAEACAIIAcB7IABADQAAAFgDACQgCACgFAAIhKAAQgEAAgDgDQgDgEABgFIABgbQAAgFADgDQACgDAFABIAfADIgQg7IhHBmQgDAEgFAAQgEABgDgDg");
	this.shape_173.setTransform(547.2157,642.1819,1.3334,1.3334);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#000000").ss(1.3).p("AgBAiQACgCAFABIAeACIgQg6IhGBlQgEAFgEAAQgEAAgDgCIgOgKQgFgDAAgGQAAgDACgEIAog7IgpgjQgEgEAAgFQAAgEAEgDIAZgVQAEgDADAAQAEAAAEAFIAZAjIAYgmQAEgGAFAAQADAAADACIAcAQQAIAEABAIIAeB+QAAAEgDACQgDADgEAAIhKAAQgEAAgDgEQgDgDAAgFIABgbQAAgFAEgEg");
	this.shape_174.setTransform(522.8806,642.1819,1.3334,1.3334);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFFFFF").s().p("AhBBRIgOgKQgFgDAAgGQAAgDACgEIAog7IgpgjQgEgDAAgFQAAgFAEgDIAZgVQAEgDADAAQAEAAAEAGIAZAiIAYgmQAEgGAFABIAGABIAcAQQAIAEABAIIAeB+QAAAEgDADQgDACgEAAIhKAAQgEAAgDgDQgDgEAAgFIABgbQAAgFAEgDQACgDAFABIAeADIgQg7IhGBmQgEAEgEAAQgEABgDgDg");
	this.shape_175.setTransform(522.8806,642.1819,1.3334,1.3334);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#000000").ss(1.3).p("ABDhUIADAAIAYAGQAJABAAAIIgBAEIgiCFQgDAJgJABIh3AKQgKABgCgKIgbiSQAAgEADgDQACgCAEgBIAggEQAFgBADACQAEAEAAAEIAKA7IAchDQAEgHAFAAIADAAIAXAHQAEABABACQACACAAAEIgBAFIgbBHQgDAHgHAAIgEAAIgZgIIAFAeIBDgDIAWhqQABgJAIAAg");
	this.shape_176.setTransform(496.5119,642.4611,1.3334,1.3334);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("AhLBPIgbiSQAAgEADgDQACgCAEgBIAhgEQAEgBAEACQADAEAAAEIAKA7IAchDQAEgHAFAAIAEAAIAWAHQAEABABACQACACAAAEIgBAFIgbBHQgDAHgGAAIgFAAIgZgIIAFAeIBEgDIAVhqQABgJAIAAIAEAAIAXAGQAJABgBAIIAAAEIgjCFQgCAJgJABIh3AKIgCAAQgIAAgCgJg");
	this.shape_177.setTransform(496.5119,642.4611,1.3334,1.3334);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#000000").ss(1.3).p("Ag2hbIB8APQAKABgBALIgLB5QgBAKgJACIh0AXIgDAAQgIAAgBgIIgHgbIAAgDQAAgDACgEQADgCAEAAIBkgNIADg+Ig+gQIgJAcIAcAAQAGABACADQACADgBAFIgBARQAAAEgDAEQgDADgFgBIg6gIQgKgBABgLIAMhTQACgMAKADg");
	this.shape_178.setTransform(459.3023,642.9866,1.3334,1.3334);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFFFF").s().p("Ag9BcQgIAAgBgIIgHgbIAAgDQAAgDACgEQADgCAEAAIBkgNIADg+Ig+gQIgJAcIAcAAQAGABACADQACADgBAFIgBARQAAAEgDAEQgDADgFgBIg6gIQgKgBABgLIAMhTQACgMAKADIB8APQAKABgBALIgLB5QgBAKgJACIh0AXg");
	this.shape_179.setTransform(459.3023,642.9866,1.3334,1.3334);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#000000").ss(1.3).p("AA+BTIgfAAQgFAAgDgDQgDgDABgGIAChtIhUADQgFAAgDgDQgDgDAAgGIACgYQABgMAKABIByAFQALAAAAALIAGCKQABALgLAAgAhBBPQgDgCAAgFIAJg/QABgGADgCQADgCAFABIAUABQAKAAAAALIgDA4QgBALgKAAIgbACQgEAAgDgCg");
	this.shape_180.setTransform(437.5088,642.7433,1.3334,1.3334);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFFFFF").s().p("AAfBTQgFAAgDgDQgDgDABgGIAChtIhUADQgFAAgDgDQgDgDAAgGIACgYQABgMAKABIByAFQALAAAAALIAGCKQABALgLAAgAhBBPQgDgCAAgFIAJg/QABgGADgCQADgCAFABIAUABQAKAAAAALIgDA4QgBALgKAAIgbACIgBAAQgDAAgDgCg");
	this.shape_181.setTransform(437.5088,642.7433,1.3334,1.3334);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#000000").ss(1.3).p("ABJhgIADAaQAAAEgCAGIgiBfQgDAHgGAAIgFgBIgTgJQgHgDAAgGQAAgDABgCIAdhPIhfgGQgKAAAAgKIAEgaQACgKAKAAIB4AHQAKABACAJgAg5ggQADgDAFAAIAMABQAJAAACAKIAWB7QAAAJgJABIghAFQgIAAgBgKIgFh/QAAgFADgEg");
	this.shape_182.setTransform(405.0716,647.0156,1.3334,1.3334);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFFFFF").s().p("Ag3BoIgFh/QAAgFADgEQADgDAFAAIAMABQAJAAACAKIAWB7QAAAJgJABIghAFQgIAAgBgKgAAaApIgTgJQgHgDAAgGIABgFIAdhPIhfgGQgKAAAAgKIAEgaQACgKAKAAIB4AHQAKABACAJIADAaQAAAEgCAGIgiBfQgDAHgGAAg");
	this.shape_183.setTransform(405.0716,647.0156,1.3334,1.3334);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#000000").ss(1.3).p("AguhUIBgAJQAFABACADQADACAAAGIgBCJQAAAFgDADQgDADgFAAIgdgBQgFgBgCgCQgDgCAAgFIAAgCIAQhjIhKgGQgKgBAAgLIACgcQABgMAKABg");
	this.shape_184.setTransform(385.4019,642.5766,1.3334,1.3334);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFFFFF").s().p("AATBUQgFgBgCgCQgDgCAAgFIAAgCIAQhjIhKgGQgKgBAAgLIACgcQABgMAKABIBgAJQAFABACADQADACAAAGIgBCJQAAAFgDADQgDADgFAAg");
	this.shape_185.setTransform(385.4019,642.5766,1.3334,1.3334);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#000000").ss(1.3).p("AAYBRQgDADgFAAIgSgBQgKAAgBgLIgMiNQAAgFACgEQADgCAFgBIAdgBQAFAAADACQADADAAAGIACCQQAAAFgDADg");
	this.shape_186.setTransform(372.4357,642.4486,1.3334,1.3334);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFFFFF").s().p("AgCBTQgLgBAAgKIgMiOQgBgFADgDQADgCAFgCIAcAAQAGgBACADQADADABAFIACCQQAAAGgEACQgCADgFAAg");
	this.shape_187.setTransform(372.4357,642.4486,1.3334,1.3334);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#000000").ss(1.3).p("ABBAdQALABAAALIgBAVQAAAGgCACQgDADgFAAIiBAIQgFAAgDgDQgDgEABgFIADghQABgKAKAAIBIACIADg+IhKAEQgGAAgCgDQgDgDAAgGIACgcQABgKAKAAIBiAAQALAAAAALIABBig");
	this.shape_188.setTransform(357.3624,642.8487,1.3334,1.3334);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FFFFFF").s().p("AhIBOQgDgEABgFIADggQABgLAKAAIBIACIADg9IhKADQgGAAgCgCQgDgDAAgGIACgcQABgLAKAAIBiAAQALAAAAAMIABBhIAMABQALABAAAKIgBAVQAAAGgCACQgDAEgFAAIiBAHQgFAAgDgDg");
	this.shape_189.setTransform(357.3624,642.8487,1.3334,1.3334);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#000000").ss(1.3).p("ABBAeQALABAAAKIgBAVQAAAFgCAEQgDADgFAAIiBAHQgFAAgDgDQgDgDABgFIADghQABgKAKAAIBIABIADg9IhLADQgFAAgDgCQgCgEAAgFIACgcQAAgLALAAIBiAAQALAAAAAMIABBig");
	this.shape_190.setTransform(572.2343,592.7782,1.3334,1.3334);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFFFFF").s().p("AhIBOQgDgDABgFIADghQABgLAKAAIBIACIADg+IhLAEQgFAAgDgCQgCgEAAgFIACgcQAAgLALAAIBiAAQALAAAAAMIABBiIAMAAQALABAAAKIgBAVQAAAFgCADQgDADgFAAIiBAIQgFAAgDgDg");
	this.shape_191.setTransform(572.2343,592.7782,1.3334,1.3334);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#000000").ss(1.3).p("AAYBRQgDADgFgBIgSAAQgKgBgBgKIgMiOQAAgFACgDQADgDAFAAIAdgCQAFAAADADQADADAAAFIABCQQAAAGgCADg");
	this.shape_192.setTransform(556.8165,592.3829,1.3334,1.3334);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFFFFF").s().p("AAQBTIgSAAQgKgBgBgKIgMiOQAAgFACgDQADgDAFAAIAdgCQAFAAADADQADADAAAFIABCQQAAAGgCADQgDADgEAAIgBgBg");
	this.shape_193.setTransform(556.8165,592.3829,1.3334,1.3334);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#000000").ss(1.3).p("ABNgzQAAAFgDADIgpAyIAmAqQADAEAAADQAAAEgFAFIgWARQgDADgDAAQgFAAgDgFIgrg+IgSA9QAAAEgEACQgBACgEAAIgFgBIgcgMQgGgDAAgFQAAgDABgEIAmhFIgjgoQgDgFAAgDQAAgFAFgDIAXgRQAEgDADAAQAFAAADAFIAoA6IAegyQAEgGAEAAQAEAAADADIAUASQAEACAAAFg");
	this.shape_194.setTransform(541.3153,592.4448,1.3334,1.3334);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FFFFFF").s().p("AgqBWIgcgLQgGgDAAgGIACgHIAlhFIgjgoQgDgFAAgDQAAgEAFgEIAXgSQAEgCADAAQAEAAAEAFIAoA6IAegzQAEgFAEAAQAEAAADADIAUASQAEACAAAGQAAAEgDAEIgpAxIAmAqQADAFAAADQAAADgFAFIgWARQgDADgDAAQgGAAgCgFIgqg9IgTA8QAAAEgEACQgCACgCAAg");
	this.shape_195.setTransform(541.3153,592.4448,1.3334,1.3334);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#000000").ss(1.3).p("AAog8IAHBwQABAKgJADIg/AWIgFAAQgGAAgDgHIgHgWIgBgFQAAgGAJgDIAlgJIgFhGIgUgDQgJgBAAgIIAAgDIAGgbQABgJAIAAIADAAIAvAOQAJADAAAJg");
	this.shape_196.setTransform(511.2863,592.7448,1.3334,1.3334);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FFFFFF").s().p("AgmBQIgHgWIgBgFQAAgGAJgDIAlgJIgFhGIgUgDQgJgBAAgIIAAgDIAGgbQABgJAIAAIADAAIAvAOQAJADAAAJIAHBwQABAKgJADIg/AWIgFAAQgGAAgDgHg");
	this.shape_197.setTransform(511.2863,592.7448,1.3334,1.3334);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#000000").ss(1.3).p("ABCguQAFABADADQACADgBAFIgCAYQgBAGgEAHIg3BjQgDAGgFAAQgEAAgBgCIgbgUQgFgDAAgGQAAgDADgEIA0hPIhXgBQgKAAAAgLIABhLQAAgGADgDQACgCAGAAIAcADQAFAAACACQADAEAAADIgJAng");
	this.shape_198.setTransform(493.885,589.878,1.3334,1.3334);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FFFFFF").s().p("AAABqIgbgUQgFgDAAgGQAAgDADgEIA0hPIhXgBQgKAAAAgLIABhLQAAgGADgDQACgCAGAAIAcADQAFAAACACQADAEAAADIgJAnIBjAKQAFABADADQACADgBAFIgCAYQgBAGgEAHIg3BjQgDAGgFAAQgEAAgBgCg");
	this.shape_199.setTransform(493.885,589.878,1.3334,1.3334);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#000000").ss(1.3).p("AA1BpIgfAAQgEAAgEgEQgCgCAAgGIAGiUIhGABQgLAAAAgLIABgcQAAgFADgDQACgDAGABIBfAEQAGABACACQADADAAAFIAIC2QABALgLAAg");
	this.shape_200.setTransform(474.0449,596.0303,1.3334,1.3334);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FFFFFF").s().p("AAWBpQgEAAgEgEQgCgCAAgGIAGiUIhGABQgLAAAAgLIABgcQAAgFADgDQACgDAGABIBfAEQAGABACACQADADAAAFIAIC2QABALgLAAg");
	this.shape_201.setTransform(474.0449,596.0303,1.3334,1.3334);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#000000").ss(1.3).p("ABCguQAFABADADQACACAAAGIgDAYQgBAGgEAHIg3BjQgDAGgFAAQgEAAgBgCIgbgUQgFgDAAgGQAAgCACgFIA1hPIhWgBQgMAAAAgLIAChLQAAgGADgDQACgCAGAAIAcADQAEAAADACQACAEAAADIAAAEIgIAjg");
	this.shape_202.setTransform(442.3077,589.878,1.3334,1.3334);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FFFFFF").s().p("AAABqIgbgUQgFgDAAgGIADgHIA0hPIhWgBQgLAAAAgLIABhLQAAgGACgDQADgCAGAAIAcADQAEAAADACQADAEgBADIAAAEIgJAjIBkAKQAFABACADQACACAAAGIgDAYQAAAGgEAHIg3BjQgDAGgFAAQgEAAgBgCg");
	this.shape_203.setTransform(442.3077,589.878,1.3334,1.3334);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#000000").ss(1.3).p("AAVArQgEADgEgBIgVAAQgKgBgBgKIgEhBQAAgGACgDQAEgDAEAAIAbgCQAFAAADADQACAEAAAFIgBBDQAAAGgCADg");
	this.shape_204.setTransform(427.4733,587.7259,1.3334,1.3334);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FFFFFF").s().p("AANAtIgVAAQgKgBgBgKIgEhBQAAgGACgDQAEgDAEAAIAbgCQAFAAADADQACAEAAAFIgBBDQAAAGgCADQgDADgDAAIgCgBg");
	this.shape_205.setTransform(427.4733,587.7259,1.3334,1.3334);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#000000").ss(1.3).p("ABOBOIiAAJQgGABgCgDQgDgDAAgGIAFhmIgVADQgFAAgDgDQgDgCAAgGIAAglQAAgFADgEQAEgDAEAAICMgDQAFAAADACQADAEAAAEIAOCNQABAMgLABgAgRAgIA7ACIgChJIgxAHg");
	this.shape_206.setTransform(410.5775,592.8949,1.3334,1.3334);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FFFFFF").s().p("Ag6BVQgDgDAAgGIAFhmIgVADQgFAAgDgDQgDgCAAgGIAAglQAAgFADgEQAEgDAEAAICMgDQAFAAADACQADAEAAAEIAOCNQABAMgLABIiAAJIgDAAQgEAAgBgCgAgJggIgIBAIA7ACIgChJg");
	this.shape_207.setTransform(410.5775,592.8949,1.3334,1.3334);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#4D4D4D").ss(2.7).p("AhLtEQD9gJDrA5QDjA3CxBsQCxBsBlCRQBnCWAGCoQAGCuhlCiIC4IoIrFiRQkYBylCALQj+AJjrg5Qjjg3ixhsQixhshliRQhniWgGioQgGinBdidQBaiXCph4QCph5DfhGQDmhJD/gJg");
	this.shape_208.setTransform(485.1994,624.13,1.3335,1.3335);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#808080").s().p("AJLKzQkYBylCALQj+AJjrg5Qjjg3ixhsQixhshliRQhniWgGioQgGinBdidQBaiXCph4QCph5DfhGQDmhJD/gJQD9gJDrA5QDjA3CxBsQCxBsBlCRQBnCWAGCoQAGCuhlCiIC4Iog");
	this.shape_209.setTransform(484.7599,623.8412,1.3335,1.3335);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#000000").ss(1.5).p("AA/hJIAAAEIgHAdQgCALgIAAIgEgBIgbgJIAJB4QABAMgMACIgfAGQgLAAAAgMIgEhlQgBgJAHgHIASgTIgsgMQgJgDAAgIIAAgFIAFgOQACgMAMACIBgAPQAKABAAAKg");
	this.shape_210.setTransform(569.015,587.5276,1.3677,1.3677);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FFFFFF").s().p("AgdBZIgEhlQgBgJAGgHIATgTIgsgMQgJgDAAgIIABgFIAEgOQACgMAMACIBgAPQAKABAAAKIgBAEIgGAdQgBALgJAAIgFgBIgagJIAIB4QACAMgMACIggAGQgKAAAAgMg");
	this.shape_211.setTransform(569.015,587.5276,1.3677,1.3677);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#000000").ss(1.5).p("ABHBfIgjAAQgFAAgEgEQgDgEAAgGIADh8IhhACQgHABgDgEQgCgDAAgHIACgcQABgMAMAAICDAGQAMABAAALIAHCeQABANgNAAgAhLBaQgDgDAAgFIAKhIQABgGAEgDQADgCAGABIAXABQAMABgBAMIgDBAQAAAMgMABIgfACQgFABgEgEg");
	this.shape_212.setTransform(547.4734,587.5039,1.3677,1.3677);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FFFFFF").s().p("AAjBfQgEAAgFgEQgCgEAAgGIADh8IhhACQgGABgDgEQgEgDABgHIABgcQACgMAMAAICDAGQALABABALIAHCeQABANgNAAgAhLBaQgDgDAAgFIAKhIQAAgGAEgDQAEgCAGABIAXABQAMABgBAMIgDBAQgBAMgMABIgeACIgCAAQgEAAgDgDg");
	this.shape_213.setTransform(547.4734,587.5039,1.3677,1.3677);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#000000").ss(1.5).p("AAYAxQgEADgGAAIgXgBQgMAAgBgMIgFhLQAAgGADgEQADgDAGgBIAfgBQAGAAADADQADADAAAHIgBBOQAAAGgDADg");
	this.shape_214.setTransform(516.939,581.6924,1.3677,1.3677);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FFFFFF").s().p("AgJAzQgMAAgBgMIgFhLQAAgGADgEQADgDAGgBIAfgBQAGAAADADQADADAAAHIgBBOQAAAGgDADQgEADgGAAg");
	this.shape_215.setTransform(516.939,581.6924,1.3677,1.3677);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#000000").ss(1.5).p("AAuhEIAICAQAAALgKAEIhIAZIgFAAQgIAAgCgJIgJgYIgBgGQAAgIAKgDIArgKIgGhQIgXgDQgKgCAAgJIAGgjQADgKAIAAIA5ARQALADAAALg");
	this.shape_216.setTransform(503.7405,587.5736,1.3677,1.3677);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FFFFFF").s().p("AgrBbIgJgYIgBgGQAAgIAKgDIArgKIgGhQIgXgDQgKgCAAgJIAGgjQADgKAIAAIA5ARQALADAAALIAICAQAAALgKAEIhIAZIgFAAQgIAAgCgJg");
	this.shape_217.setTransform(503.7405,587.5736,1.3677,1.3677);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#000000").ss(1.5).p("ABThtIADAYIAAAFQAAAFgCAGIgmBtQgDAJgHAAQgDAAgDgCIgWgKQgIgEAAgHIABgGIAhhaIhtgHQgLAAAAgLIAAgDIAFgbQACgMALABICKAHQALABACAMgAhCgkQADgEAHABIANAAQALABACALIAZCNQAAAKgKABIgjAGIgDAAQgJAAgBgMIgGiSQAAgGADgDg");
	this.shape_218.setTransform(483.3957,592.5302,1.3677,1.3677);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#FFFFFF").s().p("Ag1CDQgJAAgBgMIgGiSQAAgGAEgDQADgEAGABIANAAQALABADALIAYCNQAAAKgKABIgjAGgAAeAvIgWgKQgIgEAAgHIABgGIAihaIhugHQgLAAAAgLIAAgDIAFgbQACgMALABICLAHQALABABAMIAEAYIAAAFQgBAFgCAGIgmBtQgDAJgHAAIgGgCg");
	this.shape_219.setTransform(483.3957,592.5302,1.3677,1.3677);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#000000").ss(1.5).p("ABHBfIgjAAQgGAAgDgEQgDgDAAgHIADh8IhhACQgGABgDgEQgDgDAAgHIACgcQABgMAMAAICCAGQAMABABALIAHCeQABANgNAAgAhLBaQgDgDAAgFIAAgDIAKhFQABgGAEgDQADgCAGABIAXABQALAAAAANIgDBAQgBAMgMABIgeACQgFABgEgEg");
	this.shape_220.setTransform(458.2345,587.5039,1.3677,1.3677);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FFFFFF").s().p("AAkBfQgGAAgDgEQgDgDAAgHIADh8IhhACQgGABgDgEQgDgDAAgHIACgcQABgMAMAAICCAGQAMABABALIAHCeQABANgNAAgAhLBaQgDgDAAgFIAAgDIAKhFQABgGAEgDQADgCAGABIAXABQALAAAAANIgDBAQgBAMgMABIgeACIgCAAQgEAAgDgDg");
	this.shape_221.setTransform(458.2345,587.5039,1.3677,1.3677);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#000000").ss(1.5).p("ABLg1QAGABADADQADAFgBAFIgDAbQgBAIgEAHIg/ByQgEAHgFAAQgFAAgCgDIgegWQgGgFAAgFQAAgEADgEIA8hcIhjAAQgMAAAAgNIABhXQAAgGADgDQADgDAGAAIAhADQAGAAACADQADADAAAFIgLAsg");
	this.shape_222.setTransform(420.0417,584.2227,1.3677,1.3677);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#FFFFFF").s().p("AgBB5IgegWQgGgFAAgFQAAgEADgEIA8hcIhjAAQgMAAAAgNIABhXQAAgGADgDQADgDAGAAIAhADQAGAAACADQADADAAAFIgLAsIByAMQAGABADADQADAFgBAFIgDAbQgBAIgEAHIg/ByQgEAHgFAAQgFAAgCgDg");
	this.shape_223.setTransform(420.0417,584.2227,1.3677,1.3677);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("#000000").ss(1.5).p("AA9B4IgkgBQgFAAgEgDQgDgEABgGIAGipIhQABQgMAAAAgNIAAggQAAgFAEgEQAEgDAFAAIBuAFQAGABADADQACACABAHIAKDQQABANgNAAg");
	this.shape_224.setTransform(396.7212,591.4374,1.3677,1.3677);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#FFFFFF").s().p("AAZB3QgFAAgEgDQgDgEABgFIAGiqIhQABQgMAAAAgNIAAgfQAAgFAEgFQAEgDAFAAIBuAFQAGABADADQACADABAGIAKDQQABANgNAAg");
	this.shape_225.setTransform(396.7212,591.4374,1.3677,1.3677);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("#000000").ss(1.5).p("ABYg6QAAAFgDAEIgvA5IArAwQAEAFAAADQAAAGgGAEIgZAUQgEAEgEAAQgFAAgEgHIgwhGIgVBGQgCAFgCACQgDACgDAAIgGgBIgggOQgHgDAAgHQAAgEACgDIAqhQIgnguQgEgFAAgDQAAgGAGgEIAagTQAEgEAEAAQAFAAAEAGIAuBCIAjg5QAEgGAFAAQAEAAAEADIAXATQAEAFAAAFg");
	this.shape_226.setTransform(596.5404,642.9321,1.3677,1.3677);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#FFFFFF").s().p("AgwBiIgggNQgHgDAAgHQAAgEACgDIAqhPIgnguQgEgGAAgDQAAgGAGgEIAagUQAEgDAEAAQAFAAAEAHIAuBBIAjg5QAEgGAFAAQAEAAAEADIAXAUQAEAEAAAFQAAAGgDADIgvA5IArAwQAEAFAAADQAAAGgGAEIgZAUQgEADgEABQgFAAgEgHIgwhFIgVBFQgCAFgCACQgDACgDAAg");
	this.shape_227.setTransform(596.5404,642.9321,1.3677,1.3677);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("#000000").ss(1.5).p("ABmBRQgDAEgHgBIgkgCQgGgBgDgDQgDgCAAgHIAEhlIhBgKIAQBwQABANgLACIhAAOIgDABQgJAAgDgKIgMgkIgBgGQAAgIAKgBIAjgEIgQh4QgBgHADgEQADgDAGAAICPAKQALABABALIAMCUQABAGgDAEg");
	this.shape_228.setTransform(567.8335,643.9237,1.3677,1.3677);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#FFFFFF").s().p("AhaBaIgMgkIgBgGQAAgIAKgBIAjgEIgQh4QgBgHADgEQADgDAGAAICPAKQALABABALIAMCUQABAGgDAEQgDAEgHgBIgkgCQgGgBgDgDQgDgCAAgHIAEhlIhBgKIAQBwQABANgLACIhAAOIgDABQgJAAgDgKg");
	this.shape_229.setTransform(567.8335,643.9237,1.3677,1.3677);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#000000").ss(1.5).p("AhLBbQgDgEAAgEIAKhJQABgGAEgDQAEgCAFABIAXABQALABAAANIgDA/QgBAMgMABIgeACQgFAAgEgCgABHBfIgjAAQgGAAgDgEQgEgDABgGIADh9IhhADQgGAAgDgDQgDgEAAgHIACgcQABgNALABICDAGQAMAAABAMIAHCeQABANgNAAg");
	this.shape_230.setTransform(526.7573,643.2008,1.3677,1.3677);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#FFFFFF").s().p("AAkBfQgGAAgDgEQgEgDABgGIADh9IhhADQgGAAgDgDQgDgEAAgHIACgcQABgNALABICDAGQAMAAABAMIAHCeQABANgNAAgAhLBbQgDgEAAgEIAKhJQABgGAEgDQAEgCAFABIAXABQALABAAANIgDA/QgBAMgMABIgeACQgFAAgEgCg");
	this.shape_231.setTransform(526.7573,643.2008,1.3677,1.3677);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("#000000").ss(1.5).p("AgBAnQACgCAGAAIAjAEIgThDIhQB0QgFAGgFAAQgDAAgEgDIgRgMQgFgEAAgGQAAgEACgEIAuhDIgvgpQgFgFAAgFQAAgEAGgEIAcgYQAEgDADAAQAFAAAFAGIAcAnIAdgsQAEgGAFAAQADAAAEACIAhASQAIAGACAIIAiCRQAAAFgDACQgDADgGAAIhUAAQgFAAgEgEQgDgDAAgHIACgfQAAgGAEgEg");
	this.shape_232.setTransform(500.5948,642.5218,1.3677,1.3677);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#FFFFFF").s().p("AhKBdIgRgLQgFgEAAgGQAAgFACgDIAuhEIgvgpQgFgFAAgEQAAgFAGgEIAcgYQAEgDADAAQAFAAAFAGIAcAnIAdgrQAEgHAFAAQADAAAEACIAhASQAIAGACAIIAiCRQAAAFgDACQgDADgGAAIhUAAQgFAAgEgDQgDgEAAgGIACggQAAgGAEgEQACgCAGAAIAjAEIgThCIhQB0QgFAFgFAAQgDAAgEgDg");
	this.shape_233.setTransform(500.5948,642.5218,1.3677,1.3677);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f().s("#000000").ss(1.5).p("AAkBSIgJiAIgpADIgHB5QAAAMgMABIgiACQgGAAgDgDQgDgEAAgGIANh2IgMABQgGAAgDgDQgDgDAAgHIAAgfQAAgFADgFQAFgDAFAAICJAGQAMABAAALIATCeQABAHgDADQgDADgGAAIggAAQgLAAgBgNg");
	this.shape_234.setTransform(472.9155,643.2014,1.3677,1.3677);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#FFFFFF").s().p("AAwBfQgLAAgBgNIgJiAIgpADIgHB5QAAAMgMABIgiACQgGAAgDgDQgDgEAAgGIANh2IgMABQgGAAgDgDQgDgDAAgHIAAgfQAAgFADgFQAFgDAFAAICJAGQAMABAAALIATCeQABAHgDADQgDADgGAAg");
	this.shape_235.setTransform(472.9155,643.2014,1.3677,1.3677);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f().s("#000000").ss(1.5).p("ABNhgIAEAAIAbAGQAKACAAAJIgBAFIgoCYQgDALgKAAIiIAMQgLABgDgMIgfinQAAgEADgEQAEgDAEgBIAkgEQAGgBAEADQADADABAGIALBDIAghNQADgIAIAAIAEAAIAaAIQAFACABACQACACAAAEIgBAGIggBRQgDAJgHAAIgigJIAFAhIBOgCIAZh6QABgKAJAAg");
	this.shape_236.setTransform(442.8427,642.8752,1.3677,1.3677);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#FFFFFF").s().p("AhWBaIgfinQAAgEADgEQADgDAFgBIAlgEQAFgBAEADQAEADAAAGIALBDIAghNQAEgIAHAAIAEAAIAaAIQAFACABACQACACAAAEIgBAGIggBRQgDAJgHAAIgigJIAFAhIBNgCIAah6QABgKAJAAIADAAIAcAGQAKACAAAJIgBAFIgoCYQgDALgKAAIiJAMIgCAAQgJAAgCgLg");
	this.shape_237.setTransform(442.8427,642.8752,1.3677,1.3677);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f().s("#000000").ss(1.5).p("ABLAiQAMABAAAMIgBAYQAAAHgDADQgCADgHABIiTAIQgGAAgEgDQgDgEABgGIADgmQACgMALAAIBSACIAEhGIhVADQgGABgDgDQgDgDAAgHIACggQABgNALAAIBxAAQANAAAAANIABBxg");
	this.shape_238.setTransform(413.5002,643.3125,1.3677,1.3677);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#FFFFFF").s().p("AhTBaQgDgEABgGIADgmQACgMALAAIBSACIAEhGIhVADQgGABgDgDQgDgDAAgHIACggQABgNALAAIBxAAQANAAAAANIABBxIAOAAQAMABAAAMIgBAYQAAAHgDADQgCADgHABIiTAIIgCAAQgFAAgDgDg");
	this.shape_239.setTransform(413.5002,643.3125,1.3677,1.3677);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("#000000").ss(1.5).p("AAbBdQgDAEgGgBIgVgBQgLAAgBgMIgOiiQAAgHACgDQADgDAGgBIAigCQAFAAAEAEQADADAAAGIACClQAAAGgDAEg");
	this.shape_240.setTransform(395.417,642.8432,1.3677,1.3677);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#FFFFFF").s().p("AASBgIgVgBQgLAAgBgMIgOiiQAAgHACgDQADgDAGgBIAigCQAFAAAEAEQADADAAAGIACClQAAAGgDAEQgDADgEAAIgCAAg");
	this.shape_241.setTransform(395.417,642.8432,1.3677,1.3677);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f().s("#000000").ss(1.5).p("ABmBRQgDAEgGgBIglgCQgGgBgDgDQgDgDAAgGIAEhlIhBgKIAQBwQABANgLACIhAAOIgDABQgJAAgDgKIgMgkIgBgGQAAgIAKgBIAjgEIgQh4QgBgHADgEQADgDAGAAICPAKQALABABALIAMCUQABAHgDADg");
	this.shape_242.setTransform(374.6428,643.9237,1.3677,1.3677);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#FFFFFF").s().p("AhaBaIgMgkIgBgGQAAgIAKgBIAjgEIgQh4QgBgHADgEQADgDAGAAICPAKQALABABALIAMCUQABAHgDADQgDAEgGgBIglgCQgGgBgDgDQgDgDAAgGIAEhlIhBgKIAQBwQABANgLACIhAAOIgDABQgJAAgDgKg");
	this.shape_243.setTransform(374.6428,643.9237,1.3677,1.3677);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f().s("#000000").ss(1.6).p("ABjhBQAAAGgEAEIg0BAIAvA2QAFAFAAAEQAAAGgGAFIgcAWQgFAEgEAAQgGAAgEgGIg2hPIgYBNQgBAFgDADQgEACgDAAIgGgBIgkgPQgJgEAAgHQAAgEADgEIAvhZIgsg0QgEgFAAgEQAAgGAGgFIAegWQAEgDAFAAQAFAAAFAGIAzBKIAnhBQAFgHAFAAQAEAAAFAEIAZAXQAGADAAAHg");
	this.shape_244.setTransform(466.0917,693.4624,1.2291,1.2291);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#FFFFFF").s().p("Ag1BuIgkgPQgJgEAAgHQAAgEADgEIAvhaIgsgyQgEgGAAgEQAAgGAGgFIAegWQAEgEAFABQAFgBAFAHIAzBKIAnhBQAFgGAFAAQAEAAAFADIAZAXQAGAEAAAGQAAAGgEAEIg0BAIAvA2QAFAFAAAEQAAAGgGAFIgcAWQgFADgEAAQgGABgEgHIg2hOIgYBNQgBAFgDADQgEACgDAAg");
	this.shape_245.setTransform(466.0917,693.4624,1.2291,1.2291);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f().s("#000000").ss(1.6).p("AAeBnQgDAEgHAAIgXgBQgNgBgBgNIgQi1QAAgHADgEQADgEAHAAIAlgCQAGAAAFADQADAEAAAHIADC5QAAAGgEAEg");
	this.shape_246.setTransform(447.5902,693.3971,1.2291,1.2291);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#FFFFFF").s().p("AgDBqQgNgBgBgNIgQi1QAAgHADgEQADgEAHAAIAlgCQAGAAAFADQADAEAAAHIADC5QAAAGgEAEQgDAEgHAAg");
	this.shape_247.setTransform(447.5902,693.3971,1.2291,1.2291);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f().s("#000000").ss(1.6).p("ABdh6IAEAgQAAAHgCAGIgsB6QgDAKgIAAQgDAAgDgCIgZgLQgJgFAAgIIABgGIAmhlIh7gIQgMAAAAgMIAAgEIAFgeQACgNAOAAICaAJQAMABACANgAhJgpQADgDAHAAIAPAAQANABACANIAbCeQAAAKgLACIgnAGIgDAAQgLAAAAgNIgHijQAAgHAEgEg");
	this.shape_248.setTransform(429.711,698.7463,1.2291,1.2291);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#FFFFFF").s().p("Ag7CSQgLAAAAgNIgHijQAAgHAEgEQADgDAHAAIAPAAQANABACANIAbCeQAAAKgLACIgnAGgAAiA1IgZgLQgJgFAAgIIABgGIAmhlIh7gIQgMAAAAgMIAAgEIAFgeQACgNAOAAICaAJQAMABACANIAEAgQAAAHgCAGIgsB6QgDAKgIAAQgDAAgDgCg");
	this.shape_249.setTransform(429.711,698.7463,1.2291,1.2291);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f().s("#000000").ss(1.6).p("AAaA3QgDADgHAAIgbgBQgMAAgBgOIgGhUQAAgHADgDQAEgFAGAAIAigBQAHgBADAEQAEAEAAAHIgBBXQAAAIgEADg");
	this.shape_250.setTransform(412.0737,687.8974,1.2291,1.2291);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#FFFFFF").s().p("AgLA5QgMAAgBgOIgGhUQAAgHADgDQAEgFAGAAIAigBQAHgBADAEQAEAEAAAHIgBBXQAAAIgEADQgDADgHAAg");
	this.shape_251.setTransform(412.0737,687.8974,1.2291,1.2291);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f().s("#000000").ss(1.6).p("ABjhBQAAAGgEAEIg0BAIAwA2QAEAFAAAEQAAAGgGAFIgcAWQgEAEgFAAQgGAAgEgGIg2hPIgYBNQgBAFgDADQgEACgDAAIgGgBIgkgPQgJgEAAgHQAAgEADgEIAvhZIgsg0QgEgFAAgEQAAgGAGgFIAegWQAEgDAFAAQAFAAAFAGIA0BKIAmhBQAFgHAFAAQAEAAAFAEIAaAXQAFAEAAAGg");
	this.shape_252.setTransform(380.3019,693.4624,1.2291,1.2291);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#FFFFFF").s().p("Ag1BuIgkgPQgJgEAAgHQAAgEADgEIAvhaIgsgyQgEgFAAgFQAAgGAGgFIAegWQAEgEAFABQAFgBAFAHIA0BKIAmhBQAFgGAFAAQAEAAAFADIAaAXQAFAEAAAGQAAAGgEAEIg0BAIAwA2QAEAFAAAEQAAAGgGAFIgcAWQgEADgFAAQgGABgEgHIg2hOIgYBNQgBAFgDADQgEACgDAAg");
	this.shape_253.setTransform(380.3019,693.4624,1.2291,1.2291);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f().s("#000000").ss(1.6).p("AA0hNIAICQQABANgMAEIhQAbIgGABQgJAAgDgKIgJgcIgBgFQAAgKALgDIAwgMIgHhZIgZgDQgMgCAAgKIABgFIAHgiQACgMAJAAIAFABIA7ASQAMAEABALg");
	this.shape_254.setTransform(358.675,693.7696,1.2291,1.2291);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#FFFFFF").s().p("AgxBmIgJgcIgBgGQAAgIALgEIAwgLIgHhaIgZgEQgMgBAAgKIABgEIAHgjQACgMAJAAIAFABIA7ASQAMADABAMIAICQQABANgMADIhQAcIgGABQgJAAgDgKg");
	this.shape_255.setTransform(358.675,693.7696,1.2291,1.2291);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f().s("#000000").ss(1.6).p("AAaA3QgDADgHAAIgbgBQgMAAgBgOIgGhUQAAgGADgEQAEgFAGAAIAjgBQAGgBAEAEQADAEAAAHIgBBXQAAAIgEADg");
	this.shape_256.setTransform(345.9146,687.8974,1.2291,1.2291);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#FFFFFF").s().p("AgLA5QgMAAgBgOIgGhUQAAgGADgEQAEgFAGAAIAjgBQAGgBAEAEQADAEAAAHIgBBXQAAAIgEADQgDADgHAAg");
	this.shape_257.setTransform(345.9146,687.8974,1.2291,1.2291);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f().s("#000000").ss(1.6).p("AgCAsQADgEAHABIAnAEIgVhKIhbCCQgFAGgFAAQgDAAgFgDIgTgNQgGgFAAgHQAAgDADgFIAzhLIg0gvQgGgEAAgGQAAgFAGgFIAfgaQAGgEADAAQAGAAAEAHIAhArIAfgwQAFgHAGAAQAEAAAEACIAkAVQAKAFACAKIAmChQAAAGgEADQgDADgGAAIhfAAQgFAAgEgEQgEgEAAgHIACgjQAAgHAEgEg");
	this.shape_258.setTransform(312.8562,693.0629,1.2291,1.2291);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#FFFFFF").s().p("AhTBoIgSgNQgHgFAAgHQAAgDADgFIAzhLIg0gvQgGgEAAgGQAAgFAGgFIAggaQAFgEAEAAQAFAAAFAHIAgArIAggwQAEgHAGAAQAEAAAEACIAkAVQAKAFACAKIAlChQAAAGgDADQgDADgGAAIhfAAQgFAAgEgEQgEgEAAgHIACgjQAAgHAFgEQACgEAHABIAnAEIgVhKIhaCCQgGAGgEAAQgFAAgEgDg");
	this.shape_259.setTransform(312.8562,693.0629,1.2291,1.2291);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f().s("#000000").ss(1.6).p("ABZheQADADACAHIAPBeIAAAEQAAAJgGAGIhVBNQgIAHgKgBIg0gGQgGgBgEgEQgDgFAAgFIgKiJIgPAAQgNAAgBgOIgEgkQgBgHAEgEQAEgFAHABICtANQAHABADADgAgEAtIA0gnIgJg3IhBABg");
	this.shape_260.setTransform(284.2063,693.5203,1.2291,1.2291);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#FFFFFF").s().p("AAABwIg0gGQgGgBgEgEQgDgFAAgFIgKiJIgPAAQgNAAgBgOIgEgkQgBgHAEgEQAEgFAHABICtANQAHABADADQADADACAHIAPBeIAAAEQAAAJgGAGIhVBNQgHAGgIAAIgDAAgAgagwIAWBdIA0gnIgJg3g");
	this.shape_261.setTransform(284.2063,693.5203,1.2291,1.2291);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f().s("#000000").ss(1.6).p("AhUhtQAEgEAHABICVARQAGAAAEAFQADAEAAAGIAACaQAAANgNACIiUAYQgKAAgBgNIgBgmQgBgOANgBIBrgKIgDhRIhoAEQgHAAgEgDQgEgEAAgHIAAgsQAAgHADgEg");
	this.shape_262.setTransform(258.5923,693.9194,1.2291,1.2291);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#FFFFFF").s().p("AhTBkIgBgmQgBgOANgBIBqgKIgChRIhpAEQgGAAgEgDQgEgEABgHIgBgsQAAgHADgEQAEgEAGABICWARQAGAAAEAFQACAEAAAGIAACaQAAANgMACIiUAYQgKAAgBgNg");
	this.shape_263.setTransform(258.5923,693.9194,1.2291,1.2291);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f().s("#000000").ss(1.6).p("AAaA3QgDADgHAAIgbgBQgNgBgBgNIgFhUQAAgHADgDQADgFAHAAIAigBQAGgBAEAEQAEAEAAAHIgBBXQAAAIgEADg");
	this.shape_264.setTransform(241.7539,687.8974,1.2291,1.2291);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#FFFFFF").s().p("AgKA5QgOgBgBgNIgFhUQAAgHADgDQAEgFAGAAIAigBQAHgBADAEQAEAEAAAHIgBBXQAAAIgEADQgDADgHAAg");
	this.shape_265.setTransform(241.7539,687.8974,1.2291,1.2291);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f().s("#000000").ss(1.6).p("ABlBjIilANQgHABgEgEQgDgEAAgHIAHiEIgbAEQgHABgEgEQgEgEAAgHIAAgwQAAgGAEgEQADgEAHgBIC0gEQAGgBAEAEQAEAEAAAGIASC2QABAOgNABgAgWApIBMACIgDhdIg/AIg");
	this.shape_266.setTransform(221.7855,693.9847,1.2291,1.2291);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#FFFFFF").s().p("AhLBtQgDgEAAgHIAHiEIgbAEQgHABgEgEQgEgEAAgHIAAgwQAAgGAEgEQADgEAHgBIC0gEQAGgBAEAEQAEAEAAAGIASC2QABAOgNABIilANIgDAAQgEAAgEgDgAgMgqIgKBTIBMACIgDhdg");
	this.shape_267.setTransform(221.7855,693.9847,1.2291,1.2291);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},240).to({state:[{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38}]},51).to({state:[]},60).to({state:[{t:this.shape_129,p:{scaleX:1.3127,scaleY:1.3127,x:1007.2889,y:691.7673}},{t:this.shape_128,p:{scaleX:1.3127,scaleY:1.3127,x:1007.0361,y:691.9331}},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80}]},25).to({state:[]},107).to({state:[{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135,p:{scaleX:1.6106,scaleY:1.6106,x:449.7671,y:709.9011}},{t:this.shape_134,p:{scaleX:1.6106,scaleY:1.6106,x:449.7671,y:709.9011}},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130}]},19).to({state:[]},50).to({state:[{t:this.shape_129,p:{scaleX:1.6257,scaleY:1.6257,x:1076.2338,y:572.7157}},{t:this.shape_128,p:{scaleX:1.6257,scaleY:1.6257,x:1075.9207,y:572.9211}},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_135,p:{scaleX:1.6256,scaleY:1.6256,x:1089.2799,y:563.9031}},{t:this.shape_134,p:{scaleX:1.6256,scaleY:1.6256,x:1089.2799,y:563.9031}},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150}]},64).to({state:[{t:this.shape_209,p:{scaleX:1.3335,scaleY:1.3335,x:484.7599,y:623.8412}},{t:this.shape_208,p:{scaleX:1.3335,scaleY:1.3335,x:485.1994,y:624.13}},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166}]},65).to({state:[{t:this.shape_209,p:{scaleX:1.3679,scaleY:1.3679,x:484.0252,y:620.1877}},{t:this.shape_208,p:{scaleX:1.3679,scaleY:1.3679,x:484.4759,y:620.484}},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210}]},65).to({state:[{t:this.shape_209,p:{scaleX:1.2292,scaleY:1.2292,x:343.256,y:699.1068}},{t:this.shape_208,p:{scaleX:1.2292,scaleY:1.2292,x:343.6611,y:699.3731}},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244}]},74).wait(40));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhPtAsTMAAAhYlMCfbAAAMAAABYlg");
	mask.setTransform(550.95,285.925);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag1AKQgGAAAAgHQgBgGAGAAQAVAAAkgDQAogDARgDIAAAWQgTACgnAAIgLABQgdAAgPgDg");
	this.shape.setTransform(1059.1731,379.5542);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("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");
	this.shape_1.setTransform(549.6,383.6108);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag1ALQgEAAgBgGQABgFAEgBQAPgEApgFIAZgDQAPAAALAEQAEACAAAFQABAEgFACQgLAFgSACIgdACIgVABQgSAAgKgDg");
	this.shape_2.setTransform(939.1,386.8586);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AglAJQgBAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgDACgCIADgEIAGgFQAMgGgHADQgQAFgFAAQg1AAgcgEIAAAAQAagFAjgBIA7gCQAFAAABAFQAAAFgEABQgPAHAHACQAFACALAAQAigBARgCQAigGAjAEQABABAAAAQABAAAAABQAAAAAAAAQAAAAAAABQAAABAAAAQAAABAAAAQAAAAgBABQAAAAgBAAQg0AKgeAEIgcACQggAAgTgLg");
	this.shape_3.setTransform(911.4,385.7506);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhYAIQgFAAAAgGQgBgEAGAAIBZgFQA0gCAmAEQADABAAAEQAAADgDAAQgnAFgzABIgLAAIhOgBg");
	this.shape_4.setTransform(878.6923,382.6479);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag2AMQgDgBAAgGQAAgFADAAQAUgGAmgEIAZgCQAOgBAKAEQAGACAAAFQgBAEgEADQgMAFgRABIgcACIgZAAQgRAAgJgBg");
	this.shape_5.setTransform(251.9,384.58);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgmAJQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgDABgCIAEgEIAGgFIAJgEIgEABQgQAFgFAAQgvABghgEIAAgBQAZgFAigBIA9gCQAEAAAAAFQABAFgEACQgQAGAIACQAFACALAAIAagBQAOgBALgBQAfgGAmAEQABABAAAAQABAAAAABQAAAAAAAAQABAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBAAQg0ALgeADQgPACgOAAQggAAgTgLg");
	this.shape_6.setTransform(224.2,383.4607);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhYAHQgFABAAgGQgBgFAGABIBZgFQAzgCAnAEQADABAAAEQAAACgDABQgmAFg0ABIhZgCg");
	this.shape_7.setTransform(191.4923,380.3796);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#DBE9FF").s().p("AgxCXQhagJgyAAIgbgBQjLgGh3gUIilggQhagRhFADQhnAEhugKQh1gKhYgVQhvgfgygKQhUgShJAFIgwADQgWACgWAJQgnAOgTAFQglALgkADQg0AEiQAOQh4AMhFAEQmdAYnLABQh7AApRgHQhZgBhlgLQhAgHhwgQQhhgPgugGQhQgLg3AFQjcATkNASQjkAPg6AGQhKAKgOAAQgdAAghgyQgggxAdADQAWABGegrQGhgtA8ADQFXAOKmAuQJdAiGhgWQCBgHC9gfIFCg3QGJg+D4A4QHiBuH6AfQFxAYJxgJQCsgDELgVIHZgnQJSgwE9AfQIfA0KVgRQIagQKZhBQCdgPA0ADQCcAGh0BWQgdAThbAUQiYAikZAVQg9AEkAAIQjWAGiOASQg9AHh3gKQh9gKhAAGQhbAIiigHQi8gKhdgDQgzgCi7ABQh9ABgrgJQhSgUgngIQhCgNh1AAIhQgEQg9gDheALQhyAOhVABQg1ABiHAFQhzAEhJABQhRAAhrAHQg/AEiHAMQkMAXiIABIiSAAQhXgBg5gHQjFgYhaABQhNgHgggBQg4gCgyAcQhGAohNAAIgDAAg");
	this.shape_8.setTransform(555.4443,378.8724);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#A6DBFF","#D9DBFF"],[0,1],-474.9,6,749.5,-9.4).s().p("AAuAtIhXgKIg7gGQghgKgHgdQgCgJAEgIQAEgJAIgCQAugKBLAHIBFAGQAqAGAZAQQALAHAAANQAAAPgLAGQgcARgtAAIgMAAg");
	this.shape_9.setTransform(438.3917,148.5954);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#A6DBFF","#D9DBFF"],[0,1],-560.1,7,664.3,-8.4).s().p("AhSAAQAAgYAWAAQBWABAwAMQAJACAAAJQAAALgJACQgxAMhVAAIgBAAQgVAAAAgZg");
	this.shape_10.setTransform(523.525,145.6255);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#A6DBFF","#D9DBFF"],[0,1],-1076.4,13.5,148,-1.9).s().p("AADArQg9gBhTgOQgTgDAAgZQAAgYATgEQBTgOA9gBQBSAAA9AVQAPAGAAAQQAAARgPAFQg6AWhOAAIgHgBg");
	this.shape_11.setTransform(1039.825,129.9016);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#A6DBFF","#D9DBFF"],[0,1],-1054.7,13,169.8,-2.4).s().p("AkoBiQgOgFABgRQgBgQAOgEQANgDAagEQAagDANgDIACAAQgxgEgdgQQgDgCAAgEQAAgGADgBQAWgMAggFIA4gGQgfgIgqgPIgcAAQgZABgagBQACAFgCAFQgCAFgFABQgrALgwABQhEAWhMADQhNADhDgSQgIgCABgIQACgJAIAAQAkgCA+gLQBJgMAbgCQAhgIAcgBQgGgJADgMQADgNAKgBQAkgHAvgDIBSgEIBSgEQAvgBAjALQAJADABALIA3gEQAYAAA2gEQAvABAaAVQALAJABANQAPgEAXgBIAlgBQAYAAATAEQASAEAWALQAGADABAJQABAJgFAFIAQgBIA4gEQAhAAAXAIIAogHQAhgDBAgEQAegEA9gLQA2gGAlAIQAEACADADIAIAaQgCAGgEADQgdAdgwAOQAAAKgHAFQg0AhhKgSQgfARg0ABIg5AAQghgCgXgHQgJgEgFgHQgMACgrADQg7AEgxgHQgQgDgDgUQgDgTAMgLIgFAAQgHAAgDgIQgCgGAEgGQgUgEgNgIQgDgCgDgDQgaAMgpACQgYABgugDQAAAIgGAFIgLAHQA1ABAdAaQAFAEAAAJQAAAKgFAEQgZAYgrACIhLgBQgUAAgJgRQgWAUgqABIgDAAQgeAAgigJg");
	this.shape_12.setTransform(1018.1194,141.6001);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#A6DBFF","#D9DBFF"],[0,1],-1124.3,14.2,100.2,-1.2).s().p("AgfAPQgNAAAAgPQAAgOANAAIBMgBIgDAfg");
	this.shape_13.setTransform(1087.825,148.075);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#A6DBFF","#D9DBFF"],[0,1],-956.7,11.7,267.7,-3.7).s().p("AlNBMQgSgEgIgUQgZAIgmgCQgPgBgvgHQhRgLg5gzQgJgIAGgOQAFgMAMgBIAYAAQgBgJAFgHQAFgIALgCQAcgDAOABQAYACAQANQAEAEAAAFQAAAGgEAEIAiACIAtAAQAbABASAFQgJgQAIgSQAHgTASADIBNAGQAdgDAsAGQAoAFAYAGQAGgJALgCIAagEQAOgCAKAGQAFADABAFQABAFgCAEIBUgJQA0gHAdgBQAtgDAkAGQAQACgCARQgBARgNAFQgpATg1AIQAeACAZAEQAFgDAHAAQBogHB+AEQAkABBJgBQA/ACAqAQQANAFAAANQAAAOgNAFQgqARg/ACIhtAAQiCADhkgHQgXgBgFgWQgrAHgngBIgBABQgZAQgtgBIgngBQgVgBgRgFQgPgEgCgRQgCgQALgKQgSgJgQgKIAAAAQgNgCgngIQgMAFgKACQAwAMAAAfQAAAlhFAMQgTADgUAAQgjAAgjgJgAlBgLIAHgBIgKgCg");
	this.shape_14.setTransform(920.2089,144.7227);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#A6DBFF","#D9DBFF"],[0,1],-979.9,12.3,244.5,-3.1).s().p("AAEAiIhrgKQgUgCAAgWQAAgVAUgCQBZgJASgBQA/gCAsAPQANAFAAAPQAAAQgNAFQgmANg0AAIgRAAg");
	this.shape_15.setTransform(943.3,131.1059);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#A6DBFF","#D9DBFF"],[0,1],-927.9,11.6,296.6,-3.8).s().p("AjHAOQgFgBAAgHQABgGAFAAIB5ABIgHgDQgKgGADgMQAEgMAKgBQAQgBAXABIAmACIAjABQAUACAPAHQAHADADAIQACAIgDAFQBFADAxAEQAIABAAAIQAAAIgIABQhJAGhIAAQiAAAh7gUg");
	this.shape_16.setTransform(891.2477,130.4125);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#A6DBFF","#D9DBFF"],[0,1],-819.7,10.7,404.8,-4.7).s().p("AIJCWQgggCgMABQgPAAgMgLIhNgGIhMgEQgsgDghgGQgMAGgSACIggABQgyAAgtgIQgJgCgGgKQgFgIABgLIgDACQgfAJgpgCQgwgGgYgBQgUgCgUgEQhXAchfABQgxAHgigOQgRgIgBgSQgBgSAPgJIgUgMQgmAHg/gCQgdAAgOgDQgagGgMgPQgEgFgBgHQgLADgJAFQgDAFgHADIgQAGIgLAJQgHAHgKgEQhJAbg5gLQgNgCAAgQQAAgQANgDQAMgEAQgCQgFgLAGgMQAGgNANAAQBUABAcACIAMgHQgwgBgrgGQgVgDAAgVQAAgWAVgDQArgGBNgBIAzgCQAeABASAOQAHAGACAJQABAIgEAIQAmAGAjARQgGgPAJgMQAJgMAPADIADABIAIADQAIgFAIAAQA8gFAPAAQAuAAAdANQAzgFBDAJQA3AHAPADQAmAIAbAQQAHADABAIIAigBQAiAAAKABQAYACASAIQAOgFAUgDQA2gIASAAQgZgEgNgEQgMgDAAgOQAAgPAMgDIAKgCQgWgIgRgTIgSgCIhBgFQgmgEgZgMQgKgEAAgLQAAgLAKgEQArgUBVgBQAugBAOABQAhADAZAMQAMAGgCARIAwgFQAzgCAVABQAqABAeAIQAMADABAOQACANgKAHQghATgtAIIAGACQAJAEAAAKQAAAJgJAEIgPAGQAcAIAAAUQAAAfg0ABQghABglgJQgMgDgDgPQgDgOAIgKIgegBIAHABQAMADABAMQABAMgKAIQgNAMgVAFQgNADgYADQAUAFAMANIABACQAtgNA7gCQArgBBAAGQALgLAQAAQBYABA0ANQgRgGgKgLQgkAGgigDQglgEgbgPQgMgGACgRQACgQANgCQASgDAhgCQAlgBAPgCQAegFARAAQAagCAWAEIADABIBWgJQAygDAhALQAGACAAAHQAAAGgGACQggAKgtgCQgUAAg9gIQABALgHAIQAhgDAMAAQAZAAATAHQALAEAAAMQAAAMgLAFQgYAKgfAFQgmAHgdgFIAOAEQAQAFAAASQAAASgQAFQgeALghAEQgIAIgMABIgTABIgZgBgAjzBGQAEAJgEAIQAUgDAQgHIAKgDQgWgEgTAAIgFAAgAApBDQAFACACAGQAEgKALgDIALgCIhCgCIAhAJgAkFA6QgBgOALgFQAegNAsAHIBKAMQA4AEAPACIgLgEQgMgEABgNIgsgGIgtgHQgtgGgrgDQgSAKgZAEQgHAFgKAAIguAAQgcAAgSgEIAQASIABABIAMAAQAoAAA1AQg");
	this.shape_17.setTransform(782.9741,132.9042);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#A6DBFF","#D9DBFF"],[0,1],-756.3,9.5,468.1,-5.9).s().p("AhNAZQgWgDAAgWQAAgVAWgDQBQgMBXAXQAKADAAAKQAAALgKADQg7APg3AAQgbAAgagEg");
	this.shape_18.setTransform(719.775,142.003);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#A6DBFF","#D9DBFF"],[0,1],-559.4,7.2,665,-8.2).s().p("ABCAUIg/gEQhXgEgtABQgMABgDgHQgDgGAKgCQBBgTBLAAQAwABAUABQAnADAYAJQAOAGgCAHQgBAIgRADQgSADgXAAIgVgBg");
	this.shape_19.setTransform(522.4989,118.1308);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#A6DBFF","#D9DBFF"],[0,1],-584,7.4,640.5,-8).s().p("AAAAPIhAgBQgmgBgbgDQgPgBgBgJQABgHAPgCQArgFBWAAQBbgBAoAGQAOADAAAGQAAAIgOACQgcAEglABIhCAAg");
	this.shape_20.setTransform(547,113.9429);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#A6DBFF","#D9DBFF"],[0,1],-535,6.8,689.5,-8.6).s().p("Ag6ANQgIACgJgBQgJgBgEgEIgEgGQgBgEAEgEQAFgGAKAAQBagIBBAMQAMACAAAFQAAAHgMACQgnAGgvAAQgZAAgcgCg");
	this.shape_21.setTransform(497.9796,113.2632);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#A6DBFF","#D9DBFF"],[0,1],-677.4,9,547.1,-6.4).s().p("AGcByQgMgHgDgPQgEgPAHgMIAMgQIgLgBQgaACgogBQg8gBhdAIQgVACgFgKQgGgLAVgDIAvgIQgTgHgFgXIgGABQACAPgOAJQgfAUgxAJQgUAEhCAGQg2AFgdgBQgugCgkgRQgJgEgCgLQgCgKAEgJQgmgCgagFQgRgEgIgHIhaAAIiaABQhjACg4gBQgegBAAgPQAAgPAegBQA1gBC6gHQCUgGBbACIAbgDIA7gDIA7gEQBJgCAiAAQA+AAAsAIQAUgNAdgJIACgBIiNACQiHABhhAFQgWABgDgMQgDgMAVgDQCNgSBngIQBSgGAbgBQBEAAAiANQALADADAGQACAFgEAFQAXAIAHAWQAqADAgASIAIAAQACgKAJgBQAngGApADQAhgJAkATIAIABQAogEAcgBQAJAAADAMQADALgJAEIgdAOQgCAIgGABQgJACgJAAQgaAIgSAFQgcAMggADQgNALgVAGQAqgDANAAQAUAAAEAVQAEAUgPANQgfAZglAGIgSABQgdAAgYgOg");
	this.shape_22.setTransform(640.6125,122.8461);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#A6DBFF","#D9DBFF"],[0,1],-719.3,9.1,505.2,-6.3).s().p("Ah7AaQhCgCgqgLQgSgEAFgJQAEgIAQgDIgBAAQAsgHBIgBIB0gBIBtgGQBCgCAqAIQATAEADAJQADAJgSAGQgqANhLAEIh7ACIgzAAIg/gBg");
	this.shape_23.setTransform(682.7759,143.9133);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#A6DBFF","#D9DBFF"],[0,1],-390.6,5,833.8,-10.4).s().p("AiCAEQgJgBAAgEQAAgFAJgBQCsgSBZAXQAKACgBAGQgCAHgLAAQgfADglAAQhPAAhugMg");
	this.shape_24.setTransform(353.8098,128.1579);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#A6DBFF","#D9DBFF"],[0,1],-526,6.6,698.4,-8.8).s().p("AgNAPIhLgDQgqgDgegHQgJgCABgFQACgHALgBQAfgDAwABIBPACQBqABAvAGQANABAAAGQAAAHgNACQguAGhFAAIg2gBg");
	this.shape_25.setTransform(489.1648,127.1784);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#A6DBFF","#D9DBFF"],[0,1],-452.5,4.6,772,-10.8).s().p("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");
	this.shape_26.setTransform(415.775,137.1607);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#A6DBFF","#D9DBFF"],[0,1],-206.6,2.8,1017.9,-12.6).s().p("AhAAMQgIgBgCgDQgkAAhBgBIhjgBQgMAAAAgGQAAgGAMAAICTABQBaABA5gDQAxgEAYAAQAGgBADADQBtgDBFANQAHACAAAEQgBAEgIAAQiAgEgrABQgYAAg+ADIhAABIgVAAg");
	this.shape_27.setTransform(169.7517,132.7357);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#A6DBFF","#D9DBFF"],[0,1],-162.6,2.1,1061.9,-13.3).s().p("AACANQgrAAhggGQgOAAAAgGQAAgGAOgBQBcgFAvgCQBSgBA6AIQAKABAAAFQAAAGgKABQgxAHhBAAIgagBg");
	this.shape_28.setTransform(125.825,134.65);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#A6DBFF","#D9DBFF"],[0,1],-92.8,1.5,1131.8,-13.9).s().p("AA2BbQgfgLgaghIgdAAQgCAHgEAEQgTAXgmAJQgaAGgoABQglABgXgFQgegGgZgRQgFgDgDgGQgkAIgfABQhPAdhWgHIALhfQCLgEBHAJIAmgDQABgPAIgLQAKgLAQAAIAbgBIABgBIAAAAQAIgHAJAAQAJAAAHAHQgIgIAMgBQABgFAFgDQAFgDAFABQAPACAcgEIAsgHIARgBIgigBQgGgBAAgCQAAgDAGAAIBjgEQAWgFAkACQAHAAAFACIBWgBIApgFIAogGQAigFAWAAQAdAAAaAJIADACQAsgCAYAFIAKADQAjAAASADQAHABAAAEQAAAEgHABQgUADghgBIgFACQgZAJgtABIgCABQgiAagyAOIAUADQAFACAFAFQAFAEABAGQABAHgBAGQgBAGgFAGQgFAFgFABQgbAHgwgEQgaAwhZAJIgWABQgcAAgWgIgAkRASIAMADIAFADIADgBQgCgFgBgEIgMgBQAAADgFACgAA0gJQgWAZgzAGQBegDBNgBQAmgNATgCIADgEQgvgBgkgQIhAgDQgDAHgIAFg");
	this.shape_29.setTransform(56.075,139.4052);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-35.1,0,35.2).s().p("AgBAAIADAAIgDAAg");
	this.shape_30.setTransform(1001.2,351.575);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-186.3,0,31.6).s().p("AoSB9QgCgIAIgDIApgRQAJgEADgDIgBgBQgDgCgCgDIgBgBQgIgDgdgEQgQgCgVAAIg7ANQgjAFgXgIQgYADgqgNQgcAAgSgEQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIABgCIANgCIg9gMQglgIgYgIQgHgCACgKQgtgHgQgSQAHgJAMgCIAXgDQAXgBAsAAQAmgBAbgNQg+gMAfgaQAagWAwgHQALgCAeAAQgCgIAEgHQAEgIAIgBQBVgNBjAGQBTAFBlASQAMADgCAPQgCAQgMgBIhTgGQBtAPAuALQALACgBAQQANABAOgBQAogCAhgHQAUgDAFgFQAKgJgLgUQgFgIAFgJQAEgIAIgBQBjgFA5AOQAlAKAIAIQALAKgVALQgXAOg6gOQhBgQgTADQAIA0hCAQQg3ANhPgKQgdgEhogXIg4gOIg4gOQgagGhpgDQh0gEAEAQQAJAggUAVQgRARgkAHQAsAFAWABIA6ACQAiAFAVAPQAFAEgCAJIAhgHQA4gNAigFQAygGAyACIAPAAIABgBQASgKAgABQASAAAiACQgpgIgWgHQgHgCACgLQACgJAGACIBDAHQAoAEAaABIA6ADQAiAEAVAPQACACABAFIAPADIATgEQA3gNAhgEQAtgGA3ABIAQAAQATgKAgAAIA2ADIAeAAQAagGAaAAQhNgPBFgRQAdgHAuAJIBKAOQA8AFCNgcQCAgZBIAQQAgAHAOACQAdAEASgFIAFAxQg3AghXgFQgqgDhmgVQgJgBAAgMQhEAPgqAFQgrAGhBgIQAeAIBHAYQARAHgCATQgCATgTAAIgvgBQgcgBgTAFQgSAFgJACQgPADgMgFQgXAFgRgDQgBAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAgBAAAAQABgBAAAAQAAgBABAAQAJgHAlgQQAIgHAMgEQgIgGgfgIQgZgHgXgDQgVAGgfgBIg1gDIghgBIgCACQgJAFgLABQgCAKgKAAQgQAAgOAIQAEADAAAEIAVAEIACABIAmACIArABQAaABAQAGQAFACAAAFQAAAGgFACQgSAHgdgCIgwgFIgygCQgHACgGgCIgDgBIgEgBIgeACQgYAAgeAFQgFAOgOAAIgvgBQgcgBgSAEIgbAIQgPADgMgFQgWAFgSgDQgBgBgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAABAAQAJgHAkgQQAIgGAMgFQgKgHgcgHQgegJgTgBQgUAGgggBIg0gDIgigBIgCACQgIAFgLABQgDAKgJAAQgRABgOAGQAEADABAFIAUADIADABIAmACIArABQAZABAQAGQAGADAAAFQAAAGgGACQgSAGgdgCIgwgEIgxgCQgIACgFgCIgDgBIgEgBIgeACQgkABgkAIIgDAAQgGAAgCgHgAgnA2IA1ASQAHACAEAHIAMgFIAJgEQAJgEAEgDIgCgBQgDgBgCgEIAAAAIAAgBQgMgEgagCQgPgCgVAAgAA3ArIACgCIgHAAg");
	this.shape_31.setTransform(993.825,347.4968);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-121.1,0,96.7).s().p("AigAMIgBgBIABgBQBAALACgIQADgHADAAIAkgDQAWgBANgCQAMgCAUgHIAggLQBHgRAoAWQADACAAAGQABAHgEAAQgSAFgggEQgkgDgOACQgOABghALQgcAKgRABQgqAFgWABIgEAAQgkAAgWgRg");
	this.shape_32.setTransform(879.4528,282.34);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-114.6,0,103.3).s().p("AhIAaQgdgJgEAAIgfAAQgQgCgNgIIgJgBQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQgJgBgNgDIgWgHQgRgFgWAKQgfANgGABQgBAAAAAAQAAAAgBgBQAAAAABAAQAAAAAAgBIAegUQASgLAMAAQAdABApAOQABgDADABIAMADIAegOIAQgHQAJgCAHADIAbABIAcACIAFAAQASgDAqAGIAdAFQARAFAKANIAAAFIAegCQAOgCASACIAgAFQAQADATgDIAjgIQAggHAOAEQAAAAABAAQAAAAAAAAQAAABAAAAQABABAAAAQAAABgBAAQAAABAAAAQAAAAAAAAQgBABAAAAQgNAFgWAEIgkAHQgYAHgfgKQgSgGgYgBIgrgBIgDAAQgbgBgSgGQgPAHgWgBIgjgEQgIgBgfgFQgYgFgPADQAXABANACQAUADAPAKQACABABADQAAADgCACQgIAHgKAAQgHAAgHgDgAhxgDQgDAAgBgFIgKAEIAOABIAAAAg");
	this.shape_33.setTransform(886.8929,275.7722);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-117.1,0,100.7).s().p("AA1AWIgxgOQgngIgWgEIgWgDQgMgBgJgEIgBgCIABgDQAQgLAcAEIAtAMQAeAIArAIIAUAEQAKADAIAFQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAABAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgIACgKAAQgNAAgQgEg");
	this.shape_34.setTransform(853.95,278.3327);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-123.7,0,94.2).s().p("AAkAJIgwgBQgeAAgIgBQgWgDgPgJIAAgCIAAgBQAaAEA9gEQA3gDAfAIQACAAAAADQAAAFgCAAQgQAFgYAAIgKgBg");
	this.shape_35.setTransform(606.8125,284.8551);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-133.9,0,84).s().p("AAtAQIgngFIhWgIQgHgBACgJQACgKAFACIBUAEIAnABQAXABAPAIQADABABAFQAAAHgEABQgLADgPAAIgMAAg");
	this.shape_36.setTransform(694.7938,295.0295);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0.1,-130.1,0.1,87.8).s().p("AA6AQIg6gLIg6gFQgkgDgWgHQgBgBAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAQAXgIAjADIA6AGIA6AEQAjAEAXAKQAAAAABABQAAAAAAABQABAAAAABQAAABAAABQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgMADgPAAQgOAAgRgDg");
	this.shape_37.setTransform(696.9,291.2781);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-135.4,0,82.5).s().p("ABrAxQgugCgdgFIhBgNIgkgGQgWgEgNgIQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAgBABAAIAKgEIgvgEQgcgEgSgHIgBgCIABgDQAWgMAhgBQAWAAAjAGQADgJAGgDQAFgCAIAAQAmgPAvAEQApAEAqASQADABAAAEQAAAEgDABQgPAFgZgGQgigJgIAAIgPgBQABAIgFADQgIAFgJACQAWAJAPATIABACIAGABQAgAFAsAAIAigCQAVAAAOAFQADABAAAGQAAAGgDABQgQAGgXAAIgogBg");
	this.shape_38.setTransform(669.5,296.5981);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-143.7,0,74.1).s().p("AhmAHQgEgBABgGQABgEADAAQBjgRBrAcQABAAAAAAQAAAAAAABQAAAAAAABQAAABgBABQgTABgigDQgmgDgOAAIgzAFIgQABQgVAAgOgFg");
	this.shape_39.setTransform(706.4264,304.9438);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-141.7,0,76.1).s().p("AD0BdQgZgEgNgDQgIABgNgFQgPgGgHAAQgJAAgSAEQgSAEgJAAQhPgEglgHQgGgBAAgIQAAgIAGgBQAkgGAfAEQAdADAngPQANgFAJgBQgQgBgfgEQghgEgOgBIg6ADQgNAHgQADQgJACgWACQgUACgKgBQgQgCgNgIQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIACgEQAKgIAPgEIAagFIgpgCQgmgBgJgBQgZgEgQgPQgXAKgfADQgTACgkAAQg2AAg3gfIgBgDQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAABAAQAjANAXAGQAgAHAcgDQAPgCAcgHQAdgHANgCIgHgLIgCgHQgjADgUgRQgDgDABgGQABgGAEAAQApAEAigKIAbgHQAPgEAMABQAwAEA/AjQABABAAAAQAAAAAAABQABAAAAABQAAABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgWASgmgQQgwgUgNABQgJAAghAIQATAXAjADQAUACAngBQAVABArABIAYABQAOADAJAKQADADAAAGIAZABIBFACQAoADAcAOQACABABAFQAgACAOAOQADADAAAGQAAAFgDADIgBABIAWABIAdgBQARAAALAIQASgKAYgBQAUgBAIABQAPACAMAIQADACgBAGQgBAGgDABQgKAFgQAAIgbAAQgXABgRgCIAAABQgHAGgIABIgQABIgXABIgGAAQgLAAgHgBg");
	this.shape_40.setTransform(648.5861,302.92);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-123.9,0,93.9).s().p("ABJA7IgxgPIgwgNQgEABgDgBIgDgBIgEgBIgcACQglABgfAIQgIACgBgJQgCgIAGgDQgNAEgSAAIgggBIgigBQgTgCgPgGQAAAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAAAgBQABAAAAAAQAMgBAaACIAnAAIAdgBQARAAAMAEIABACQABAAAAABQAAAAAAABQgBAAAAAAQAAABAAAAIAhgOQAIgEAEgCIgCgBQgDgCgBgEIgBgBQgKgDgZgDIgigCQgxALgJABQghAEgWgIQgHAAgPgEQgPgEgHAAIgcgBQgRgBgMgCIgBgBQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAAAQAdgGAlACIAXAAIABAAIgJgBIAAgBQAsgHA2AAQApgKAdgDQApgGA0ABIAOAAIABAAQARgKAeAAIAxADIAcAAQA6gPBMARQAuAKBSAfQARAGgCASQgCATgSAAIgsgBQgbgBgRAEIgZAIQgOADgLgFQgWAFgQgDQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAIAQgJQgmgGgRgBQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAAAgBQAAAAAAAAQANAAAcgEQAagDARACQAIgFAJgEQgHgEgLgEIgSgGQgZgHgVgDQgTAHgdgBIgxgDIgggBIgBABQgJAGgKABQgCAJgJAAQgPABgNAHQAEACABAEIATAEIABABIAkACIAoABQAYAAAPAGQAFADAAAFQAAAGgFACQgRAGgbgCIgtgEIgqgCIAgAHIA2AJQAhAEATAKQABABAAAAQABAAAAABQAAABAAAAQAAABAAABQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAAAQgUgCgdgIgAkLgWIAKgBIgVgCQAHABAEACg");
	this.shape_41.setTransform(650.5608,285.1109);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-78.6,0,139.3).s().p("AAAAFQgwgBgTgEQgBAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAQAagBAyACIAegBQARAAAMACQAAABAAAAQABAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBABQAAAAAAAAQgOADgUAAIgiAAg");
	this.shape_42.setTransform(717.5688,239.6583);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-75.3,0,142.5).s().p("AhugBIAAAAQBugMBtAPQABAAAAAAQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAAAQAAAAgBAAQgfACgiAAQhGAAhUgIg");
	this.shape_43.setTransform(719.125,236.4857);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-78.1,0,139.8).s().p("AAAAFIg5gFQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIA5gEQAkgBAWAHQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQgPADgVAAIgWgBg");
	this.shape_44.setTransform(758.025,239.1798);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-91.3,0,126.6).s().p("AhmAFQgEgBABgEQAAgCAEgBQBlgMBpAUQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAIgBABQgUABghgCIg0gCIgzAEIgRAAQgUAAgOgDg");
	this.shape_45.setTransform(793.7219,252.4204);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-109.1,0,108.8).s().p("AA/AXIg3gKIg9gKQgngFgXgGQgHgCACgHQACgHAGABIA+AGQAmADAXABQAqAAAMACQAgADAUAJQAEADAAAFQAAAFgEACQgPAIgWAAIgRgBg");
	this.shape_46.setTransform(800.9015,270.2908);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-127.4,0,90.4).s().p("AhBA3QgvgBgdgFIhBgJIglgFQgVgDgNgHQgBAAAAAAQAAgBAAAAQAAAAAAAAQAAgBABAAQAFgCAFgBIgwgEQgbgDgSgFQAAAAgBgBQAAAAAAAAQAAAAAAgBQgBAAAAAAIACgCQAVgIAdgBIgOgCIgBgCQAAAAABAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQAhgGAiABIARAAIAQACQAfgJApABQAzgMAagEQAvgGAtACIAPAAIABgBQARgKAeABQASAAAgACIAcABQAugMA4AIQAtAGA6AUIAAA+QgVAAgPAEIgZAHQgPADgKgFQgVAGgRgEQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQAKgJAhgOQAHgGAMgFQgIgGgcgHQgfgIgOgCIgBAAIABADIgCACQgcAGgwgHIgUgCIgggBIgCACQgHAFgLACIgBADIARAAIAnABQAXABAQAFQADABAAAFQAAAFgDABQgRAEgWgCIgngDIg2gFQACADAAAEIAUADIACABIAjACIAoABQAZABAOAGQAGACAAAGQAAAFgGACQgQAHgbgCIgtgFIgvgCQgHACgEgBIgDgCIgEAAIgCAAQACACgBADQAAAEgCAAQgQAFgWAAIgogBgAiwAJQAWAHAPAPIABADIAzADIAEgDIAmgQQAJgEADgDIgBgBQgEgCgCgDIAAgBIgPgEQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAAAQgNAEgSgDIgfgFQgqAJgPABg");
	this.shape_47.setTransform(1049.4,288.627);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-89.7,0,128.1).s().p("AiOAIIABgBQBAAIACgGQACgFAEAAIAkgCIAigCQAMgBAVgGIAggHQAtgHAgADIgCATIgggBQgUgBgNABQgNAAghAIQgdAHgRABQgqADgWABIgFAAQgjAAgWgMg");
	this.shape_48.setTransform(1072.9167,250.8587);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-147.4,0,70.4).s().p("AgBABIABgBIAAAAIACABg");
	this.shape_49.setTransform(54.275,308.625);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-82.3,0,135.5).s().p("AgCAAIAFAAIgBABg");
	this.shape_50.setTransform(122.175,243.475);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-82.3,0,135.5).s().p("AgCAAIAFAAIgBABg");
	this.shape_51.setTransform(740.775,243.475);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-112.1,0,105.7).s().p("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AAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAgBQAAAAAAAAQABgBAAAAQALgIAOgEIAagFIgpgCQgmgBgIgBQgZgEgRgQQgOAHgVAEIABgWIAVgEIgHgLIgDgHIgKABIADgeQAOgBAQgEIAbgIQAQgEALABQAwAEA/AjQABABAAAAQABAAAAABQAAAAAAABQAAABABAAQAAABAAABQAAABgBAAQAAABAAAAQgBABAAAAQgWASglgQQgxgUgNABQgJAAghAIQATAXAjAEQAVACAngCQAVACAqAAIAaABQANADAJAKQADAEAAAFIAZACIA6ABQA2gGAgAFIAWACQAMgOAYgGIhSgPIgkgGQgXgEgNgJQAAAAAAAAQgBAAAAgBQAAAAABAAQAAgBAAAAIAKgEIgugFQgcgEgSgHIgBgDIABgCQAVgNAhAAQAXAAAiAFQADgIAHgDQAEgCAJAAQAlgPAwAEQAqAEAqASQADABAAAEQAAAEgDAAQgQAGgZgHQgjgIgGAAIgPgBQAAAIgFADQgIAFgKACQAXAJAPATIABADIAGABQAgAEAtAAIAigBQAUgBAOAGQADABABAGQgBAFgDACQgPAGgVAAIgmgCQAUAFARABQAJABASgCQARAAAJAKQAFAHgEAJIgEAFIAQAIIAgANQAVAJAIARQAMAAAUgBIAFgGIgPAAIAAgBQAPgLAUgCQAKgCAPABQApADAUAKIAsADQAZABASAGQAAAAAAAAQABAAAAABQAAAAAAABQABABAAAAQAAABgBABQAAABAAAAQAAABgBAAQAAAAAAABQgcAHgggEQABADAAAFIASAAIAQgCQAJAAAHABQAOgDASgBQAtgBAlAHQgHgEgDgKQgEgKgCgDQgEgGgGgCIgFgEIAAgFIASABQAEABAAADQAFATAJAIQAHAEATAFQAJACASAAQANgHAXgBIAkgCIAlgHQAXgFAOACQAagGARABQALABASAIIAcAPQASAKAxAPQAOAAAHADIADADQBggBA4gGQApgEATgBQAhgCAZADIABAAQANgDARACIAeAEICZAdQAjAABEAEQAHAAAjgGQAdgEAPAEIAFAAIAEAAIBZADQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAAAAAQgVAAgnADI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CgNgNgFQgJgDgUgDQgkgGguAAQg2AEgcgBQgxAAgfgRQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAAAABgBIABgDIABgBIAAABQADAGAygFIA7gIIA/gEQAlgCAZACIAVADQAMgMAVgEQASgEAPACIBHAKQAJAAASgBQARgBAIAJQAHAFgFAHIgFAFQANAGADAAQAiALAFACQAXALAGAUQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAIAAAAQAZABASADQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAABgBABQAAAAAAABQAAAAgBABQAAAAgBAAIgbADQAAAAAAABQAAAAgBABQAAAAAAABQgBAAgBAAQgZAQgXgHIgFgBQgHAJgZACIgJACIAAAFQAKAAAvAFQAQABAUgCIAjgGIAIgBIgSgFQgHgBACgJQACgIAGACIA+AGQAlAEAZABIA2ACQAhAEATAMQAFACgCAJIAfgHQA5gLAbgDIAPgBQg8gLgugEIAAgBQA5AFA4AKIABAAQAigCAkAAIAPAAIAAAAQASgIAdAAQASAAAhADIAcAAQBGgQBoAaIA9AFIA7ADQAjACAXAJQAAAAABAAQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAABQAAAAAAAAQgBABAAAAQgBAAAAAAQgXAFgkgEIg5gIIAaAIQAHADADAFQAOACAMADQADACAAAEQAAAEgDABQgOACgKAAQgFALgNAAIgsgBQgbAAgRADQgVAFgKACIAKACQAEABAAADQAAAFgEAAQgQAFgWgBIgogBQgogBgjgDIhCgJIgngFIgNgBQgIACgEgCIgDgBIgEAAIgbABQgnACgeAGQgHACgCgIQgCgGAIgDIAjgMQgNgCgFgDIgCgBIACgCIAWgGQgIgCgXgCIgigCQgzAKgVABQAeAJAcAKQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQgWAMglgLQgxgPgNABQgRACgZAEQATAQAjACQAUACAngBIBAABIAZABQAOACAIAHQADADABADIAYABIBFACQApADAbAKQADABAAADQAhABANAKQADACAAAEQABAFgEACIAAAAIAVABIAagBQARAAAJADIAUgCQAKgCARgBIAIAAQBBgFBMACIAKABQAPgEASAAIAhAEIBggCQA4gBAoADQBmAIgkAjQAEgDA6ABQgJgDgEgHIgFgIQgDgDgFgBQgCgDgCAAIAAgDIAPABQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAEALAHAFQAGADAPACIAXABQALgEARgBIAegBIAfgDQAUgEALABQASgDARAAQALABAOAFIAWAJQAOAGApAJQAOAAAEACIADACQBUgBAqgEQBFgFAcADIABAAQALgDAmAFIB/AQQAcABA4ACQAGABAdgEQAYgDAMADIAOgEQgxgIAIgPQgrgDgwAEQhAAFghgGQgIAIgKgFIgYgKQgGAAgFgEQgPgGgNAAIgbAAQgQAAgJgFQgGgDAAgFIgLgCIgzgKQgQgCgTAEQAAAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAIABABIgDACQAiACAaALQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAABIgFABQAAADgDABQgMAFgRAAIgfAAIgbAAIgcgEIAAAAIgKABQgQABgRgEQgIgBgUAAQgRgBgKgCQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQANgDATACIAgABIAQAAIASgCQgBgFACgDQAEgFAFAAIAIAAIgqgDIgagDQgRgDgKgDIA5gDIANABQAdACAPgBIANgBQAGAAAGADQAPgEAXABIAmADIApAGIAIgBIAJABIAdAAQAOAAAIgIIADgBQA0gLAzAIIBEALIASACQAJABAGAFQABAAAAABQABAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAABgBAAQgIAEgMAAIgXgCIgPgCQgMADggAEIgYADQgLACgIAHQAbABBPgIQAtgEAxAFQAbgOAmgGQAJgBAgAAQgBgDABgGIhAACQgmgBgYgHQAAgBgBAAQAAAAAAAAQAAgBAAAAQAAAAgBgBIABgBQABAAAAgBQAAAAAAAAQABAAAAAAQAAABAAAAQACADBMgFQAIAFAJABIAiABQADgFAIgBQCZgTDWAhQAMABgCANQgCANgMAAIhTgGQBnAMA0AKQALACgBAMIAbAAQApgBAggGIAOgCI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gBAAAAAAQAAAAAAAAQAAAAAAAAQAAgBABAAIAVgIQgjgBg/AGQhFAIgNAAQhdABhJgOQgUgDgigBQgogCgOgDQANAEAHADQADADAAAEQAAAGgDACQgaAIgpgEQgugFgWgBIgBAAQgwAggUgIQgLgFAAgHQgrAGgagRIgOAAQgsABghgBQgNAIgfADQgoACgpgFQgUgDgqgMQgogLgVgCIgBABQgDACgFAAIgJAAQgkAHgQABQg6AFgOgBQgGACgEgEIgQAEQgGAKAAAGIACAEIAfABQAOgCAUABIAfACIAZAAIAbAAIAagGIAbgCQAOgBAKAFQAEABAGACIAQAGQAVAAAOAGQAegEAPAGQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIAKAAQAeAAAJABQAUADAQAJQADACAAAEQAAAEgDABQgQAKgUABIgngCIgUgBQgMAFgLABQgEACgGgBIgEAAQgHAFgGADQgPAGgagCQAAADgCADQgJAKgUgDQgJgBgVgIQgKgDgNgCIgYgDQgOADgSAAQABAFgCAEQgEAGgDABIAXADQAXgKAPAAQAaAAAqAKQABAAABAAQAAgBABAAQAAAAABAAQAAAAABAAIAMABIAegJQAWgIAKAEQASgBAkADIAGAAQAVgCAnAEIAeAEQARAEAKAJQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABIAdgCQARgBAvAFQARACATgCIAjgGQAigGAMADIABACIgBACQgNAEgXADIgkAFQgXAFgfgIQgSgEgZAAIgqAAIgCAAIgCgBQgWAAgXgFQgPAFgVgBIglgDIgmgEQgYgEgPACQAxACAWAKQABAAAAABQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgMAHgUgFQgegGgEAAQgoABgTgIIgJgBQgBAAAAAAQgBAAAAAAQAAgBAAAAQgBAAAAgBQgIAAgNgDIgWgGQgQgCgWAGIAhAEIAkAFQATAEANAIQAEADAAAFQgBAEgFACQgPAEgVgCIgkgGIADABQAAABABAAQAAAAAAABQAAAAAAABQABAAAAABQgBAAAAAAQAAABAAAAQAAAAgBABQAAAAAAAAQgTAEgdgFIgwgKIgggGQgPACgMgBIgnABIAIADQAdABATAFQABAAAAAB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AAQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAQAHACAOgBQANAAAIABQAEABAHAHIAKALQAJAGARAAIAaAAIAFgGIgPAAIAAgBQAQgIATgCQAMgCANABQAqAEATAGIAsADQAZACASADQAAABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAABgBAAQAAABAAAAQAAAAgBABQAAAAAAAAQgZAGgjgDQABADAAADIASAAIAQgBQAJgBAHABQASgDAOAAQArgBAnAHQgHgEgDgHIgGgMQgEgEgGgCIgFgEIAAgDIASAAQABAAABABQABAAAAAAQABABAAAAQAAABAAAAQAFAQAJAGQAHAEATAEQAJABASAAQANgFAXgCIAkAAIAlgGQAXgEAOABQAWgEAVAAQALAAASAHIAcANQAUAIAvAMQAOAAAHACIADADQBfgBA5gEIA8gFQAhgCAZAEIABgBQANgDARABIAeAFICZAXQAjAABEAEQAHAAAjgFQAdgFAPAFIAFAAIAEAAIBZABQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAAAQgBABAAAAIg8ACIAoAGQAXAEAPAEQAKACAFAJQAVADAtABIASABQAQgIAegFIAXgDIg0gJIgRAAQgFgBAAgEQAAgEAFAAIAUgDQAMgCAIABIAFABQArgFAegBIAJgMIgJgEQgDgBgFgIIgJgBIgBAAIgCABQgQABgbgCQgggEgKAAQghgBgpADQhTAGg/gHQhRgJhGAHQgmADgUABQgjAAgZgFQgEAFgGACQgGAAgFgCIgegPQgHgBgGgFQgTgHgPgBIghABQgUgBgLgHQgGgEAAgHIgOgDQgogLgVgCQgSgCgZAEQABADgCACIABABIAAABIgEACQAsADAdAPQADABAAAEQAAADgDACIgGACQgBAFgCABQgPAGgVABIgkAAIgigBQgTgBgOgDIgBAAIgMABQgTABgUgEQgKgDgYAAQgWgBgLgDQgDgBAAgDQAAgDADgBQAPgFAYADQAfACAHgBIATAAQAQgBAFgBQgBgGAEgGQAEgFAHgBIAKAAIg0gFIgfgEQgWgDgLgGIAZgBIg8ABIgCACQgCgJgHgGQgIgGgNgBIg2gBQgSgCgTACIh8AAIABgGIAbgBQAUgBAcgFIAxgIIAOgBIgbAAIgnAAQgXgBgQgEQgFgCAAgFQgBgHAGgBQAQgCAcgBIArgDIAbgDQARgCAKACIASgFQgTAAgQgGIgegHQgQgDgWABIgmADQgbACgagCIgFAAIgDgBQgfgCgxgIQAAAAgBAAQAAAAAAgBQAAAAABAAQAAgBABAAQBTgEA4gHQgPAAgagDIgpgEIg6gDQgjgCgXgEQhJgQglgBIgSABQgRAFgegCIg/AHQglACgagDQgGgBgBgHQABgHAGgBIAJgBIAAgBQAogbA0AAQAVgNAngDQAWgCApgBQAogCAPABQAjACANAQQA0gFAQAAIAHAAIASgCIAtgCQAcgCASgCIAMgBIAAgHIgBgCQgBAAAAgBQAAAAABAAQAAAAAAAAQAAAAAAAAIgCgBIgBAAIgPgBQgdgCgZgNIgVgDIgUgBIgBABQgMAKgVAEQgJACgcADIglACQgVAAgNgJQgEgCABgEQACgDAEgBIAfgCIhrgCQgEACgOAAIgUgBIglACIgTAJIgBAAQgiANgcgFQgUADgYgBQgRgBgdgEIAAgCQAxACAXgEQAngHATgZIgBAAIgBgCQgPgFgLgFQgagGgUACQgXAAghAFIg3AIQhWAMhMgMQgUAEgRACQgLABgWgBQgVgDgKACQgJABgzALQglAHgZgDIglgFQgUgEgQACQgsAFgVABIgNAAIgBgKIAXgBQBFgHAvAHQAkAHAggHQAAAAAAAAQgBgBAAAAQgBgBAAAAQAAgBgBAAIAAgHIgFgBIgMAAQgDgBgEgBIgdgDIhMgCIhLgCIABgQIAXgBQgOgEgEgLIgDgFIABgRQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQAEAQAKAFQAHAFASACQAKACARAAQAOgGAWAAIAkgBIAlgGQAYgEAOABQAYgEASAAQAMABASAGIAcAMQAUAJAuAMQAQAAAHADIACABQBZAABAgEIA7gFQAhgCAaADQANgDARABIAeAEICaAXQAiABBEADQAHAAAkgEQAdgFAPAFIADAAIAGAAIBYABQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAIg8ACIAnAGQAaAEAOAEQAIACAFAKQAVADAuAAIASABQAPgIAfgEQAIgBAOgDIg0gJIgQgBQgFAAAAgDQAAgFAFAAIAUgCQAMgCAHABIAFABQArgFAfgCIAJgLIgJgEQgEgCgEgGIgJgCIgBAAIgDABQgQABgagDIgrgDQgggCgpAEQhTAGg+gHQhPgIhIAGQgnAEgVAAQghABgagGQgIALgOgGIgdgOQgJgCgEgFQgUgHgOgBIghABQgTAAgLgIQgHgDAAgIIgOgCQgogKgUgDQgTgCgZAEQABADgBACIAAABIgEADQAsACAdAPQADABAAAEQAAAEgDACIgGABQAAAFgDACQgPAFgUABIglgBIghAAQgUgBgOgDIgBAAQgFABgGAAQgTABgWgEQgJgDgYAAQgWAAgLgEQgBAAgBAAQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAgDADgBQAPgEAXACQAgACAHAAIATAAQARgCAEgBQgBgGAEgFQAEgGAHAAIAKAAIgzgGQgdgCgQgDQgbgFgJgQQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAgBIACAAQAJAFAuAEIAqAFQAkADASgBIAQgBQAHABAHADQATgGAbABIAvAFIAwAIQASgEAaACIArgKQBAgPA+ALIAoAIIApAHIAWACQAMADAHAGQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAAEgDABQgLAFgPAAIgbgDIgSgCQgLACgqAHIgdAEQgOAEgIAIQAlABBbgKQA4gGBVAJQAzAFBjgGQAAgBAAAAQgBgBAAAAQAAgBABAAQAAgBAAgBQAJgIAPgEQAIgBATgBIAiAAQgBgLgNgCQgNgEgRgBQgkgEguAAQg1ADgcAAQgygBgegMQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIABgCQAAgBABAAQAAAAAAAAQABAAAAAAQAAAAAAABQACAEAzgEIA7gFIA+gDQAlgCAZACIAWACQALgIAVgDQASgDAQABIBHAHIAbgBQAQAAAJAGQAAAAABABQAAAAABABQAAAAAAABQAAAAABABQAAADgCACIgFADIARAFQAfAGAHADQAXAIAHAOIgBACIANADQACABABADQABADgDACQgaAKgXgEIgFgBQgHAHgZABIgIABQABAIgIAEQAXAHANAMIAlgJQAFgBAGADIAKAGQAOAGAVABIAYAAQAOABAGAHQAFAFgFAFQgIAJgVgCIgBAAIAgAGQAxAJAlgBIAkgDQAVgDAOAEQADABABADQABADgCADQgKAJgQAEQgJACgVACQgjACgugFQgUgCgqgLQgngKgXgBIgBAAQgEACgEAAIgGAAIgDAAQgjAGgRACIgkACQgVACgPgBQgGABgEgDIgPAEQgGAIAAAGIABAEIAhABQAVgEAsAFIAzAAIAagFIAagDQAPgBAJAFIAKACIARAGQAUAAAPAGQAegEAPAGQAAAAABAAQAAAAAAABQABAAAAABQAAAAAAAAIAKABIAnABQAVACAPAJQADABABAEQgBADgDACQgQAJgVABIgmgCIgUgBQgKAEgOABQgDACgGgBIgEAAQgHAGgGABQgPAGgZgCQgBAEgCABQgKAJgTgCQgHgBgYgHQgJgDgOgCIgWgDQgPADgTAAQACAEgDAEQgCAEgFADIBJAJIAjAEQAUAEANAHQAEADgBAEQAAAEgFABQgPAEgVgCIglgFIhqgMQgUAGgYgBIgoAAIADABIAgAMQATAGAPAAQAygEAPABQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAgBABQgWAFgrABIgZAAQgOgBgKgEIgigLQgSgFgRAFIgMADQgBAGgEABQgMAIgaACQAZABATAGIAXAJQANAGAHAHQALgFAKgCIAegEQAfgBAKADQAYAKAKABQAEABAsABQAhAAAPAKQARgDAXACIAnAEIAZAEIAXAEIALgCQAFACAGAAIAkAAQAQAAAKgMIADAAQA/gPA+ALIBSAOIAWADQAMADAHAFQAAABABABQAAAAAAABQABAAAAABQAAAAAAABQgBADgCABQgLAGgOAAIgcgEIgRgCQgNADgpAHIgdAEQgNADgKAJQAcABAkgDIBAgHQA5gGBVAIQAzAGBkgHQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAOgOAkgBIAiAAQgBgLgMgCIgfgFQgjgEgvAAQg1ACgdABQgxgBgfgMQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIAAgCIgtAAQgFACgFgGQgfACgTgIQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQABAAAAAAQAAgBAAAAIg2gGQgngEgdgGQgVABgrAAQgsAAgqgMIgJAAIAFgBIgUgFIgBgCQABAAAAAAQAAgBAAAAQAAAAABAAQAAAAABAAIAeAGIAJgBQAbgGAHAAIASABIARAAIAdgCQARgBALAGQACABAAAEIAkgEIgHgHIgDgEQghACgWgKQgCgCABgEQABgDADAAQApACAjgGQAngGAOABQAwACBAAUIACADQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAgBABQgWAKglgJQgxgMgMABIgrAEQAUAOAjACQAUABAngBIBAABQAXABAIABQgLAFgDAKIgnABIgJACIBqgDIABAAQATgLAhACIADAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAIADgBQgtAAgYgMIgBgBIABgCQAUgJAigBQg8gFgSgDIgBgCIABgBQAjgMBNAHQAFgIARAAQAvgLA8AHIAAADIAlABQAMgHAZgBIAmACIAEAAIghgDQgEAAgEgDIgqADQAAABgBAAQAAAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQABgBAAAAQAKgFARgDQgUgBgbgFIgsgGIAAAAQAWABAigBIA5gDIACgBIAGABIAMAAQAKgGAPgCIAagBIAPAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAABAAIAqACIBIAAQANgEAlgDQAsgDAZAGIANADQAUADAvABQArABAYAFQAAABABAAQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAQgiAIgfAAIALADIA8gBQASgBBAgLIgugIIg+gJQgdgBgOgEIgCgCIABgBQARgHAbACQAJABAlAHIBJALQAcADAHADQAXAAAVAIIAcAMIAjgBIAigCIAggHIAhgHQBHgKAnAOQAEABAAAEQAAAEgEABQgRADghgDQgjgCgPACQgOAAgXAGQAZAJAIACQAOADArgBQAmACAMASIAnABQAtgDAVgEQgPgDgPgGIgBgCQAAAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAIAqAJIAQgDQAJgCAHAAIASABIARABIAcgDQARgBALAFIABABIAlgEIgGgHQgDgDAAgDQgiADgVgLQgDgBABgEQACgFADAAQAqADAigGQAogIANABQAzADA8AWQABABAAA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IgqAFQATANAjACQAUABAngBIA/ABIAaABQAOACAJAFQADADAAADIAZABIBEABQApACAcAIQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAgABAPAJQADABAAADQAAAEgDACIgBAAIAVABIAdgBQAQAAALAEQAUgFAXAAQAmgCARAHQAFACgEAFIAJAAIABgBQARgKAiACIADAAIABgCIACgBQgtABgYgLIgBgCIABgBQAWgJAjgBIADgBQA2gFA1ACIAigFQgzgFgZgFQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAABAAQBdAAAfACIAEAAQANgIAYAAIAmABIAIAAIglgCQgKgBgCgJQgVgBgfgDIgzgHIAAgBQAXADAigCIA4gDIAUAAIAAAAQAKgFAPgCIAaAAIBDgCIBEAAIAbABQAOACAMAFQADAEAAADIArAAQArABAfACIAjAGIA7gBQAVgBAdgFIAwgIQAqgFAgAMQAiALAJAJIAVgHIAegEQAeAAALADQAWAIALACQAOADArAAQAmACAMAPIAnABQA7gEASgEQAbgGAHAAIAjABIAdgCQARAAALAFQACAAAAAEQAAADgCACIgCAAIBWADIAwAAQAdAAASAGQAEACAAAEQABAFgFACQgUAEgggDIg0gGQgtgEgpgKQgUAFgcgFQgUgEgVACIgpAEQgUADgcgBIgxgCIABACIAAAAQAPAAAVAEQAnAJAWABIAagBQAPAAAKADQAAABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBAAQAAABgBAAQgRAHgZgBQgNgBgdgFQgvgHgMAAQgegBgaAMQgEACgEgFQgCgEAEgDQANgHASgFQgSgJgLgBQgZgFgjgFQgXgDgjABIg6ACQgDADgFAAQgMABgTgKQgYgKgIgCQgTgEgXAAIgpADQgtAChBAAQACAEgGADQgMAEgUgBIghgFQgsgDgeAAQgiABghgBIgTAFQABAEgDADQApAGAXAPIAAABIgBABQgxgBhAgFIgqAAQgbAAgPgGIgEABIgDABQgJACgLAAQAeAHANAMIACADQAjABASACQAUACAcgBIAxgCQA9gBAfACQA2ADAkANQABAAAAAAQABAAAAABQAAAA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gMgNABIgqAEQATAOAjACQAVABAmgBIBAABQAYABAIABQgLAFgEAKIgmABIgJACIBpgDIACAAQASgLAhACIAEAAQgBAAAAgBQAAAAAAAAQAAgBABAAQAAAAABAAIABgBQgtAAgYgMIgBgBIABgCQAUgJAigBQg9gFgQgDIgBgCIABgBQAjgMBMAHQAFgIASAAQAugLA8AHIABADIAlABQAMgHAZgBIAmACIAEAAIghgDQgFAAgDgDIgrADQAAABAAAAQgBAAAAgBQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAgBABAAQAAAAAAAAQAAgBAAAAQALgFAQgDQgTgBgbgFIgsgGIAAAAQAWABAigBIA4gDIADgBIAFABIANAAQAKgGAOgCIAagBIAPAAIAAgCIABgBIArACIBIAAQANgEAkgDQAtgDAYAGIAOADQATADAwABQArABAXAFQABABAAAAQABAAAAAAQAAABAAAAQABABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQghAIggAAIAMADQAeAAAdgBQATgBA/gLIgtgIIg/gJQgdgBgOgEIgCgCIABgBQARgHAcACIAtAIIBKALQAbADAHADQAYAAAUAIIAcAMIAjgBIAjgCQAWgDAqgLQBHgKAnAOQAEABABAEQAAAEgFABQgQADghgDQgjgCgPACQgMAAgaAGQAZAJAJACQANADArgBQAnACAMASIAmABQAtgDAWgEQgPgDgPgGQAAAAgBAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAAAAAIArAJIAQgDQAIgCAHAAIASABIARABIAdgDQARgBAKAFIACABQAYgDANgBIgHgHIgCgGQgiADgVgLQgDgBAAgEQACgFAEAAQAqADAhgGQApgIAMABQAzADA9AWQAAABABAAQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQgBABAAAAQgWAMgmgKQgvgNgOAAQgNABgdAEQATAOAkADQATABAnAAIBAAAIAZABQAOACAJAGQACACABAFIAZABIBEABQApADAcAIQAAAAABABQAAAAABAAQAAABAAAAQAAABAAABQAgABAPAJIADADQAMgIAUgDQARgDAPABIAkAEIAjAEIAbgBQAQABAJAFQACACABADQAAADgBACIgFAEIAQAFIAlAJQAWAIAHAOQAOgIAbACQAfACAOACQAaAEAOAMQAEACAAAFIASAAIAfgBIAhgCQAbgBAcACIgCAeQgigEglABQgzAFgZAAQgsACgegOIAAAAIgqAAQggAAgQgHIgCgCQgGADgRAAIgIABQABAJgHAFQAXAIAMAMIAmgJQAEgBAGADIAKAGQAPAIAVABIATAAQAMAAAGADQAnADAfABIA2ACQAgADAUAJQADADAAAEQAAAFgDACIgPAEIAFACQADAAABAEQABAEgDACQgJALgQAEQgJADgVACQgpACgogFQgUgDgqgMQgogLgWgCIgBABQgDACgFAAIgJAAQgjAHgRABQg6AFgOgBQgGACgEgEIgPAEQgGAKAAAGQAAABAAAAQAAABAAAAQABABAAAAQAAABAAAAIAgABQANgCAVABIAgACIAYAAIAaAAIAbgGIAagCQAPgBAJAFIAKADIARAGQAUAAAPAGQAdgEAQAGQAAAAABABQAAAAAAAAQABABgBAAQAAABAAABIALAAQAeAAAIABQAVADAQAJQADACAAAEQAAAEgDABQgQAKgVABIgmgCIgUgBQgNAFgLABQgEACgFgBIgEAAQgIAGgFACQgPAGgagCQAAADgCADQgKAKgTgDQgJgBgWgIQgJgDgOgCIgXgDQgPADgSAAQACAFgDAEQgDAFgEACIAYADQAXgKAOAAQAaAAArAKQACgBADAAIAMABIAegJIAQgEQAIgCAHACQATgBAkADIAFAAQAWgCAnAEIAWADIgBARIgOgDQgOAFgWgBIglgDIgngEQgXgEgPACQAxACAWAKQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgMAHgVgFQgdgGgDAAQgVAAgKgBQgRgBgNgFIgJgBQAAAAAAAAQgBAAAAAAQAAgBAAAAQgBAAAAgBQgIAAgOgDIgVgGQgQgCgWAGIAhAEIAjAFQATAEAOAIQADADAAAFQAAAEgFACQgPAEgVgCIgkgGIADABQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQgBAAAAABQgBAAAAAAQgSAEgdgFIgxgKIgfgGQgPACgMgBIgnABIAHADQAe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IAYAAQAOAAAHAIQAEAFgEAFQgJAJgWgCIAAABIAgAFQAxAJAlgBIAkgDQAWgDANAEQAEABAAADQABADgCACQgJAKgRAEQgKACgUACQgmACgrgEQgTgDgrgLQgngJgXgDIgBABQgDACgFgBIgGABIgDAAQgiAHgRAAIgkADIgkACQgGAAgFgEIgOAGQgHAHAAAGIACAEIAgABQAMgCAWABIAfACIAagBQALgDAGAAIASACIARgDIAagDQAOgBAJAFIALADIAIADIANgFIAQgFQAJgCAGACIAcABQATACAIgBIAFABQAWgDAoAGIAdAEQARAEAJALQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABIAdgCQAPgCARACIAgAFQARACASgCIAjgHIAYgEQANgBAKACQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAABIgBABQgNAEgXAEIgkAGQgYAFgegIQgSgFgZAAIgrgBIgDAAQgZgBgUgEIgMACIAQAHQACACAAADQAAADgCACQgQAJgVAAIgngBIgUgBQgKAEgNABQgEACgFAAIgFgBQgGAFgGACQgRAGgZgBQAAAAAAABQAAAAAAABQAAAAgBABQAAABAAAAQgGAFgIABIAhgBQAWgBANgDQAMgBAWgGIAggJQBIgOAmASQADABABAGQAAAFgEABQgRADghgCQgjgEgPACQgNACgiAJQgdAIgRABIg/AEQAKACAJAGQAEADAAAEQgBAEgFABQgOAEgWgCIglgFIhqgLQgWAEgXgBIgmAAIACABIAhANQASAHAPgCIAggCIAhAAIACABIgBACQgaAGgoABIgZAAQgOgBgKgDQgWgKgMgDQgRgEgRAEIgMAFQgBAEgEACQgGAFgMACIAgAEQAZADAKAEIA6gCQAVgBAdgHIAxgKQAqgIAgAQIAWAMQANAIAIAKQALgHAJgDQAUgFALAAQAdgDAMAGQAZANAIACQAOADAqAAQAnACAMAXIAmABQA3gFAWgGIASgGQAJgDAIABIARABIARABIAdgEQARgBALAHQACACAAAEQAAAFgCACIgCABIBWADQAPABAigBQAcABASAIQAEADABAGQAAAIgFABQgUAHgggFIg0gIQgsgFgqgPQgUAGgcgHQgTgGgWADIgpAHQgUADgcAAIgwgDIAAADIAAAAQARgBATAHQAkALAZACQAJAAARgBQAPAAAJAEQADACAAADQABAEgDABQgQAKgagCQgNgBgdgGQgvgKgLgBQgfgBgaAQQgEAEgEgGQgCgHAEgEQAPgMAQgGQgTgMgJgDQgTgEgpgJQgXgEgkABIg6ADQgDAFgEAAQgNABgTgNQgYgQgIgCQgTgGgXABIgpAEQguADhAgBQABACgBADQgCAEgCABQgMAHgTgEIghgFQgngEgjAAQgiABghgBQgIADgLACQACAGgDAFQAnAHAYAWIAAADQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAQgcgBhVgHIgqAAQgbgBgOgJIgFABIgCACQgIADgNACQAPADAKAGQARAEAKAGQAJAGgBAFQAVABARACQAUADAcgCIAxgDQA1gBAcACQAvACAiANIA1ADQApAGAMADIAUAAQASABAngDQAjgCAWAIQADAAABAFQAAAFgDACQgUANgfgBQgHAAgtgFIAOAPQAHAJAIAEQAKAEAOACQARgCAIAAQAIABAIADQAUgBApgFQAPgGAUACQAdgCAXAFQAXgCAHgCQgCgJAFgGQADgJAIAAIAJAAQgigEgRgEQgdgDgQgFQgbgHgIgWQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAABAAQAIAGATAEIAbADIArAHQAkAEARgCIAQgBQAIABAGAFQATgJAbACIAvAHQAJABAQAEIAYAGQASgFAZACQAOgEAdgKQBAgVA+AQIApAKQAXAHARACIAXAFQALADAIAIQACADAAAEQgBADgCACQgLAIgPAAIgbgEIgSgFQgPAHgnAIQgUADgIADQgOAEgJAMQAcABAkgEIBAgKQA4gHBWALQAhAEAqAAQAZgBAzgEQgDgDACgDQAJgNAOgEQAJgDATgCIAiAAQgBgNgNgFQgKgDgUgDQgkgGgvAAQg2AEgcgBQgxAAgegRQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIABgDIACgBIABABQABAGAzgFIA8gIIA+gEQAkgCAaACIAVADQAMgMAWgEQARgEAPACIBHAKQAIAAATgBQARgBAIAJQAHAFgGAHIgDAFIAPAGQAhAKAGADQAXALAGAUIAAACQAZABASADQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAgBAAIgaADIgDADQgZAQgZgHIgEgBQgHAJgZACIgJACIAAAFQAKgBAvAGQARABASgCIAjgGIAIgBIgSgFQgGgBADgJQABgIAGACIA+AGQAmAEAYABIA2ACQAgAEAUAMQAEACgBAJIAfgHQA5gLAbgDIAPgBQg6gLgwgEIAAgBQA5AFA5AKIAAAAQAjgCAjAAIAPAAIAAAAQASgIAeAAQARAAAhADIAcAAQBGgQBoAaIA9AFIA8ADQAiACAXAJQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAABAAABQAAAAAAAAQAAABgBAAQAAAAgBAAQgXAFgjgEIg6gIIAaAIQAIADADAFQAOACALADQAEACAAAEQAAAEgEABQgNACgKAAQgGALgMAAIgsgBQgbAAgRADQgVAFgKACIAKACQADABABADQgBAFgDAAQgQAFgXgBIgngBQgpgBgjgDIhCgJIgmgFIgOgBQgHACgFgCIgDgBIgEAAIgcABQgmACgdAGQgIACgCgIQgCgGAHgDIAjgMIgSgFIAAgBIAAgCQAKgEANgCQgJgCgWgCQgRgCgSAAQgyAKgWABQAiAJAZAKQAAAAABABQAAAAABAAQAAABAAAAQAAABAAAAQABABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQgWAMgmgLQgvgPgOABQgRACgZAEQATAQAkACQATACAngBIBAABIAZABQAOACAJAHQACADABADIAZABIBFACQApADAbAKQACABAAADQAhABAOAKQADACABAEQgBAFgDACIgBAAIAWABIAagBQAQAAAKADIAUgCQAJgCASgBIAIAAQBBgFBLACIAKABQAPgEASAAIAiAEIBggCQA4gBAnADQBnAIglAjQAEgDA6ABQgIgEgEgGQgFgKgIgCIgFgDIAAgDIAQABQAAAAABAAQAAAAABABQAAAAAAAAQABABAAAAQAEALAHAFQAGADAQACIAWABQALgEASgBIAfgBIAdgDQAVgEALABQARgDASAAQAKABAOAFIAYAJQAOAGApAJQANAAAFACIABACQBUgBAqgEQBFgFAdADQAMgDAlAFICAAQQAcABA4ACQAGABAdgEQAYgDAMADIANgEQgwgIAIgPQgrgDgwAEQhBAFgggGQgIAIgKgFIgZgKQgGAAgFgEQgPgGgMAAIgbAAQgRAAgJgFQgFgDAAgFIgMgCIgygKQgQgCgTAEIgBADIABABIAAAAIgEACQAjACAZALQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAgBABIgFABQAAADgDABQgMAFgQAAIgeAAIgdAAQgQgCgLgCIgBAAIgKABQgPABgRgEQgJgBgTAAQgSgBgJgCQgBAAAAAAQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAABAAQAAgBAAAAQAAgBABAAQAAAAABgBQAMgDATACIAhABIAPAAIASgCQgBgFADgDQAEgFAFAAIAIAAIgqgDIgagDQgSgDgJgDIA4gDIAOABQAdACAOgBIAOgBQAFAAAGADQAQgEAWABIAnADIAoAGIAIgBIAJABIAeAAQAOAAAIgIIACgBQA0gLA0AIIBDALIASACQAJABAHAFQAAAAABABQAAAAAAAAQABABAAAAQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAAAQgBABAAAAQgIAEgNAAIgWgCIgPgCQgMADghAEIgXADQgLACgHAHQAaABBPgIQAsgEAyAFQAagNAmgHQAKgBAgAAQgCgDACgGIhBACQglgBgYgHQgBgBAAAAQAAAAgBgBQAAAAAAAAQAAAAAAgBIABgBQAAAAAAgBQABAAAAAAQAAAAAAAAQABABAAAAQABADBNgFQAGAFALABIAhABQAEgFAHgBQCZgTDWAhQAMABgCANQgCANgLAAIhTgGQBmAMA1AKQALACgBAMIAbAAQApgBAggGIANgCIgMgCQgBAAAAgBQAAAAAAAAQgBAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQABAAAAAAIAaAAQAHgIgLgOQgEgHAEgHQAFgHAIAAQBYgEA5AJIANAAQAJgGAPgCIAagBQAngCAcABIBFAAIAaAAQAOACAMAHQADADAAAFIArAAQAjAAAnAFQAcADAHADIA8gBQAUgCAdgFIAxgKQApgGAhAOIAWAKQAOAHAHAJQAKgHAKgBQASgFANgBQAdgCAMAFQAYALAJACQAIACAdAAQAcAAAOAEIgBAdQgOgHgHgCQgTgEgqgIQgXgEgjABIg6ADQgDAEgEAAQgNABgTgLQgYgOgJgCQgSgFgXABIgqADQgvADg+gCQABADgBADQgBABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQgMAHgUgDIgigFQgpgEggABQgiABgggBQgJADgLABQABAFgCAEQAoAHAXATIAAACIgBABQgygCg+gFIgrAAQgbgBgOgHIgFABIgCABQgIADgNABQAdAGAOARQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAXAAAeAEQASACAbgBIAugDQgMgIArgIQAdgGAtAIIBKALQA7AECNgWQCBgVBIANQA7ALAagDIgCA1IgDABQAAADgCAEIACAAIAAABIgFADIAHABIgCAxIgNAAIgigBQgSAAgOgFIgBABIgNACQgTAAgUgFQgLgCgXAAQgWgBgLgEQgDgBAAgDQAAgFADgBQAOgFAZACQAgADAGgBQAgAAAJgDQgCgHAEgHQAEgGAHgBIAKAAIgdgDQgpABg0gHIhYgOQgJgCAAgJQguAIgmAGQASAAAmgCQAhgBAVAGQADABAAADQABAEgDACQgUALggAAIg2gFQgagCglgBIhAABQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQATgGAdgFQgSAAgSgCIgCABIg6gHIgpgFQglgDgWgFIghABIgzADIgyADQADAFgEADQgJAIgOABQgJABgRgDQgbgEgPgLQgQADgXgBIgngDIgNgBQhLgCgdACQgXABgbAGIABADQAZgCAuAAIBFgBQAoABAZALQAEACABAEQgBAFgEABQgZAHgpgDQgugEgWgBIgkgCQAAABAAAAQAAABAAAAQgBABAAAAQgBAAAAAAQgkANgkgEIgnAAIgRgBQgLAEgIAAQgDABgEAAIgEAAQgGAEgFABQgLAEgXAAQAAAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAQgIAGgQgBIgZgGIgmgGQgQADgMAAQABADgBACIgGAGIA8AGIAdADQAQACALAFQADACgBADQAAADgEABQgNADgRgCIgegDIhYgJQgSADgTAAIggAAIADABIAaAJQAPAEANAAQAsgCAKAAQAAAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAIgBACQgQAEgmAAQgeAAgLgDIgbgIQgPgFgOAFIgKACQgBAEgEACQgKAFgWABIgiAAIghABQgTgBgNgDQgEgCgBgEQABgEAEgBQANgCAYAAIAkgCQAlgEAHABIAOgDQgPgBgNgEIgagEQgNgDgRABIggADQgWABgWgBIgEAAIgCgBQgZgBgjgFQgrgCgWAAIgmgBQgVgDgPgKQgBAAAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAQAWADAigCIA3gCIgagEQg6gMghgBIgPABQgOAEgZgBIg0AEQgeACgVgCQgGgBAAgFQAAgFAGgBIAGgBIABgBQAggTAtAAQAQgKAggCQATgCAhAAIAkgCQgMgEgHgHQAHgHALgCIg8AAQgDACgLAAIgvAAIgQAHIAAAAQgeAJgWgCQgQACgUgCIgmgDIAAgBQAoABATgDQAggFAQgSIAAAAIgBgCQgKgCgMgFQgUgEgSAAQgTABgbAEIgtAFQhJAJg9gJIgfAFIgbAAQgQgCgKABQgMABgiAHIABACQgtALhCgCQguAAhIgJIghgCIAGABIAjAEQAUAEAIAOQAEAJgHAHQgGAEgJACQAPgBAagGQAvgIAWgBQAmgEAnABIAMAAIAAgBQAPgFAZAAIApABQALABAMgBQAwgJA+AKQAlAGBGATQANAEgCAMQgCALgOAAIglgBQgVgBgPADIgUAEQgMACgJgDQgRADgOgBQgBgBAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBIABgDQAHgEAdgIQAFgFAKgCQgHgFgXgEQgUgEgSgCQgPAEgYgBIgpgCIgaAAIgCABQgHADgHABQgDAGgHgBQgNABgKAEQADACAAACIAQADIABAAIAeACIAhAAQAUABANADQADABAAAEQAAADgDABQgOAEgXgBIglgDIgmgBQgHABgDgBIgFgBIgYABQgfABgYAFQgHABgCgGQgBgEAGgCIApgOIgBgBIgEgDIAAgBIgBAAIgcgEIgdgBIguAIQgdADgRgGQgHAAgLgCIgSgDQgmgBgLgBIAAgBIAAgBQAYgDAgAAIAMAAIgegHQgzgJgtACQgzAEgZABQgsACgegOIAAgBIgqAAIgYgBQgNgBgLgGQgEgBABgGQAAgEADgDIAEgCIgQgCQgHgCgJgKQgJgMgIgBIgSgBQgJAAgHgDQAAgBAAAAQgBAAAAAAQAAAAAAgBQAAAAAAAAIACgBQAHABAOAAQANgBAHACQAFABAHAGIAKAJQAJAGAQgBIAaAAQAOgRAlACQAeACAPADQAZAEAPANQAEACABAFIARABIAQgCQAJgBAGABIAhgCQAgAAAjACIAAAAIAAgCIgKgBQgIgBgFgHQgFgHAFgHQAHgJAUgFQhQgGhEAIQgqAGhCgCQhKgEgkgBIgugBQgfgCgOAIIgKAHQATADATABIAbAAQARAAAIAHQAGAEgFAHIgEADIAQAGIAnALQAXAJAGASIAAACQAGABAGADQADABABAEQABAEgEACQgZAMgYgEIgFgBQgGAHgZADIgJAAQABAJgIAGQAYAJAMANIAlgKQAFgBAHAEIAKAHQANAGAWABIAXAAQAOABAHAJQAEAGgEAGQgKAMgUgDIAAABIAgAHQAvALAmgBIAkgFQAWgDANAFQAEABABAEQABADgDADQgMAQgbAEIAsAEIAxAHQAeAEAUAGQAGgGAMgCQAEgNAHADQgJgJgRgEIgagGIg/gPQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQABAAAAAAQAAgBAAAAQA+AEAmAMIADgDQALgJATgGQAKgCAWgCQAqgGAaAKIAHACQAEAAADADQAUAFAvABQAqABAZAJQACABAAAEQAAAAAAABQAAABgBAAQAAABAAAAQgBAAAAAAQg9AWhIgNQgKAKgSAEQABARgKACIgEABQgSADgOABIguACIALgBIgLgDIgPADIgCAAQAAAGgFAAQgWADglgIQgygOgLgBIghgEQgTgDgNAAIgwAGIAHADQABAAABABQAAAAAAAAQAAABAAABQAAAAAAABIALAAQAgAAAHACQAUACAQAKQADADAAAEQAAAEgDACQgQAKgUABIgngBIgVgBQgMAFgLAAQgFADgEAAIgFgBQgGAHgGACQgPAGgagBQAAADgCADQgJALgUgDQgIgBgXgJQgJgDgOgCIgXgEQgOADgTABQABAEgCAFQgCAFgFADIBJALIAjAGQAUAEAMAJQAFADgBAFQgBAGgFABQgPAFgVgDIglgGIhqgOQgVAGgXgBQgNgBgaABIACABIAhAPQASAIAQgBIAggCQATgCAOABQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAABABQAAAAgBABQAAAAAAAAQAAABAAAAQgBAAAAAAQgYAHgpABQgjABgPgHQgWgKgLgEQgTgGgRAGIgMAFQgBAFgDADQgMAKgaACQAXABAUAJIAYAKQAMAHAHAJQAMgHAJgBQAQgFAPgBIAUgBQANABAHADQAZALAJACQADABAtABQAiACAPAKQAQgDAXACIAnAGQARACAgAHIAKgBQAFABAGAAIAkAAQAQAAAKgOIADgBQBBgTA9APIApAKQAXAFARADIAXACQALADAIAIQACACgBAEQAAADgCABQgLAHgPAAQgGAAgWgDIgRgEQgOAFgoAIIgcAEQgOAFgJAKQAbACAlgEIBAgJQA1gHBZAKQA1AHBhgIQgBgDABgDQAJgKAPgEQAIgDATgBIAiAAQgCgMgMgEQgQgEgOgCQgogFgrAAQg1AEgcAAQgxgBgfgPQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAIABgCIgtgBQgGAEgFgIQgfACgSgJQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAAAAAgBQAAAAAAAAQABgBAAAAIABAAQgngHgQgBQglgEgggJQgVACgrAAQgrAAgsgOIgHAAIAEgBIgTgHIgBgCQAAAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAIAeAIIAJgDQAcgGAGgBIASACIARABIAdgEQARgBALAHQAEACgBAFIAkgGIgHgIIgDgGQghAEgWgNQgDgCABgEQACgFADAAQAnADAkgHQApgJANACQAxADA+AZIADADQAAABAAAAQAAAAgBABQAAAAAAAAQgBABAAAAQgWANglgLQgxgPgNAAIgqAHQATAQAjACQAVACAmgBIBAABIAQABQAJAAAHACQgLAGgEANIgmABQgFAAgEABQAdgBA6AAIASgCIACgBQASgNAhACIAEAAQgBAAAAAAQAAgBAAAAQAAgBABAAQAAAAABAAIABgCQgsABgZgOIgBgCIABgCQAUgMAhgBIgngDQgWgDgPgEIgBgCIABgBQAkgQBLAKQADgGAHgCQAEgBAJgBQAtgNA9AIIABAEIAlACQAMgKAZAAIAmACIAIAAIglgEQgGAAgCgEIgrAFQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQgBAAAAgBQAAAAABAAQAAgBAAAAQAAAAAAAAQALgHAQgEQgTgBgbgFIgsgIIAAAAQAWACAigCIA4gEIAVAAQAKgIAOgBIAagBIAPgBIAAgCQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAAAAAIBzADQAPgFAigEQAsgDAZAHIAHACQADgBAEACQATAEAwACQArABAXAGQABABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQgfAJgiABIAMAEIA7gCQASgCAYgDIAogJIhsgVIgVgCQgOgBgIgDIgCgCIABgCQARgJAcAEIAtAJIBKANQAbAEAIAEQAYABATAJIAcAPIAjgCQAVgBAOgCQALgCAVgFIAggJQBHgNAnAQQAEACABAFQAAAFgFACQgQADghgDQgjgDgPACQgJABgdAGQAZANAJACQANADArgBQAnADAMAWIATAAIATAAQAygEARgEQgNgEgRgHQAAgBgBAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQAAAAAAAAIArAMQAXgHAIAAIASABIARABIAdgDQARgBAKAGIACACQAYgFANgBIgHgJIgCgGQgiADgVgOQgDgBAAgGQACgFAEABQAqADAhgIQAmgJAPABQAyAEA+AbQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAAAQgBABAAAAQgVAOgngMQgvgQgOAAQgFABglAGQATASAkACQATACAngBIBAABIAZABQAOACAJAJQACACABAEIAZABIBEADQApACAcALQACABAAAEQAhACAOAKQACABABAEQAMgLAUgEQASgEAOACIAkAFIAjAFQAJAAASgBQAQAAAJAIQAGAFgEAHIgFAEIAQAGIAlAMQAWAKAHAQQAOgKAbACQAfADAOACQAaAGAOAOQAEADAAAFIASAAIAPgBQAKgBAGABIA8gCIACAkQgYgCgXABQgzAFgZABQgtACgdgQIAAAAIgqgBQgQAAgIgBQgNgCgLgGIgCgCQgEACgTADIgIAAQABAKgHAHQAYAKALAPIAmgMQAEgBAGAEIAKAIQAOAIAWACIATAAQAMAAAGADQAvAFAXABIAvABQAcACASAIIADAcIgFAAIAFABIABAQQgKALgQAGQgJACgTACQgnAEgqgHQgUgDgqgOQgogOgWgDIgBABQgEACgEAAIgHAAIgCABIgaAFIgaAFQg4AGgQgBQgGACgEgGIgPAHQgGALAAAIQAAADABABIAgABQANgCAVABIAgADIAygBQAOgEANgBIAagFQAPAAAJAGIAKADIARAIQAUABAPAGQAegEAPAHQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABIALABIAmABQAWADAPALQADADAAAEQAAAGgDABQgQAMgVABIgmgCIgUgBQgNAGgLABQgFACgEgBIgEAAQgIAIgFACQgRAHgYgBQAAAEgCACQgKAMgTgDQgIgCgXgJQgJgEgOgBIgXgFQgRAEgQABQACAFgDAFQgDAGgEADIBJAMIAjAGQATAFAOAKQADADAAAGQAAAFgFACQgPAFgVgCIglgHIhqgQQgYAHgVgBIgnAAIADABIAgARQASAJAPgCQAygEAPABQABAAAAAAQAAAAABABQAAAAAAAAQAAABABAAQAAABgBAAQAAAAAAABQAAAAAAAAQgBAAAAABQgXAHgrACIgZAAQgNgCgKgEQgXgNgLgEQgTgGgRAGIgMAGQAAAGgFAEQgNALgZABIgrAAIgnABQgXgBgQgIQgFgCAAgIQAAgHAFgCQARgDAbgBQAhgCALgCIAbgEQAQgDALACIARgFQgWgDgMgHQgVgHgKgDQgPgDgXACIgmAEQgXACgfgDIgEABIgDgCQghgCgvgLQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAABAAQBWgHA1gHIgpgFIgpgFIg6gEQgigDgYgGQhEgVgqgCIgSACQgQAFgfgBIg/AIQglAEgagFQgGgBgBgJQABgJAGgCIAJgCIABgBQAmgkA2gBQAUgRAngEQAWgDAqgBQAogDAOABQAkAEANAUIAhgDQATgDAPABIAHAAQAKgCAHgBIAvgDQAcgCARgDIAMgCIAAgJQAAgBgBgBQAAgBAAgBQAAAAAAAAQAAgBABAAIgDgBIgBgBIgOgBQgfgCgXgRIgKgCIgLgDQgKgCgLAAIgBACQgMANgUAHQgLADgbADQgcADgJAAQgVgBgNgMQgDgDAAgEQABgEAFgBIAggEIgmgDIhGABQgEACgOAAIgTgBIglADQgIAFgMAGQgiASgdgGQggAHg6gLQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAgBAAAAQAyABAWgFQAogJASgiIgBgDQgNgEgOgJQgZgIgVACQgWABghAGIg3ALQhZAQhJgPQgSAFgUADQgLAAgVgCQgVgCgLABQgJABgzAPQgkALgZgFIglgHQgWgEgPACIghAEIggAFQgIAAg8gDQg8gEABgCQgBABAAAAQAAABgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBQAAAAAAgBIAAgDQAAgGADAAQAVgCAxAEQAtAEAZgEQBFgJAwAKQAjAHAggIQgCgDAAgBIgBgJIgFgDIgLAAQgFAAgCgCQgUgCgKAAIhMgEQhkgDhAgIIhSgNQgygJgggDIgCAAQAFAPAOAEIAPADQgIAFgWADIgJABQACAIgIAHQAWAIAOAOIAlgKQAFgCAGAEIAKAHQANAIAWACIAYAAQANAAAIAJQAEAGgEAGQgKAMgUgCIgBABIAgAHQAyALAkgCIAbgDQADAGAJAHQAlgKAagDQApgHA0ABIAPAAIABAAQARgLAeAAIAyAEIAcAAQA5gRBMATQAtALBUAiQAQAHgCAVQgCAVgSAAIgrgCQgbAAgRAFIgZAHQgOAEgMgGQgVAHgQgFQgBAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgEACgBQAHgGAkgTQAHgHALgGQgJgHgagHQgbgJgTgDQgTAIgegCIgwgDIgggBIgCACQgIAFgLACQgDAKgHAAQgRABgMAIQAEACAAAGIATADIACABIAkADQANABAbgBQAYACAPAGQAFADABAGQgBAGgFACQgRAIgbgCIgtgGIgugCQgHADgFgCIgDgCIgEAAIgbACQgkAAggAJQgIACgCgJQgCgJAHgEIAmgSIANgIIgCAAQgEgDgBgEIAAgBQgJgDgagEQgQgCgTAAIg5AOQgiAFgVgKQgIABgOgEQgPgFgHgBQgxgCgJgCIgBgCIABgCQAXgEAcAAIgtgPQgbgHgSgCIgBAAQgFADgDAAIgHAAIgDAAIgaAFIgaAEQg7AGgNgBQgGABgEgEQgGAEgJACQgGAIAAAIIACAGIAfABQANgDAVACIAgACIAzgBIAagFIAagEQAPgBAKAGIAaALQAVAAAOAGQAegEAPAHQAAAAABAAQAAABABAAQAAABAAAAQAAABAAAAIAKABQAeAAAJABQAUADAQALQAEACAAAEQAAAEgEACQgPAKgWABIgmgBIgUgCQgLAGgNABQgDACgGAAIgEAAQgGAGgHADQgOAGgagCQAAADgDADQgJALgUgCQgHgCgYgIQgIgDgPgDIgWgEQgRAEgRAAQACAFgCAEQgEAGgEADIBJAMIAjAFQAUAEANAKQAEADgBAFQgBAFgEABQgPAGgWgDIgkgGIhqgPQgYAGgUgBIgoAAIADABIAgAQQASAIAQgCIAhgCQATgBANAAQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBABQgZAHgoAAIgZABQgOgBgLgEIgggQQgTgFgRAFIgNAGQAAAGgEADQgOAJgZACIgqAAIgnABQgYgBgQgHQgEgCgBgHQAAgHAFgBQAQgDAcgBQAjgCAJgBIAcgFQAQgCAKABIASgFQgVgBgOgHQgUgHgKgCQgQgDgXABIgmAEQgYACgdgCIgEAAIgEgBQgdgDgygKQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAgBABAAQBXgGA0gIIgpgEIgogFIg6gEQgjgBgYgHQhIgSglgCIgSABQgRAFgegBIg/AIQglADgagEQgHgBAAgJQAAgIAHgCIAJgBIAAgBQAogiA1AAQAUgPAngFQAVgDAqgBQAqgCANABQAjADANAUQA0gHAPABIAZgCIAtgEQAdgBARgDIANgCIAAgIQgBgBAAgBQgBgBAAAAQAAgBAAAAQAAAAABAAIgDgCIgBAAIgOgBQgfgDgXgPIgKgBIgMgDQgKgCgJAAIgBACQgNANgVAFQgLADgaACQgaAEgLAAQgUgBgOgLQgEgDACgFQABgEAEAAIAggDIgmgEIhGACQgGADgMgBIgTgBIglACIgTALQgkARgcgHQgfAHg6gKIAAgCQAxABAXgEQAngJASgeIAAgBIgBgDQgPgEgLgIQgbgGgUAAQgWACghAFIg3AKQhaAPhIgOQgVAFgRACQgLACgVgDQgVgCgLABQgJACgzANQgkAKgZgFIgigGQgUgDgPAAQgNAOgagJIgfADQgLABh0gIQAAABAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQAAAAAAgBIgBgDQgBgFAEgBQAVgBAwAEQArACAZgCIgIgCQg0gMgrABQgzAIgaABQgrADgegWIgBAAIgqgBQgQAAgIAAQgNgDgKgHQgEgDABgHQAAgGADgDIADgEIgQgEQgGgCgJgPQgKgPgHgCIgSgBQgKgBgHgFQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAQAHACAOgBQANAAAIABQAFABAGAKIAKANQAJAHAQAAIAbgBIAFgGIgPAAIAAgBQAPgLAUgCQAKgCAPABQAqADATAKIArADQAaABARAGQABAAAAAAQABAAAAABQAAAAAAABQAAABAAAAQAAABAAABQAAABAAAAQAAABgBAAQAAAAgBABQgbAHgggEIACAIQAIABAJgBIAQgCQAJAAAGABQAQgDASgBQAsgBAlAHQgHgEgDgKQgEgKgCgDQgEgGgGgCIgGgEIABgFIASABQAEABABADQAEATAJAIQAHAEATAFIAOABIANABQANgHAWgBIAlgCIAkgHQAYgFAOACQAagGARABQAMABARAIIAdAPQASAJAwAQQAOAAAIADIADADQBggBA4gGQAogEATgBQAigCAaADIAAAAQANgDAQACIAeAEICbAdQAhAABFAEQAGAAAkgGQAdgEAPAEIAEAAIAFAAIBYADQABAAAAAAQABAAAAAAQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAQgUAAgnADIAnAIQAYAEAPAFQAKAEAEALQAWAEAsAAIASABQASgKAcgFIAXgFIg0gLIgRgBQgEABAAgGQAAgEAEAAIAVgDQAMgDAIABIAEACQAxgIAZAAIAIgPIgIgFQgEgDgEgIIgJgBIgCgBIgCABQgQACgagDIgqgEQgdgCgtAEQhVAIg9gJQhQgLhHAIQglAFgWAAQgiAAgagGQgHAOgOgIIgdgSQgJgBgFgGQgSgJgPgBIghAAQgUAAgLgJQgGgEAAgJIgPgEQgngMgVgEQgVgDgWAGIgBAGIABABIAAABIgFADQAtADAcASQAEACAAAEQAAAFgEACIgFADQgBAGgDABQgPAIgUABIglgBIghgBQgTgBgOgEIgBAAQgGACgGAAQgUABgUgGQgJgCgZgBQgWAAgKgFQgEgBAAgEQAAgDAEgBQAOgGAYACQAfAEAHgBIATgBQARgBAFgCQgBgHADgGQAFgIAGAAIAKAAQgdgCgVgFIghgEQgVgEgMgGIAygFIgrACQgcACgNgBIgDAEQgBgLgIgIQgIgIgMgBIg3gBQgOgDgWADIh+AAIACgIIAagBQAVgBAdgFIAxgJIAOgCIgbAAIgoAAQgXgBgQgGQgFgDgBgGQAAgIAGgBQAQgDAcgBQAigBAKgCIAbgEQAQgCALABIASgFQgUgBgPgHQgUgHgLgCQgQgEgWACIgmAEQgVACgggCIgFAAIgDgBQgigDgugJIgBgCIABgBQBXgGA1gHIgqgEIgogGIg6gCQgjgDgXgFQhJgUglgBIgSACQgQAEgfgBQgqAGgVABQglAEgagEQgHgBABgIQgBgJAHgBIAJgCIAAgBQAoggA1gBQAVgQAmgDQAVgDAqgBQAogCAPAAQAjAEAOASIAhgEQAUgBANAAIAagCIAtgEQAdgBAQgDIANgBIAAgIIgCgEQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAIgDgCIgPgBQgegCgYgPQgEAAgGgCIgLgCIgTgCIgBACQgNAMgVAGQgLACgaADIglADQgVgBgNgLQgEgCACgFQABgEADAAIAhgDIhsgDQgEADgNAAIgUgBIglACIgUALQgiAPgegFQgSAEgZgCQgRgBgdgFIAAgCQAyACAWgFQAngIATgeIAAgBIgBgCQgNgDgNgIIgfgGIgQAAQgXABghAGIg3AIIgBAAIANABQAxgDAQAAQAAAAAAABQABAAAAAAQAAAAAAAAQAAAAAAAAQABABAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgXAHgqACIgZAAQgOgBgLgFQguAEgqgEQgNAKgZABIgoAAIgoABQgXgBgPgHQgiAKgRADQgcAHgXgEIglgHQgWgDgQABQgqAHgXABQgJABg6gDQg8gEAAgCQAAABAAABQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAgBgBQAAAAgBAAQAAgBgBAAQAAgBAAgBIgBgCQAAgFAEgBQAUAAAyADQAsADAagDQBGgJAuAJQAkAIAhgIQgDgCgBgDIAAgIIgEgBIgMAAQgEAAgDgBIgegDIhMgDQhogDg7gHIhigOQgBAFgDACQgMAKgXgFQgagHgLgCQg4gJgoABQgzAFgaABQgrACgegPIgqgBQgfABgRgJQgEgCABgEQAAgEADgDIAEgDIgRgCQgFgBgEgEIgIgJIgNgGIhLABIARACIAcgBQAQABAJAGQACACAAADQABADgCADIgFAFIARAEIAnALQAWAKAHARQAAABAAAAQAAAAAAAAQAAABAAAAQgBAAAAABQAGAAAHADQADACABAEQABAEgEABQgaANgXgGIgFAAQgGAGgaADIgIABQAAAJgHAGQAXAJAMANIAmgKQAFgCAGAFIAKAGQAOAIAVABIAYAAQAOABAHAJQAEAGgEAGQgJAMgWgDIAAABIAgAHQAwAKAmAAIAkgGQAWgCANAEQAEACAAAEQABADgCADQgJAMgRAEQgJAEgVABQgmAEgrgGQgTgEgrgMQgngNgXgCIgBAAQgDADgFAAIgGAAIgDABIgaAEQgQADgJABIhIAFQgGABgFgEQgHADgHACQgHAKAAAHQABADABACIAgABQAMgDAWACIAfACIAagBQAJgDAIAAIASABIARgDIAagEQAPAAAIAGIALADIAIAEIANgGIAQgHQAJgBAGACQAKAAASABIAbACIAFAAQAWgDAoAHQAaAEADABQARAFAJANQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABIAdgCQAOgBASACIAgAEQARADASgDQAKgBAZgHQAggHAPAEQAAAAABAAQAAAAAAAAQAAABAAAAQAAABAAAAIgBAEQgNAEgXAFIgkAGQgYAHgegKQgSgGgZgBIgrgBIgBABIgCgBQgbAAgSgHIgMAFQAJADAHAFQACACAAADQAAAFgCACQgQAKgVABIgngCIgUgBQgKAGgNABQgGABgDAAIgFAAQgHAGgFADQgQAGgagCQAAAFgBABQgHAHgIABIAjgCQAVgBANgDQAMgBAWgJIAggKQBIgRAmAWQADACABAGQAAAGgEABQgRAGghgEQgkgEgOACQgNACgiALQgdAKgRABQgpAEgWACQAKADAJAGQAEADAAAFQgBAFgFABQgOAGgWgDIglgGIhqgOQgVAFgYAAIgmAAIACABIAhAPQASAIAPgCIAggCQATgCAOABQAAAAABABQAAAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAAAAAQgWAIgsAAIgZAAQgOAAgKgFQgWgLgMgDQgRgGgRAGIgMAFQgBAFgEAEQgHAFgLADIAgAEQAaAFAJAEIA6gCQAVgCAdgHIAxgOQAqgJAgATIAWAPQANAKAIALQANgIAHgDQA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AAgDIACAAQAIAGATADIBHAKQAkAEARgCIARgBQAGAAAHAGQATgJAbACIAwAHQAPACAhAJQATgGAYACIArgNQBAgUA+APQBCARAPACIAWAEQALADAIAJQACACAAADQAAADgDACQgKAJgPgBIgcgEIgSgEQgMAFgpAJQgVADgIACQgNAFgJALQAbACAlgFIBAgJQA3gIBXAMQAhAEAqgBQAZgBAygDQgCgEACgDQAJgMAPgEQAIgDATgBIAiAAQgDgOgMgDIgJgDIgEAAQgagDgMgDQgHABgMgDIgpgBIgVABIgQABIgDAAQgiACgSgBQgdgCgWgHIgLgBQgFAAgBgFIgCgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBABAAIABgDQAAgBAAAAQAAgBABAAQAAAAAAABQAAAAABABIABABIAFgDQApgEAaACIAJABIAmgEIAXgGIAVgFQgRAAgegEIgvgDQgKgBgxADQgSAIgqADQgVACgJgBQgRgBgMgIIAAAAIg3gJQgrgEgogOIgIAAQgNAEgRgDIgLAAQgYAAgXgFIgkAHQgWADgbgBIgxgCIABACIAAAAQASgBASAHQAkALAZABQAJAAARgBQAPAAAKAFQACACABADQAAAAAAABQAAABgBAAQAAABAAAAQgBABAAAAQgRAKgagCQgLgBgggHQgugJgLgBQgfgBgZAQQgGAEgCgGQgEgHAGgDQAOgLAQgHIgOgHQgIgFgHgCQgOgEgugJQgXgEgjABIg6ADQgCAGgFgBQgLAAgMgGIgVgOQgagBgSgLIAAgCIALACQgOgDgVABIgkAEQgvADg+gCQABADgCAEQgBACgCABQgMAHgUgDIgigFQgggEgaAAQgBACgEABIgDABQgZAEgagBQgWAAgGgCQgGACgHAAIgBAAQABAEgCAEQAmAHAZAVIABADQAAAAgBAAQAAAAAAABQAAAAAAAAQAAAAAAAAIhygHIgqgBQgbgBgOgIIgFABIgCABQgKAEgKABQAcAIAOARIACAEQAgABAVACQATADAegCIAvgCQBAgCAdADQA2AEAlASQAAAAABABQAAAAAAABQABAAAAABQAAABAAAAQgBABAAABQAAAAAAABQgBAAAAAAQgBAAgBAAQgOgCgigIQgfgGgRgCQgtgDgyABIgzADIgyAEQACAEgDAEQgJAKgPAAQgHABgTgDQgagEgPgMQgQADgXgCIgogDIgLAAQhHgEgiADQgSABgfAGIABAEQAXgCAwAAIBDgBQApABAZAMQAFACAAAFQAAAFgFABIgEACIBRAJQADAUASAFIAEABIgBAIIAOACIBSAMQAxAHAhABIBogCQgOgEgFgQQgFgNgDgFQgGgFgLgBIgegCQgLAAgTgEIgegEQAAAAgBgBQAAAAAAAAQAAAAAAgBQABAAAAgBIAeADQASACAMAAQAigBASACQADAAABADQAFAVAJAIQAHAGATAEIAMACQAwgOAyABIAEAAIAdgGQATgEAMABQAYgFASABQAMAAASAKIAbAQQARAKAyASQAOgBAIADIACAEQBhgCA4gGIA7gGQAigBAZADIAAgBQANgDARACIAeAGQAiAFAgAIIBYARQAiABBEAEQAHAAAkgGQAdgGAPAGIADAAIADgBIADABgA3oGcIBYACQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAgBAAQAAAAgBABQgdAAgeACIAnAJQAYAFAPAFQAKAFAEALQAWAEAsABIATABQARgLAdgGIAXgFIg0gMIgSAAQgDgBAAgFQAAgGADAAIAUgDQANgDAIABIAEACQAtgIAdgBQAHgMABgDIgIgGQgDgCgGgJIgIgDIgBAAIgDABQgQADgagEIgqgFQgfgBgrAEQhVAIg9gJQhPgMhIAJQgmAEgVABQghABgagIQgDAHgHACQgGACgGgEIgdgUQgJgBgEgHQgSgKgRAAIggAAQgTAAgMgKQgHgFACgKIgPgDQgpgOgUgEQgVgEgWAHQABADgCAEIABABIAAAAIgFAEQArADAeAUQADADAAAEQAAAFgDACIgFAEQAAAFgEACQgPAJgUABIglgBQgwgCgSgFIgBAAIgMACQgVABgTgGQgKgDgYgBQgVAAgMgEQgDgCAAgEQAAgEADgBQAPgGAYACQAfAEAIgBQAeAAAKgEQgBgIAEgHQADgIAHABIAKgBIgzgHQgdgDgPgEQgbgJgJgUQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABgBIACAAQAIAGATADIBHAKQAjAEASgCIAQgBQAHAAAHAGQASgJAbACIAwAHQAQACAhAJQASgGAYACIArgNQBBgUA9APQBCARAPACIAXAEQALADAIAJQACACgBADQAAADgCACQgLAJgPgBIgbgEIgSgEQgNAFgoAJQgVADgIACQgOAFgJALQAcACAkgFIBAgJQA4gIBWAMQAhAEArgBQAYgBAzgDQgDgEADgDQAJgMAOgEQAJgDASgBIAiAAQgCgNgMgEIgKgDIgEAAQgZgDgMgDQgHABgMgDIgqgBIgUABIgRABIgCAAQgjACgSgBQgdgCgWgHIgLgBQgEAAgBgFIgDgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIAAgDQABgBAAAAQABgBAAAAQAAAAAAABQABAAAAABIACABQABgCADgBQApgEAbACIAIABIAngEIAVgGQANgEAKgBQgRAAgfgEIgvgDQgJgBgyADQgSAIgqADQgUACgJgBQgRgBgMgIIgBAAIg3gJQgqgEgpgOIgIAAQgMAEgSgDIgKAAQgYAAgYgFIglAHQgUADgcgBIgwgCIABACIAAAAQASgBASAHQAkALAZABQAJAAAQgBQAQAAAJAFQACACABADQAAAAAAABQAAABAAAAQAAABgBAAQAAABgBAAQgQAKgagCQgMgBgfgHQgvgJgLgBQgegBgaAQQgFAEgDgGQgDgHAFgDQANgLASgHIgPgHQgIgFgGgCQgNgDgvgKQgYgEgiABIg7ADQgCAGgFgBQgKAAgMgGIgWgOQgagBgSgLIABgCQgLAAgNAAIgkAEQgwADg9gCQAAADgBAEQgBACgDABQgMAHgUgDIghgFQghgEgZAAQgBACgEABIgDABQgZAEgbgBQgWAAgFgCQgGACgJAAQAAAGgBACQAnAHAYAVIABADIgCABIhwgHIgqgBQgbgBgPgIIgEABIgCABQgKAEgLABQAdAIANARIACAEQAgABAVACQAUADAdgCIAwgCQA/gCAdADQA2AEAlASQABAAAAABQAAAAABABQAAAAAAABQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBAAQAAAAgBAAQgPgCghgIQgfgGgSgCQgtgDgxABIg0ADIgyAEQADAEgEAEQgIAKgPAAQgIABgSgDQgagEgQgMQgPADgYgCIgngDIgMAAQhGgEgjADQgRABggAGIABAEQAYgCAvAAIBEgBQApABAZAMQAEACAAAFQAAAFgEABIgFACIBSAJQACAUATAFIADABIgBAIIAPACIBSA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AAQAAAAAAgBQAAAAAAAAQAAgBAAgBIAfADQASACALAAQAjgCASADQADAAAAADQAFATAKAHQAGAEAUAEIANABIAOABQANgHAWgBIAkgBIAlgGQAYgFAOABQAagFARABQAMABARAHIAbAOQATAKAwAQQAQgBAGADIACADQBggBA5gFIA8gGQAigCAYADQANgDASABIAeAGIBBALIBZARQAigBBDAFQAHABAkgHQAdgFAPAGIAEAAQADgCACACIBZABQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAQAAABAAABQAAAAAAAAQAAABgBAAQAAAAAAAAQgdABgfACIAnAIQAYADAPAGQALADADALQAWAEAtABIASAAQAPgJAegGIAWgEIgygMIgRAAQgFAAAAgFQAAgFAFAAIAUgDQALgCAHABIAGABQArgGAegCIAJgOIgJgEQgDgDgFgIIgJgCIgBAAIgDABQgQACgagEIgpgEQgdgBgtADQhWAIg7gJQhQgKhIAIQgmAEgUAAQgjABgZgGQgDAGgHACQgGABgGgEIgdgRQgJgCgEgEQgTgKgQAAIggABQgUgBgLgJQgGgFAAgIIgOgDQgogNgVgDQgUgDgXAFQABADgCAEIABAAIAAABIgEADQAqADAfASQACACAAAEQAAAFgCACIgGACQAAAGgEAAQgOAIgVABIgkgBIgigBQgTAAgOgFIgBABIgMACQgTAAgVgFQgKgCgXAAQgXgBgLgEQgCgBAAgDQAAgFACgBQAPgFAYACQAfADAIgBQAgAAAIgDQgBgHADgHQAFgGAHgBIAKAAIgfgDQgoABg0gHQgbgDg9gLQgIgCgBgJQgvAJglAFQASAAAmgCQAhgBAVAGQADABABADQABAEgEACQgUALgfAAIg2gFQgbgCgkgBIhAABQAAAAgBAAQAAAAAAAAQAAAAAAAAQABgBAAAAQATgGAdgFQgSAAgSgCIgCABIg7gHQhLgIgZgFIghABIgyADIgzADQADAEgEAEQgJAIgOABQgJABgRgDQgagEgPgLQgQADgXgBIgogDIgMgBQhMgCgdACQgXABgaAGIABADQAYgCAvAAIBEgBQAoABAaALQAEACAAAEQAAAFgEABQgaAHgpgDQgugEgVgBIgkgCQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBAAQgkANgkgEIgnAAIgRgBQgKAEgJAAQgDABgFAAIgDAAIgKAFQgMAEgWAAQAAAAAAAAQAAABAAAAQgBABAAAAQAAABAAAAQgJAGgQgBIgZgGIgmgGQgPADgNAAQACADgCACQgCADgEADIA8AGIAdADQAQACALAFQADACAAADQgBADgEABQgMADgRgCIgfgDIhXgJQgSAEgTgBIggAAIACABIAaAJQAQAEAMAAQAtgCAJAAIABABIgBACQgQAEgmAAQgeAAgKgDQgTgGgJgCQgPgFgOAFIgKACQgBAEgDACQgLAFgWABIgiAAIggABQgUgBgNgDQgEgCAAgEQgBgEAFgBQAOgCAWAAIAlgCQAkgEAIABIAPgDQgQgBgMgEIgagEQgNgDgSABIgfADQgXABgWgBIgDAAIgDgBQgZgBgigFQgsgCgVAAIgngBQgUgDgQgKQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAXADAhgCIA4gCIgagEQg7gMgggBIgPABQgPAEgYgBIg0AEQgfACgWgCQgEgBAAgFQAAgFAEgBIAIgBIABgBQAggTAsAAQARgKAggCQASgCAiAAIAkgCQgMgEgIgHQAHgHAKgCIg6AAQgEACgLAAIgvAAIgQAHQgdAJgXgCQgPACgVgCIgmgDIAAgBQApABATgDQAggFAPgSIAAAAIgBgCQgKgCgLgFQgUgEgTAAQgTABgbAEIgtAFQhIAJg+gJQgPAEgQABIgaAAQgSgCgJABQgMABghAHIAAACQgsALhCgCQguAAhIgJIghgCIAGABIAjAEQATAEAJAOQAEAJgIAHQgGAEgIACQAOgBAagGQAvgIAXgBQAmgEAmABIANAAIAAgBQAOgFAZAAIAqABQAKABAMgBQAwgJA/AKQAkAHBFASQANAEgBAMQgBALgOAAIglgBQgWgBgOADIgVAEQgLACgKgDQgRADgOgBQgBgBAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAEgDAfgJQAGgFAJgCQgHgFgXgEIglgGQgPAEgZgBIgogCIgbAAIgBABQgHADgJABQgBAGgIgBQgMABgLAEQADACABACIAQADIABAAIAdACIAiAAQAUABAMADQAEABAAAEQAAADgEABQgOAEgXgBIglgDIgmgBQgGABgDgBIgGgBIgXABQgfABgZAFQgGABgCgGQgBgEAFgCIAagIQALgDAFgDIgBgBIgFgDIAAgBIgcgEIgdgBIgvAIQgcADgSgGQgHAAgLgCIgSgDQgmgBgKgBIgBgBIABgBQAXgDAgAAIANAAIgfgHQgzgJgtACQgzAEgZABQgrACgegOIAAgBIgrAAIgYgBQgNgBgKgGQgEgCAAgFQABgEADgDIADgCIgQgCQgHgCgIgKQgKgMgHgBIgSgBQgKAAgHgDQAAgBAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIABgBQAHABAOAAQAOgBAHACQAEABAHAGIAKAJQAJAGAQgBIAbAAQAOgRAkACQAeACAPADQAaAEAPANQADADAAAEIASABIAQgCQAJgBAHABIAhgCQAeAAAkACIAAAAIABgCIgKgBQgJgBgFgHQgEgHAEgHQAHgJAUgFQhPgGhEAIQgqAGhDgCQhJgEgkgBIgugBQgggCgNAIQgGADgEAEQASADAUABIAbAAQAQAAAJAHQACACABACQAAAEgCADIgFADIARAGIAmALQAXAJAHASIgBACQAGABAHADQACABABAEQABAEgDACQgaAMgXgEIgFgBQgHAHgZADIgIAAQABAJgIAGQAXAJANANQASgEATgGQAFgBAGAEIAKAHQANAGAWABIAYAAQAOABAGAJQAFAGgFAGQgJAMgUgDIgBABIAgAHQAvALAngBIAkgFQAVgDAOAFQADABABAEQABADgCADQgMAQgbAEIAsAEIAxAHQAdAEAVAGQAFgGAMgCQABgGAEgDQACgDAFACIAAAAQgKgJgQgEIgagGIhAgPQgCAAACgGQA/AEAlAMIADgDQAMgJATgGIAfgEQAqgGAbAKIAHACQADAAADADQAUAFAwABQAqABAYAJQABAAAAABQAAAAABABQAAAAAAABQAAABAAABQAAAAAAABQAAABAAAAQgBABAAAAQAAAAgBAAQg8AWhIgNQgLAKgSAEQABARgKACIgDABQgTADgOABIguACIALgBIgLgDIgOADIgDAAQABAGgFAAQgWADgmgIQgygOgKgBIghgEQgUgDgNAAIgvAGIAHADQAAAAABABQAAAAAAAAQABABAAABQAAAAAAABIAKAAQAhAAAGACQAVACAPAKQADADABAEQgBAEgDACQgQAKgVABIgmgBIgUgBQgNAFgLAAQgEADgFAAIgEgBQgHAHgGACQgOAGgagBQgBADgCADQgKALgTgDIgfgKQgJgDgOgCIgWgEQgPADgTABQACAEgDAFQgCAFgFADIBJALIAjAGQAUAEANAJQAEADgBAFQAAAGgFABQgQAFgUgDIglgGIhqgOQgVAGgXgBQgNgBgbABIADABIAgAPQATAIAPgBIAhgCQASgCAOABQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAQgXAHgqABQgjABgOgHQgWgKgMgEQgSgGgRAGIgMAFQgBAFgEADQgNAKgZACQAYABAUAJIAXAKQANAHAHAJQALgHAKgBQAQgFAOgBIAVgBQAMABAIADQAYALAKACQADABAtABQAhACAPAKQARgDAXACIAnAGQAQACAgAHIALgBQADABAIAAIAkAAQAQAAAKgOIADgBQBAgTA9APIAqAKIAoAIIAWACQALADAIAIQACACAAAEQgBADgCABQgLAHgOAAQgHAAgVgDIgRgEQgPAFgnAIIgdAEQgNAFgKAKQAcACAkgEIBAgJQA2gHBYAKQA1AHBigIQgCgCACgEQAJgKAOgEQAJgDASgBIAiAAQgBgMgMgEIgfgGQgogFgqAAQg1AEgdAAQgxgBgfgPQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIAAgCIgtgBQgFAEgFgIQggACgSgJQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAAAQAAgBAAAAIABAAQgngHgQgBQgkgEgggJQgVACgrAAQgrAAgsgOIgIAAIAFgBIgUgHIgBgCQABAAAAgBQAAAAAAAAQAAAAABAAQAAAAABAAIAeAIIAJgDQAbgGAHgBIASACIARABIAdgEQARgBALAHQACABAAAGIAkgGIgHgIIgDgGQggAEgXgNQgCgCABgEQABgFADAAQAoADAkgHQAogJANACQAzADA9AZIACADQAAABAAAAQAAAAAAABQAAAAgBAAQAAABgBAAQgWANglgLQgxgPgMAAQgIABgjAGQATAQAkACQAUACAngBIBAABIAPABQAKAAAGACQgLAGgDANIgnABQgFAAgEABQAdgBA6AAIATgCIABgBQATgNAhACIADAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIADgCQgsABgZgOIgBgCIABgCQAUgMAhgBIgogDQgVgDgQgEIgBgCIABgBQAkgQBMAKQADgGAHgCQAEgBAIgBQAugNA9AIIAAAEIAlACQANgKAYAAIAmACIAIAAIglgEQgFAAgDgEIgqAFQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQABAAAAAAQALgHAPgEQgSgBgcgFIgsgIIAAAAQAWACAigCIA5gEIAUAAQAKgIAPgBIAagBIAPgBQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAAAABAAIByADQAQgFAigEQArgDAaAHIAGACQACgBAFACQAUAEAvACQArABAYAGQAAABABAAQAAAAABABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAQggAJghABIALAEIA8gCQASgCAXgDIApgJIgugKQgfgHgfgEIgWgCQgNgBgIgDIgCgCIABgCQARgJAbAEIAuAJIBJANQAbAEAJAEQAYABATAJIAcAPIAjgCQAUgBAOgCQAMgCAUgFIAhgJQBHgNAnAQQAEACAAAFQAAAFgEACQgRADghgDQgjgDgPACQgKABgbAGQAYANAJACQAOADArgBQAmADAMAWIATAAIAUAAQAwgEASgEQgOgEgQgHIgBgCQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAIAqAMQAXgHAJAAIASABIARABIAcgDQARgBALAGIABACIAlgGIgGgJQgDgEAAgCQghADgWgOQgDgBABgGQACgFADABQArADAhgIQAmgJAPABQAyAEA9AbQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQABABAAABQAAAAgBABQAAAAAAAAQAAABgBAAQgWAOglgMQgxgQgMAAQgGABglAGQAUASAjACQATACAogBIBAABIAZABQAOACAIAJQADADABADIAYABIBFADQApACAbALQACABABAEQAhACANAKQACABABAEQAMgLAVgEQARgEAOACIAkAFIAjAFQAJAAASgBQARAAAIAIQAHAEgFAIIgEAEIAQAGIAlAMQAVAKAIAQQANgKAbA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AAEgCABIgCABIBWAEIAwgBQAdABASAIQAEACAAAGQABAFgFACQgUAGgggEQgkgGgQgBQgqgFgsgNQgRAFgUgEIAGAEQAVAAAPAHQAdgFAPAHQABABAAAAQABABAAAAQAAABAAABQAAAAAAABIALAAQAfABAIABQAUADAQANQADACAAAFQABAFgEACQgGAEgEACIAmAHIAWADQALAEAJAHQABACAAADQgBADgCACQgLAHgOgBQgHABgVgEIgRgDQgOAFgoAHgEhGKgBAQgVADgIACQgOADgIALQAbACAlgEIBAgJQA5gHBUAKQA1AHBhgIQgCgDACgCQAJgKAPgFQAJgCASgCIAiAAQgBgMgNgDQgKgDgUgDQgpgFgpABQg1ACgcAAQgygBgegOQgBAAgBAAQAAAAAAgBQAAAAAAgBQAAAAAAAAIABgDIACgBIAAABQADAHBtgNIAXgBQg/gSgFAAQgngHgWAUQgOgPAHgJQAGgJATgEIgDAAQgEAAAAgHQAAgFAEgBQAmgEAfACQAdADAngLIAWgFIgvgDIgwgDIg6ACQgTAIgpACQgoACgTgJQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAPgHAkgEIgpgCIghAAQAIAAAHADQAEABAAAFQABADgDAFQgJANgQAGQgKADgUACQgnAEgqgIQgUgDgqgOQgogPgWgDIgBABQgEACgEAAIgJACIgaAEIgaAGIgkADQgWADgOgBQgGACgEgGIgPAHIgDAEQAkACANASIAkADIADAAIAmgEQAYgCAPgFQAagGAIAAIARABIASABIAdgDQARgCALAGQACACAAAEQAAAEgCABIgCABIBWAEIAwgBQAeABAQAIQAFACABAGQgBAFgFACQgTAGgggEQgkgGgQgBQgqgFgtgNQgQAFgUgEIAHAEQATAAAQAHQAdgFAQAHQAAABAAAAQABABAAAAQAAABAAABQAAAAAAABIALAAQAfABAIABQAUADAQANQADACAAAFQAAAFgDACIgKAGIAmAHIAWADQAMAEAHAHQACACAAADQAAADgDACQgLAHgPgBQgGABgVgEIgSgDQgOAFgnAHgEA+QgBDIAbABIAqAAIAWgEIASgCQALgBAIACIBTgBIgVgBQgQgDgigHQghgI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BgOgJQgFgEABgGIAAgCIhGAFIAAABQgUAIgdAIIgxANIg7ASQAJAGALADIAXAGQAPADAJAEIAogCQALAAAngCIgIgFQgEgDABgFQAAgEAEgCQASgKAZAAQAPAAAdAEIAvAGIACAAIABABIBgAQIAkADIAPgEQAFAAADADIAJAAQAUgCARABIAQgBIAUABgAEph5IgPACQADACABAEIBHgBIAMgHIgBAAIgggBIgnABgEBEggB5IAZgFIgUgCgA8Kh5IAagFIgUgCgEA/IgB8IAGgBIgLgCgEghhgB8IAGgBIgMgCgACNiRQADAEACAFIATAEIACABIAbACQAQgEASABIADAAIABgCIACgBQgtABgYgNIgBgBIABgDIAHgCIgDAAQgPABgNAHgAA9iDQAKgFAGgFIgBgBQgEgDgBgDIAAAAIAAgCQgJgEgagDQgPgCgTAAIgXAGQAHADAGAEQADACAAAEQAAAEgDACIgBAAIAVABIAYgBIAFAAQAMAAAIADgAIMinIgCABIAKAEQAOAGAAAUIAkACIACgBIAJgCIAAAAQALgKATgMIgLgBIgqAAQgbgBgPgHgEAgJgCLIAaACIAVgCIgBgCQgDgGACgFQACgGAGgCIgMgCQgIACgOgEQgOgEgHAAQgJAAgSADQgSADgJgBIgigBIAdAMQAaAMAaACQADgCAEAAIACABgEhAggCLIAZACIAWgCIgBgCQgEgGADgFQACgGAFgCIgMgCQgHACgOgEQgPgEgHAAQgIAAgSADQgSADgJgBIghgBIAdAMQAZAMAaACQADgCAEAAIACABgEBErgCcQABAHgBAHQAgAAAfABIAFABQAFgEAJgCIgsgJQgPgCgLAAIgMABgA7/icIAAAOQAgAAAfABIAGABQAFgEAIgCIgrgJQgPgCgMAAIgMABgEBHcgCSIALABIANAAIACgBgADHisQgIAGgLACQgBAHgEADQASgIAdgBQABAAAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQA1gGA2ACIASgDIgUgEQgTAHgdgBIgygDIgfgBgAKYi+QABAEgDAFIAZAFQAOgMAZgHIgrAAQgJADgKACgAN9jEQANAGAGALIAhgEQAUgCAOABIAZgEIAtgDQAcgCARgDIgIgDQgTgFgXAAIgpAEQgwADg+gCQAAAAAAABQAAAAAAABQAAA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QACIgfADIgeAAQgRgBgMgGIAAAAIg3gHQgqgDgpgMIgKABQgNABgPgBIgLAAQgcgBgTgDIgkAFQgWADgbgBIgxgCIABACIAAAAQATgBARAGQAkAJAZABIAagBQAPAAAKADIADAFQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgRAIgagBQgOgBgdgGQgtgIgMAAQgfgBgZANQgGADgCgFQgEgFAGgDQAOgJAQgFQgTgJgKgDQgTgEgpgGQgWgEgkACIg6ABQgCAFgFAAQgLAAgMgFIgVgLQgbgCgRgIIAAgBIAAAAIgYAAIgkACQgvADg+gCQADAFgHAEQgMAFgUgCIgigFIg6gDQAAACgFABIgDAAQgZAEgagBQgVAAgHgBQgGABgHAAIgBAAQABADgCAEQAmAFAZASQAAAAAAAAQABAAAAABQAAAAAAAAQAAAAAAABIgBABIg5gDIg5gEIgqAAQgbAAgOgIIgFABIgCACQgLADgJAAQAcAHAOAOIACADQAbAAAaADQATACAegBIAvgCQBAgBAdACQA2ADAlAPQAAAAABAAQAAAAAAABQABAAAAABQAAAAAAABQgBABAAAAQAAABAAAAQgBAAAAABQgBAAgBgBQgOgBgigGQgegGgSgBQgvgDgwABIgzADIgyACQADAFgEACQgJAIgPABIgagCQgZgDgQgLQgQADgXgBIgogDIgLgBQhNgCgcACQgNAAgkAHIABACQASgCA1ABIBDgBQApABAZAKQAFABAAAFQAAADgFABIgEABIBRAHQADARASAEIAEABIgBAHIAOABIBSAKQAxAHAhgBIBogBQgOgEgFgMQgFgLgDgDQgGgGgLAAIgegBQgogGgUgBIgBgBIABgBIAeABQASADAMgBQAegBAWACQABAAABABQAAAAABAAQAAABABAAQAAAAAAABQAFARAJAHQAHAEATAEIAMABQAugLA0ABIAEAAQAtgIAPABQAXgFATABQAMAAASAIIAbANQAVAKAuANQAOAAAIACIACADQBfgBA6gFIA7gFQAhgBAaACIAAAAQANgDARABIAeAFICaAZIAzACIAzADQAGgBAlgFQAdgFAPAFIADAAQADgBADABIBYACQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAAAAAIg7ADIAmAHQAZAEAOAEQALAEADAJQAXADAsACIAJgBIAJABgA0bmNIABAAQASgKAcgEIAXgEIg0gKIgSAAQgDgBAAgEQAAgFADABIAUgDQANgCAIABIAEABQAygGAYgBIAIgNIgIgEQgCgCgHgHIgIgCIgBAAIgDAAQgQACgagDIgqgEQgYgBgyADQhVAHg9gIQhMgKhLAIQhNAIgpgJQgDAGgHABQgGABgGgDIgdgPQgJgCgEgFQgSgJgRAAIggAAQgTAAgMgIQgHgEACgIIgPgDQgpgMgUgCQgUgDgXAFQABACgCAEIABABIAAAAIgFADQAsADAdAPQADADAAAEQAAADgDACIgFADQAAAEgEACQgPAHgUAAIglAAIghgBQgTgBgOgDIgBAAIgMACQgTAAgVgFQgKgCgYgBQgVAAgMgEQAAAAgBgBQAAAAgBAAQAAgBAAgBQgBAAAAgBQAAgEADAAQAPgGAYACQAgAEAHgBIASgBQARgBAFgCQgBgGAEgFQADgHAHAAIAKAAQgZgCgagEQgdgCgPgEQgbgHgJgRIABgCIACAAQALAGAsAFIArAFQAjADASgBIAQgBQAHAAAHAEQATgGAaABIAwAFQAQACAhAHQARgEAZABIArgKQBCgRA8AMIBRAQIAXADQALADAIAGQACADgBACQAAABAAABQAAAAAAABQgBAAAAABQgBAAAAAAQgLAHgPgBIgbgCIgSgEQgPAGgmAGIgdAEQgOADgJAKQAcABAkgEIBAgHQA6gGBUAJQA1AGBigHQgCgCACgDQAJgKAOgDQAJgCASgCIAiAAQgCgKgMgDIgOgDQgZgCgMgDQgJABgKgCIgqgBIgUABIgRABIgCgBQgjABgSAAQgdgBgWgGIgLgBQgEAAgBgEIgDgBQAAAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAgBIAAgCQABgBAAAAQABAAAAAAQAAAAAAAAQABAAAAABIACABQAAAAABgBQAAAAABgBQABAAAAAAQABAAAAAAQAkgEAgACIAKABIAkgEIAWgEIAXgFQhAgEgfgBQgMgBgvADQgQAFgsAEQgpACgRgJIgBAAIg3gHQgqgDgpgMIgKABQgMABgPgBIgLAAQgdgBgTgDIglAFQgUADgcgBIgwgCIABACIAAAAQATgBARAGQAkAJAZABIAZgBQAQAAAJADIADAFQAAAAAAABQAAAAAAABQAAAAgBAAQAAABgBAAQgRAIgZgBQgPgBgcgGQgugIgMAAQgegBgaANQgFADgDgFQgDgFAFgDQAOgJARgFQgTgJgKgDQgSgEgqgGQgXgEgjACIg7ABQgCAFgFAAQgKAAgMgFIgWgLQgbgCgRgIQAAAAgBgBQAAAAAAAAQAAAAABAAQAAAAABAAIgYAAIgkACQgwADg9gCQACAFgHAEQgMAFgUgCIghgFIg6gDQgBACgEABIgDAAQgaAEgagBQgVAAgGgBQgGABgJAAQAAAEgBADQAnAFAYASQABAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAABIgCABIg4gDIg4gEIgqAAQgbAAgPgIIgEABIgCACQgLADgKAAQAdAHANAOIACADQAbAAAaADQAUACAdgBIAwgCQBAgBAcACQA2ADAlAPQABAAAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBgBQgPgBghgGQgfgGgSgBQgwgDguABIg0ADIgyACQADAFgEACQgIAIgPABIgagCQgZgDgRgLQgPADgYgBIgngDIgMgBQhMgCgdACQgMAAglAHIABACQASgCA1ABIBEgBQApABAZAKQAEABAAAFQAAADgEABIgFABIBSAHQACARATAEIADABIgBAHIAPABIBSAKQAwAHAigBIBngBQgPgEgEgMQgFgLgDgDQgFgGgLAAIgfgBQgngGgVgBIAAgBIAAgBIAeABQATADALgBQAegBAWACQAEABABACQAEARAJAHQAHAEATAEIAMABQAvgLAzABIAEAAIAegFQASgEAMACQAXgFATABQAMAAASAIIAbANQAVAKAvANQAOAAAHACIACADQBfgBA6gFIA8gFQAhgBAaACIAAAAQANgDARABIAdAFICaAZIAzACIA0ADQAFgBAlgFQAdgFAPAFIAEAAQACgBADABIBYACQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAgBAAIg7ADIAnAHQAZAEAOAEQAKAEAEAJQAWADAsACIAJgBIAJABgEBRegGdIAfAHQAyAJAlgBQAKAAANgCQgKgCgQgDIgZgEIg/gJQgIAGgTgCgAvMmdIAgAHQAyAJAkgBQALAAANgCQgLgCgQgDIgZgEIg/gJQgIAGgTgCgAo/mgQgNABgkAGIABADQAVgBAYAAIAYgKIgVABgAnUmXIgbgHQgFAAgLAGQAdAAAOABgAu0m2QAmADAgABIA1ACQAhADASAJQAEACAAAEIBKgCIABgBQASgNAiABIACAAQAAAAAAAAQAAgBAAAAQABgBAAAAQAAAAAAgBIADgBQgtABgZgPIAAgCIAAgCIAJgEIgWgFIgUgEQg1gJgrACQgzAFgZAAQgsACgdgOIgrAAQgfAAgQgHIgCgCQgHADgQAAIgJABQABAJgHAFQAXAIAMAMIAmgJQAFgBAGADIAKAGQANAIAXABIATAAQALAAAHADgAi6mlIhOAGQAlABA4gBIBfgBIgPgCQgggDgjAAIgcAAgAd4mxQACAFgBAFQAXAAAaAEQAkAGAhgHQAAAAgBAAQAAAAgBgBQAAAAAAgBQgBAAAAgBIgBgHIgEgCIgMAAQgDABgEgCIgdgCIhCgCgEhCygGxQADAEgBAGQAWAAAbAEQAkAGAhgHQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBgBIgBgHIgDgCIgMAAQgEABgDgCIgdgCIhCgCgEAx1gIOQAIAGAUAIQAFADABAHQABAGgFAEIAGABQAYgCAegCIAEgBQgsgJAKgSIgmgGIgWADgEgu1gIOQAJAGATAIQAFADABAHQACAGgFAEIAFABQAZgCAdgCIAEgBQgrgJAKgSIgmgGIgXADgAk/nzIACgCIgMgBIgOABIALACIAGgBIAHABgEBNtgIaQAGAEABAHQABAHgFAEIAmAEIAUgGIAFgDQgggHgDgNQgTABgSgBgAy8oaQAGAEAAAHQABAHgEAEIAmAEIATgGIAGgDQghgHgCgNQgTABgSgBgEAkzgIIIAKgDIgQAAgEg72gIIIAJgDIgQAAgEAvpgISIgWAGQA9ABBCgEQgtgEgUAAIglgBQAAAAAAAAQAAABgBAAQAAAAAAAAQgBABgBAAgEgxAgISIgXAGQA9ABBCgEQgtgEgUAAIglgBQAAAAAAAAQAAABAAAAQAAAAgBAAQAAABgBAAgEBNkgIpIAHgDIgRgBgAzFopIAGgDIgRgBgEAqCgI4IgCgBIgFABIAHAAgACZpVQADAEgDADQgDAFgEACIBEAIIgKgFIAAgCQBBAJACgGQABgFAEgBIgMgBQgJAAgXgIIgWgEIgYgDQgOADgTABgEBFrgJXIgPgGIgaAFIApABIAAAAgA6/pXIgOgGIgaAFIAoABIAAAAgEAwngJfIgSADIAJACIAggEIgVgDgEgwCgJfIgSADIAJACIAfgEIgUgDgAkzpwQA4ABAsALIABgBQgYgEgOgHQgEgCABgDQABgEADAAQATgHAYAAQAOgBAeADQAvAEAiAEIBLAMIAPAAIAagEQAEgCAEAEQAVgBASAAIgjgGIgWgCQgNgBgJgDIgBgCIABgCQAOgIAUACQgSgGgIgHIgDAAIgmgEIgegEQgZADgVAAQgNAGgRAAQgRgBgOgGQgFgDABgEIAAgBIgSABIg0ACIgBABQgTAFgdAGIgyAJQgnAJgUAEQAJAEALACIAYAFIAYAEQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAABIA7ACIgrgHQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAIAAABgABip5QAiAHApAGIADABIAJgCQgYgFgNgFIgDAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIAAgDIgNAAQgZADgdgCgAemrFIgzADIgBABQgUAGhNAOIg7ANQAJAFAKABIAZAFIAXAEQABABAAAAQABAAAAABQAAAAAAAAQABABAAAAIBAADIBDACQgigEgTgKQgDgBABgEQABgEADgBQASgGAYAAQAOAAAeACQAlADAsAGIBVAMIACAAIAdgFQAFgBAEADQAzgDAgAIIABABIAdgCQAIgBAOgEQgVgEgPgGIgCAAQgBAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIgBgCIgMAAQgeADgfgDQgmgFgMgLIgEgBIgngEIgdgEQgdAEgSgCQgMAIgSgBQgQgBgOgGQgGgCABgGIAAgBgEhCCgLFIg0ADIAAABQgVAGhNAOIg8ANQAJAEAMACIAXAFIAYAEQABABAAAAQABAAAAABQAAAAAAAAQAAABAAAAIBAADIBFACQgkgEgRgKQgEgBABgEQABgEACgBQASgGAaAAQAOAAAeACQAjADAtAGIBUAMIACAAIAegFQAEgBAEADQA0gDAfAIIACABIAcgCIAXgFQgVgEgPgGIgDAAQgBAAAAgBQgBAAgBAAQAAAAAAgBQgBAAAAgBIABgDIgBgCIgNAAQgdADgfgDQgmgFgNgLIgDgBIgogEIgdgEQgdAEgRgCQgNAIgRgBQgRgBgOgGQgEgCAAgGIAAgBgAAdtDQAJAIAYAKQAFADABAGQABAHgEAEIAmAEQAJgEAKgCIAGgDQgrgJAKgRIgZgEQgYgDgNAAIgEAAgEAidgNYQAGAEABAGQABAGgFAEIAmAEIATgGIAHgDQgrgJAJgRIgZgEQgVgDgTAAQAIAIAYAKgEg+NgNYQAGAEABAGQABAGgFAEIAnAEIATgGIAFgDQgqgJAKgRIgZgEQgVgDgUAAQAJAIAXAKg");
	this.shape_52.setTransform(546.65,273.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-83.4,0,134.5).s().p("AhAALIgEACIAAgaIADABQATADAvABQAqABAYAGQABAAAAABQAAAAABAAQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAQglAKgqAAQgZAAgbgDg");
	this.shape_53.setTransform(15.875,244.527);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-73.8,0,144).s().p("AhEggIAOADQBBARAPACIAWAFQAMADAHAHQACADABAEQgBADgDACQgKAIgPAAIgcgEIgRgFQgOAHgnAIIgMACg");
	this.shape_54.setTransform(16.05,235);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-114.1,0,103.8).s().p("ABXA3IglgHQgWgDgQABQgqAHgVABQgLABh1gIQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBgBAAAAQAAgBAAAAIAAgDQgBgFAEAAQAUgBAyADQAsADAagDQBFgJAuAJQAlAHAggIQgBAAgBAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIgBgHIgEgDIgMAAQgEAAgDgBIgdgDIhNgDQhngDg8gHQhtgRg2gFQgfgCgtABIhMADQgBAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABgBIBQgIQAtgDAkAEIBSALQAxAHAhAAIBngCQgOgFgFgMQgEgNgEgEQgFgFgLgBIgegBQgogGgUgCQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAgBABAAIAeACQATACALAAQAigBASACQADABABACQAFATAJAHQAHAFATAEIANACIANAAQANgGAWgCIAkgBIAlgHQAYgFAOACQAagGARABQAMABARAIIAcAPQATAJAwAPQAQAAAGACIACADQBLgBAzgDIgBAOQhXAPhKgOQgTAFgSACQgLABgVgCQgVgCgLABQgLACgxANQgaAGgTAAIgQgBg");
	this.shape_55.setTransform(1038.775,275.2843);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-90,0,127.9).s().p("ABbANIgqgFQgjgCgkgHQgQADgXgDQgSgEgeADIgDgBQgJgCgGAAIgDAAIgHAAIAVgDQAVgFAHAAIAdABIAXgBQAPgBAIAEQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAABQgBAAAAAAQAAABgBAAQAAAAgBAAIgBABIBGACIAoAAQAYAAAOAEQAEABAAADQAAAEgEABQgKACgPAAIgSgBg");
	this.shape_56.setTransform(893.175,251.1082);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-77.8,0,140).s().p("AANgBIAGAAIABABIgBABIgmABg");
	this.shape_57.setTransform(907.225,238.95);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-83.1,0,134.7).s().p("AgEAOQgRgBgKgEQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAAAABAAIAIgCQg/gDgNgDIgBAAIABgBQAcgJBAAFQAEgGAOAAQAngIAwAFQAAAFADAFIgggDQACADgFACIgPACIAJACIgTADQgMACgFAKIgcgDg");
	this.shape_58.setTransform(925.675,244.2789);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-93.7,0,124.2).s().p("AAHAFQgbgChMABQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQArgJA1ABQAPAAAggCQAdgBASAEQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAAAQgBABAAAAQAAAAgBABQgRAGgaAAIgtgDg");
	this.shape_59.setTransform(839.0042,254.84);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-191.8,0,26.1).s().p("AFfBGQgCgIAIgDIApgRQAJgEADgDIgBgBQgDgCgCgDIgBgBQgIgDgdgEQgQgCgVAAIg7ANQgjAFgXgIQgRACgbgGQg1AKhRgIQgRgBhygRQgIgBgFgIQgFgIAFgJQAHgMAUgFQhMgIhHALQgqAGhDgDIhtgEIgvgDQgfgBgNAJQgJAFgIAOQgIALgMAGQgeAPg5gGQgjgEg1gNQgzgSgbgHQgvgNgZAbQgYgeAlgNQAegLAaAGQAaAGAiATQAYAOAbADQAFgCAEAAQANADANAAIAWgCIgCgCQgDgHACgHQADgHAGgCQCAgnCjAHQAnACBggDQBWgCAwAEQAmADARAHQAjAOgYAdIAAAAIAAAAQABgCASgBQgBgFACgGQADgFAEACIBBAHQApAFAaABIA6ACQAiAFAVAPQAFADgCAJIAhgHQA4gMAigFQAygGAyACIAPAAIABgBQATgKAgAAIA1ADIAeABQA+gPBRAQQAxALBYAeQASAGgCAUQgDATgSAAIgwgBQgcgBgSAEIgbAIQgPADgMgFQgWAFgSgDQgBgBgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAABAAQAJgHAkgQQAIgGAMgFQgKgHgcgHQgegJgTgBQgUAGgggBIg0gDIgigBIgCACQgIAFgLABQgDAKgJAAQgRABgOAGQAEADABAFIAUADIADABIAmACIArABQAZABAQAGQAGADAAAFQAAAGgGACQgSAGgdgCIgwgEIgxgCQgIACgFgCIgDgBIgEgBIgeACQgkABgkAIIgDAAQgGAAgCgHg");
	this.shape_60.setTransform(823.6381,352.996);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-171.3,0,46.5).s().p("AhaAzQgCgIAHgDIAmgRQAJgEADgDIgBgBQgDgCgCgDIgBgBQgKgEgYgCQgQgCgTAAQgvALgIABQghAFgVgIQgNACgSgEIgfgIQgdAAgOgDQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIABgCIAMgCIg5gMQgjgIgXgHQgGgCACgLQACgLAGADIA+AHQAmAFAYABIA2ADQAgAEATAPQAFAEgBAJIAfgHQA0gNAggEQAqgGAyABIAPAAIAAgBQASgKAeABQARAAAhADIAcAAQA5gPBMAQQAuALBTAfQAQAFgCAUQgCATgSAAIgsgBQgagBgSAFIgZAHQgOADgLgFQgTAFgTgDQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAIgHAigQQAHgGAMgFQgKgIgagFQgZgIgUgCQgTAGgegBIgxgDIgfgBIgCACQgIAFgLABQgCAJgJAAQgPAAgNAHQAEADAAAFIAVAEIAkADQANABAbgBQAYABAPAGQAFADAAAFQAAAGgFACQgRAGgbgCIgtgEIgugCQgJACgDgCIgDgBIgEgBIgbACQghAAgiAJIgDAAQgFAAgCgHgAgmgFIABgCIgGAAg");
	this.shape_61.setTransform(744.8611,332.5459);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-126.9,0,90.9).s().p("AgBAFQgmgBgMgCQgIgGgIAAQAZgBAyACIAdgBQARgBAMADQABABAAAAQAAAAAAAAQABABAAAAQAAAAAAAAQAAAAAAABQAAAAgBAAQAAAAAAABQAAAAgBAAQgOADgUAAIghAAg");
	this.shape_62.setTransform(817.325,288.1083);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-126.4,0,91.3).s().p("AAAAFIg4gFIgBAAIABgBIA5gEQAjgBAWAHQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAAAQgPADgVAAIgWgBg");
	this.shape_63.setTransform(857.625,287.6111);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-128.8,0,89.1).s().p("AA8ALIgxgKQhBgMg4gGIAAAAQA0AEA9ALIA1AFQAiADATAHQABABAAAAQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAAAQgBABAAAAQgUgBgdgHg");
	this.shape_64.setTransform(838.755,289.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-120,0,97.9).s().p("AAkAHIgwgBIgmgBQgVgCgQgHQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAABgBQAZADA9gDQA3gCAfAGQAAAAABAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAABAAAAQgBABAAAAQgBAAAAAAQgRADgZAAIgIAAg");
	this.shape_65.setTransform(969.38,281.1164);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-121.6,0,96.3).s().p("AAAAFQgwgBgTgFQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQABAAAAAAQAAgBABAAQAZgBAzACIAdgBQARAAAMADIABACIgBACQgOADgUABg");
	this.shape_66.setTransform(992.8438,282.7583);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-118,0,99.8).s().p("AhugBIAAgBQBugMBtAQQABAAAAAAQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAAAABQAAAAgBAAQggACgiAAQhGAAhTgJg");
	this.shape_67.setTransform(994.425,279.2324);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-121,0,96.9).s().p("AAAAGQgmgFgTgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIA5gEQAkgCAVAIIABABIgBABQgOAEgUAAIgXgBg");
	this.shape_68.setTransform(1033.3125,282.1917);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-123.5,0,94.3).s().p("AA8AMIgxgLQg/gOg6gFIAAgBQAzAEA+AMIA2AGQAhAEATAHQABABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgUgBgdgHg");
	this.shape_69.setTransform(1014.4175,284.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-139.2,0,78.7).s().p("AAAAHQhLgLgdACIAAAAQAWgMAdACQASABAiAGIA0ADQAgACAUADQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAAAQgRAEgWAAQgcAAgkgGg");
	this.shape_70.setTransform(1072.25,300.313);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-135.7,0,82.2).s().p("AhmAFQgEgBABgEQABgDADAAQBjgOBsAWQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAQgTABgigCIg0gCIgzAEIgQAAQgVAAgOgEg");
	this.shape_71.setTransform(1068.9972,296.877);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-123.5,0,94.3).s().p("AhJAUQgcgHgFAAIgeAAQgRgCgMgGIgKgBQAAAAgBAAQAAAAAAAAQAAgBAAAAQgBAAAAgBQgIgBgOgCIgWgFQgQgEgXAIQgeAJgHABIAAgBIAdgPQATgKAMABQAbAAAqAMQACgDADABIALACIAfgLQAWgIAKAEQASgBAkADIAFAAQAYgDAkAFIAeAFQARAEAJAJIABAEIAdgCQAOgBASACIAgAEQAQACATgCIAkgHQAfgFAPADQAAAAABAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAAAAAABQgBAAAAAAQgNADgXAEIgkAGQgYAFgegIQgSgFgZgBIgrAAIgBAAIgCAAQgcgBgRgFQgPAGgVgBIgkgDIgmgEQgYgEgPACQAvABAYALQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAgBAAQgHAFgKAAQgHAAgIgCgAhygCQgCgBgCgDIgJADIANABIAAAAg");
	this.shape_72.setTransform(953.2125,284.7072);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-44,0,173.9).s().p("AAkAIIgwgCQgbABgLgBQgWgDgPgHIAAgBIAAgBQAaADA9gDQA3gDAfAGQABAAAAABQAAAAABABQAAAAAAABQAAAAAAAAQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBAAQgSAEgZAAIgHAAg");
	this.shape_73.setTransform(606.8125,205.1278);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-52.3,0,165.6).s().p("AAtANIgngEIhWgHQgHAAACgIQACgIAFACIBUADIAnABQAXABAPAGQADABABAEQAAAGgEAAQgMADgPAAIgLAAg");
	this.shape_74.setTransform(694.7938,213.4255);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-49.2,0,168.6).s().p("AA6ANIg6gJIg6gEQglgCgVgGQgBAAAAgBQAAAAAAAAQAAAAAAgBQAAAAABAAQAXgHAjADQAUABAmAEIA6ADQAjADAXAJQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAABAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgNADgPAAQgOAAgQgDg");
	this.shape_75.setTransform(696.925,210.3593);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-53.5,0,164.3).s().p("ABrAoQgqgBghgFIhBgKIgkgFQgWgDgNgHQgBgBAAAAQgBAAAAAAQAAgBABAAQAAAAABAAIAKgEIgvgDQgcgCgSgGIgBgCIABgCQAWgLAhAAQAWgBAjAFQAFgKARgBQBKgYBeAhQABAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAABAAABQAAAAgBABQAAAAAAABQgBAAgBAAQgPAFgZgGIgqgHIgPgBQABAHgFACQgHAEgKACQAVAHAQAPIABADIAGAAQAkAFAogBIAigBQAVgBAOAFQADABAAAFQAAAEgDABQgQAFgXAAIgogBg");
	this.shape_76.setTransform(669.5,214.6863);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-60.4,0,157.5).s().p("AhmAFQgEgBABgEQABgDADAAQBjgOBrAWIABACIgBACQgTAAgigCQglgCgPAAIgzAEIgSAAQgTAAgOgEg");
	this.shape_77.setTransform(706.4389,221.5254);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-58.7,0,159.1).s().p("AD0BMQgZgDgNgDQgIABgNgEQgPgFgHAAQgJAAgSAEQgSADgJAAQhVgFgfgEQgGgBAAgGQAAgHAGgBQAigFAhADQAdADAngNQANgEAJgBIgvgDQgggEgPAAQgNgBgtADQgNAGgQACIgfADQgTACgLgBQgQgBgNgHQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAIACgEQAQgJAjgEIgpgCIgvgCQgZgDgQgMQgXAIgfADQgTABgkAAQg3AAg2gZIgBgDQAAAAAAAAQAAgBAAAAQABAAAAAAQAAAAABAAQBIAXAugEQAPgBAcgGIAqgIIgHgIIgCgGQgiADgVgOQgDgCABgGQABgFAEAAQAqAEAhgJQAngJAPABQAxAEA+AcQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgWAPgmgNQgwgRgNABIgqAHQATATAjACQAUACAngBQAVABArABIAYABQAOACAJAIQACADABAEIAZACIBFABQAoACAcAMQACAAABAEQAhACANAMQADACAAAFQAAAEgDADIgBAAIAWABIAdgBQARAAALAHQAQgIAagBIAcAAQAPABAMAHQADACgBAFQgBAFgDABQgLAEgPAAIgbgBIgoAAIAAAAQgHAFgIABIgQABIgXABIgHAAIgRgBg");
	this.shape_78.setTransform(648.5861,219.8763);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-44.2,0,173.7).s().p("ABJAwIgxgMIgwgKQgEABgDgCIgDgBIgEAAIgcABQglABgfAGQgIACgBgHQgCgHAGgCQgNADgSAAIgggBQgxgBgTgGQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBAAAAQABAAAAAAQAOgBAYABIAnABIAdgBQARAAAMADIABACQABAAAAAAQAAABAAAAQgBAAAAABQAAAAAAAAIAtgQIgCgBIgEgEIgBgBQgKgDgZgCIgZgBIgJgBQguAJgMABQghADgWgGQgHAAgPgDIgWgEIgcAAQgRgBgMgCIgBgBIABgBQAfgFAjABIAXAAIACAAIgKgBIAAAAQAsgGA2AAQAngHAfgEQArgFAyABIAOAAIABAAQARgIAeAAIAxACIAcAAQA6gLBMANQAvAJBRAZQARAFgCAOQgCAQgSAAIgsgBQgagBgSAEQgRAEgIABQgOADgLgEQgXAEgPgDQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQAEgDAMgEIg3gGQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAgBAAAAIApgEQAagCARACQAHgEAKgDQgJgGgbgGQgbgGgTgCQgTAFgdgBIgxgCIgggBIgBACQgJAEgKABQgCAIgJgBQgOABgOAGQAEACABADIAUADIAkACIAoABQAYAAAPAFQAFACAAAFQAAAEgFACQgRAFgbgBIgtgEIgqgCIAgAHIA2AGQAhAEATAIQABAAAAABQABAAAAABQAAAAAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAAAAAQgUgBgdgHgAkLgSIAKAAIgTgDIAJADg");
	this.shape_79.setTransform(650.5608,205.3355);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-5.9,0,211.9).s().p("AAkAGIgwgBIgmgBQgVgBgQgFIAAgBIABgBQAZACA9gCQA3gCAfAFQAAAAABAAQAAAAABABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQgBAAAAABQgBAAAAAAQgRADgYAAIgJAAg");
	this.shape_80.setTransform(694.075,166.9978);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-7.1,0,210.7).s().p("AAAAEQgtAAgWgEQgBAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABgBQAAAAAAAAQAagBAyACIAegBQARAAAMACQAAAAAAABQABAAAAAAQAAAAAAAAQAAAAAAAAIgBACQgNACggAAIgXAAg");
	this.shape_81.setTransform(717.5688,168.1675);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-4.5,0,213.4).s().p("AhugBIAAAAQBvgKBsAMQABAAAAABQAAAAAAAAQABAAAAAAQAAABAAAAIgCABQgfACghAAQhIAAhTgHg");
	this.shape_82.setTransform(719.125,165.6026);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-11.7,0,206.1).s().p("AAtAJIgngCIhWgFQgHgBACgFQACgFAFABIBUACIAnABQAWABAQAEQADAAAAADQAAAEgDAAQgMACgQAAIgKAAg");
	this.shape_83.setTransform(782.0688,172.8798);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-9.5,0,208.3).s().p("AA5AKIg5gHQhPgCgmgGIAAgBQAYgFAjABIA6AEIA6ADQAjACAXAFQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgNACgPAAIgfgBg");
	this.shape_84.setTransform(784.2125,170.6976);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-6.6,0,211.1).s().p("AAAAEIg5gEQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBIA5gDQAkAAAWAFIAAABIAAABQgOACgUAAIgYgBg");
	this.shape_85.setTransform(758.025,167.7844);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-8.5,0,209.4).s().p("AA8AJIgxgIQhEgKg1gEIAAgBQA6AEA3AIIA2AEQAhADAUAGQAAAAAAAAQABAAAAABQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAAAABQgBAAAAAAQgUgBgdgFg");
	this.shape_86.setTransform(739.1375,169.625);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-12.7,0,205.2).s().p("ABrAcQgsgBgfgDIhBgHIgkgEQgWgCgNgFIAAgBIAKgDIgvgCQgcgCgSgEIgBgBIABgCQAkgMBMAIQAEgHASgBQAmgJAvADQApACAqAKQABABAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAQgPADgZgDIgqgGIgQAAQACAFgFABIgRAEQAUAFARALIAAABIAHABQApADAigBIAjAAQAVgBANADQAEABAAADQAAAEgEAAQgPAEgXAAIgogBg");
	this.shape_87.setTransform(756.8,173.7716);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-20,0,197.9).s().p("AAAAFQhKgHgeABIAAAAQAWgJAdACQARAAAkAFIAzACQAhABATADQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQgBABAAAAQgBAAAAAAQgQADgVAAQgdAAglgFg");
	this.shape_88.setTransform(796.95,181.1423);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-17.5,0,200.4).s().p("AhmAEQgBAAgBgBQAAAAgBAAQAAgBAAAAQAAgBAAgBQAAgCAEAAQBkgKBqAQIABABIgBABQgUAAghgBIg0gCIgzADIgQABQgVAAgOgDg");
	this.shape_89.setTransform(793.7219,178.6103);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-32.1,0,185.8).s().p("AA/ATIg3gJQhSgKgpgHQgHgBACgGQACgGAGABIA+AFQAmADAXAAIA2ACQAgACAUAIQAEACAAAEQAAAEgEACQgQAHgWAAIgQgBg");
	this.shape_90.setTransform(800.9015,193.207);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-16.3,0,201.6).s().p("AD0A2IgmgEQgIABgOgDQgPgEgGAAQgJAAgSADQgSACgJAAQhIgCgsgEQgGgBAAgFQAAgEAGgBQAggEAjADQAeACAmgJQANgDAJgBIgwgCIgvgDIg5ABQgNAEgQACIgfADIgeAAQgRgBgMgFQAAAAgBAAQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBABAAQAAgBAAAAQAAAAAAAAQABgBAAAAQAQgGAjgDIgqgBIgugBQgZgDgRgIQgWAGggACIg2AAQg2AAg3gRQAAgBgBAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAAAAAQBLARAsgEIAqgEIArgGIgHgGIgCgEQghACgWgKQgEgCABgDQACgEADAAQAqADAigGQAngHAOABQAxACA/AVQAAAAABAAQAAAAABAAQAAABAAAAQAAAAAAABQABAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgWAKgmgJQgwgMgNABIgqAFQATANAjACQAUABAngBIBAABIAYABQAOABAIAGQADACABADIAYABIBGABQApACAbAIQABAAAAAAQABAAAAABQAAAAAAABQAAAAAAABQAfAAAQAJQADACAAADQAAADgDACIgBABIAWAAIAdAAQARAAAKAEQASgFAZgBQAmgBAQAHQAEABgBADQgBAEgDABQgKADgQAAIgbgBIgoAAQgHAEgIABIgQAAIgYABIgXgBg");
	this.shape_91.setTransform(735.8549,177.4438);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-12.4,0,205.5).s().p("AigAHQAAAAgBgBQAAAAAAAAQAAAAAAAAQABAAAAAAQBBAGACgFQACgEAEAAIAjgCIAkgBIAfgGIAhgGQBJgJAlAMQADABABAEQAAAEgEAAQgRACghgCQgjgBgPABQgOAAggAHQgcAFgSABIhAADIgDAAQglAAgWgJg");
	this.shape_92.setTransform(670.4278,173.4583);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-8.5,0,209.4).s().p("AhJAPQgcgFgFAAQgqAAgRgGIgKAAIgCgCIgWgCIgWgEQgQgDgWAGQgeAHgIAAIAAAAQArgSARAAQAbAAAqAJQABgBAAAAQABgBABAAQAAAAABAAQAAAAABAAIALACIAfgIIAQgEQAJgBAHACQASgBAkACIAFAAQAZgCAjAEIAeADQARADAJAHIABADIAdgCQAPgBAxAFQAbACAsgHQAggDAOABQAAAAAAAAQABAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAAAIgkAFIgkAEQgYAFgegHQgSgDgZAAIgrgBIgDAAQgagBgTgDQgPAEgVgBIgkgCQgJAAgdgDQgZgCgOABQAvABAYAIQAAAAABAAQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAAAQAAABgBAAQgHAEgKAAIgPgCgAhygBQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBIgKACIANABIAAAAg");
	this.shape_93.setTransform(677.925,169.6479);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-10,0,207.9).s().p("AA0ANIgwgIIhSgJQgNAAgJgDIgBgBIAAgBQARgHAcADIAtAGIBKAJQAcADAKAEQAAAAAAABQAAAAABAAQAAABAAAAQAAAAAAABIgCACIgSABQgNAAgRgCg");
	this.shape_94.setTransform(644.95,171.1296);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-11.9,0,205.9).s().p("AhLAWQgxgHgLgBIghgCQgTgCgOAAIg4AEQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAAAAAAAQAAgBABAAQAAAAAAAAQAZgKAkgBQARAAAtADQBJAEAaAFQAEgDANgCQAEgHAIACQgKgEgQgDIgagEIg/gIQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAQA6ACAqAHIACgCQASgIArgDQAqgDAbAFIAOADQAUADAvABQArAAAXAFQABABAAAAQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQg8AMhIgHQgLAFgSADQABAJgJACIgEAAQgUADgfAAIgPAAIgNgCQgFACgIAAIgCAAQAAAEgFAAIgNAAQgTAAgcgEg");
	this.shape_95.setTransform(615.4688,173.0737);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-27.6,0,190.3).s().p("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ANAGAIAHQALgFAJgCIAfgEQAfgBAJAEQAWAIAMACQANADArgBQAnACAMAQIAQAAIAAAGIgNgBIABACIAAAAIAMAAIgBAQQgigDgcAMQgFADgDgFQgDgDAFgDQAOgIARgFQgTgIgKgCQgTgEgpgFQgXgEgjABIg6ACQgDAEgEAAQgNAAgUgJQgXgKgJgCQgSgFgXABIgqADQgsAChBgBQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQgMAFgUgCIgigEQgsgDgeAAIhCAAQgMADgHABQABAEgCAEQAmAEAZAQQAAABAAAAQABABAAAAQAAABgBAAQAAAAgBAAIhxgGIgqAAQgbAAgOgHIgFABIgCABQgKADgLAAQAdAGAOANIACADQAbAAAaACQATACAdgCIAwgBQA+gBAfACQA2ACAkANQABABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgPgCghgFQgfgFgRgCQgwgDgvACIgzACIgzADQAEADgEADQgJAHgPABIgagCQgZgDgQgJQgQACgXgBIgogCIgMgBQhMgCgdACIgxAFIABADQATgCA0AAIBEAAQApABAZAJQAEABAAAEQAAADgEABQgZAGgpgCQgugEgWgBIgkgBQAAABgBAAQAAAAAAABQAAAAgBAAQAAABAAAAQgiAKgngDIgmAAIgRgBQgMADgHAAIgIABIgDAAQgFADgGABQgMAEgWgBIgBADQgIAFgQgCIgagEIgmgFIgbACQAAABAAABQAAAAAAABQAAAAAAABQAAAAAAABQgDACgEACIA9AFIAcADQARACAKAEQAEACgBACQAAADgEABQgNACgRgBIgegDIhYgHQgTADgSgBIggAAIACABIAbAHQAPAEANAAQAogDANABQAAAAABAAQAAABAAAAQAAAAAAAAQABAAAAAAIgBABQgQADgmABIgVAAQgLAAgJgDIgbgHQgQgDgNADIgKADQgBADgDABQgLAFgVABIgjAAIgTAAIgNAAgAiEAIIgqABIgBABIhRAMIgwAIIAQAEIAnAFQABAAAAAAQAAABABAAQAAAAAAAAQAAAAAAABIA1ABIA4ACQgcgDgQgGQgBAAAAAAQgBgBAAAAQAAAAAAgBQgBAAABgBQAAAAAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAXgGAxADICIANIABAAIAZgEQAEAAACACQAqgDAbAGIABAAIAYgBIASgDQgRgCgMgEIgDAAIgDgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAAAAAgBIAAgBIgLAAQgYACgZgCQgggCgKgIIgDAAIgfgCIgZgDQgZACgNAAQgKAEgPAAQgOAAgLgFQgEgBAAgDIAAgBgACWAPIArgBIAWgCQAcgDAJACIBTgBIgVgCQgQgBgjgGQghgFgSgBIgBAAIgMABIgCAAQgdAEgOAAIgdABIgeABQgEAAgFgCIgMADQgFAEAAAEIABADIAbAAIAMAAIApABgAGeAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQABAAAAAAIADgBIgZAAIAGACIAPAAIAAAAgALIgyIALABIANAAIACgBg");
	this.shape_96.setTransform(932.6917,188.7125);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-26.4,0,191.5).s().p("AA/ALIg2gEQgZgCglAAIg/AAIAAgBQA2gNA+ABIA5gCQAkgBAVAFQADABABADQAAADgDABQgTAJgeAAIgDAAg");
	this.shape_97.setTransform(645.1411,187.5102);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-46.1,0,171.6).s().p("AgCAAIAFAAIgBABg");
	this.shape_98.setTransform(1045.475,207.225);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-47.1,0,170.8).s().p("AhWAtQgugBgfgEIhBgIIgkgEQgWgDgNgFQAAAAAAAAQgBAAAAAAQAAgBABAAQAAAAAAAAIAKgDIgvgDQgcgDgRgEQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIACgBQAUgHAdgBIgNgBIgBgBIABgCQAfgEAjABIARAAIARABQAhgIAmACQAzgKAbgDQAtgFAwABIAOAAIABAAQARgIAeAAQASAAAgACIAcAAQA3gLBGAMQAvAHBLAXIgCAnIgngBQgWAAgQADIgZAGQgOADgKgEQgWAEgQgDQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQAJgGAhgMQAIgFALgFQgJgEgbgGQgcgGgRgCIgBAAIABADQAAAAAAABQAAAAAAAAQgBAAAAAAQAAAAgBAAQgcAFgvgGIg0gCIgCABQgJAFgJABIgCACIASABIAnABQAWABAQADQADABAAAEQAAAEgDABQgQADgWgBIgngDIg3gEQADADAAADIAUACIABABIAkACIAoABQAZAAAOAFQAGACgBAEQABAFgGACQgRAFgagBIgtgEIgvgCQgHACgFgCIgCgBIgDAAIgCAAQAAAAABABQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBABQAAAAgBAAQgQAEgXAAIgngBgAjGAHQAWAFAQANIABACIAGABIAsACIAFgCIAmgNIALgGIgBgBQgEgCgBgCIgBgBIgOgDQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAQgOADgSgCIgegEQgnAHgTABg");
	this.shape_99.setTransform(1051.55,208.2061);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-16.2,0,201.7).s().p("AigAHQgBAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAQBAAGADgFQABgEAFAAIAjgBIAjgCIAggFIAhgGQBHgKAnANQADABABADQAAAEgEAAQgSACgggCQgkgBgOABIgvAHQgcAGgRAAIhAAEIgEAAQgkAAgWgKg");
	this.shape_100.setTransform(1074.7679,177.3338);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-12.4,0,205.4).s().p("AAeAPIgfgGQgqABgTgHIgJAAQAAAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBIgWgCIgVgEQgRgCgXAGQgdAGgIABIgBgBIAegLQATgHAMAAQAbABAqAIQADgCACABIAMABIAegIQAWgFAIACQATAAAkACIAFAAQATgCAqADIAdAEQASADAJAGQAAABABAAQAAAAAAABQAAAAAAAAQAAABgBAAIAFAAIAAACIgHAAIgCgBQgYAAgVgDQgOAEgWgBIglgDQgJAAgegCQgXgDgOABQAvABAXAIQAAAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAQgHADgLAAIgPgBg");
	this.shape_101.setTransform(1071.85,173.5659);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-13.9,0,204).s().p("AA0ANIgwgIIg9gHQgdgBgOgEIgBgBIABgBQAQgHAcADIAtAGIBJAJQAdADAKAEQAAAAABABQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAAAQgBABAAAAIgSABQgNAAgRgCg");
	this.shape_102.setTransform(1049.2562,175.0296);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-15.9,0,202).s().p("AhLAWQgxgHgLgBIghgCQgTgCgNAAIg5AEIgBgBQgBgBAAAAQAAAAAAAAQABgBAAAAQAAAAAAAAQAagKAjgBQARAAAtADQBKAEAZAFQAHgEALgBQADgHAIABIABAAQgKgDgQgDIgbgEIg/gIQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQABAAAAAAQA6ACAqAHQAAAAAAAAQAAgBABAAQAAAAAAgBQABAAABAAQARgIArgDQAtgDAYAFIAHACIAHABQAUADAvABQArAAAYAFQAAAAAAABQABAAAAAAQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAAAAAQg6AMhLgHQgKAFgTADQABAKgJAAIgDABIgBAAQgUADgfAAIgOAAIgNgCIgOACIgCAAQgBADgDABIgOAAQgTAAgcgEg");
	this.shape_103.setTransform(1019.7917,176.9737);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-36.2,0,181.7).s().p("ABAAtIglgFQgWgDgPABQgrAFgVABQgIABg8gDQg8gDAAgBQAAABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBgBQgBAAAAAAQgBAAAAgBQAAAAAAgBIAAgCQgBgEAEAAQAUgBAyADQAsACAagDQBFgHAuAIQAjAFAigGQgBgBgBAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIgBgHIgEgCIgMABQgEAAgDgCIgdgCIhMgCQhtgDg3gGIhRgIQgzgHgfgCQgfgCgtABIhMACQgBAAAAAAQAAAAAAAAQAAAAAAgBQAAAAABAAQA4gGAYgBQAtgCAkADIBSAJQAxAFAhABIBngCQgOgEgFgKQgEgKgEgDQgFgFgLgBIgegBIgegDIgegDIgBgBIABgBIAeACQATACALAAQAigBASABQABAAAAABQABAAAAAAQABABAAAAQABABAAAAQAFAQAJAFQAHAFATADQAIABATAAQANgFAVgBIAkgBIAlgGQAYgEAOABQAagEARABQAMAAARAHIAcAMQAUAIAvALQAQAAAGADIACACQBaAAA/gGIATgBIgBAJIgtAGQhaAMhIgLQgVAEgQABQgLABgVgBQgVgCgLABQgKABgyALQgaAFgUAAIgPgBg");
	this.shape_104.setTransform(1041.075,197.2929);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-31.5,0,186.4).s().p("ABAAmIgigBQgTgBgNgDIgBAAIgMACQgSAAgWgEQgJgCgYgBQgWAAgLgEQgBAAgBAAQAAgBAAAAQgBAAAAgBQAAgBAAAAQAAgDADgBQAOgFAYACQAgADAHgBIATAAQAQgBAFgCQgBgGAEgFQADgEAHgBIAKAAIgygFQgdgCgQgEQgbgFgIgQIAAgCIACAAQAJAFAuAFIArAEQAjADARgBIAQgBQAHABAHADQAVgHAhADIAAAJIgGgBQgVgCgWAEQABADgCACIACABIgFADQAdACAXAGIgBAfQgMACgRAAIgeAAg");
	this.shape_105.setTransform(1078.275,192.5875);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-30.3,0,187.6).s().p("AA/ALIg2gEQgdgChgABIAAgBQA2gOA+ABQASABAngDQAjgBAWAGQADABABADQAAACgDABQgTAJgeAAIgDAAg");
	this.shape_106.setTransform(1049.4411,191.3936);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-16.4,0,201.4).s().p("ABbALIgqgEQgigCglgGQgSACgVgCQgUgDgcADIgDgBQgIgCgHAAIgDAAIgHAAIAVgDIAcgDIA0gBQAOAAAJADQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBAAIBFACIAoAAQAYAAAOADQAEABAAADQAAADgEABQgKACgNAAIgUgBg");
	this.shape_107.setTransform(893.175,177.5614);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-7.9,0,210).s().p("AAAACIgqgBQgGgCgHAAIA+AAQAjgBANACIABAAIgBABQgNABgXAAIgTAAg");
	this.shape_108.setTransform(898.9,168.981);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-6.5,0,211.4).s().p("AANAAIAGAAIABAAIgBABIgmABg");
	this.shape_109.setTransform(907.225,167.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-7.6,0,210.2).s().p("AAAADIgvgDQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAvgCQAdgBASADQABAAAAABQAAAAAAAAQAAAAAAAAQAAABgBAAQgLABgRAAIgTAAg");
	this.shape_110.setTransform(932.1625,168.7317);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],-1.1,-8.8,-1.1,209.1).s().p("AgCAAIhNgHQAjACAjAEIAsABQAbACAQAEIACABQAAAAAAABQgBAAAAAAQAAAAAAAAQgBAAAAAAQgSAAg+gIg");
	this.shape_111.setTransform(917.775,169.925);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0.1,-10.8,0.1,207.1).s().p("AgDAMQgRgBgLgDIAAgBIAJgBQhBgEgMgCQgEAAAEgBQAdgHA/AFQAFgFANAAQAogHAwAEQAAAFADADIgggCQAAABAAAAQAAABAAAAQgBABAAAAQgBABgBAAIgPACIAIABIgTACQgMACgEAIIgcgCg");
	this.shape_112.setTransform(925.6125,171.9488);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-12.6,0,205.3).s().p("ABDAUIgBgBIABgCQAQgEAagBIgigBIgmgBQgUgBgOgGQgcAFg9AAQgsAAgugKQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBABAAQA7AJAmgCIBHgFIgGgEQAAAAgBAAQAAgBAAAAQAAAAgBgBQAAAAAAgBQgcACgRgGQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAgBAAAAQABgBAAAAQABAAAAAAQABAAABAAQAmABAXgEQAkgEAIABQAnACA1AMQAFABgEACQgSAGgfgFQgogIgLABIgjADQAQAIAdABIAxAAIA1AAQAUAAAFABQgIADgEAGIgfAAQgVABgDANIgKAAQgUAAgNgEg");
	this.shape_113.setTransform(897.0679,173.6563);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-19.5,0,198.4).s().p("AA0AHIgtgDQgQgBhXAAIAAAAQAugIAyABQAPAAAggBQAdgBASADQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgPAGgYAAIgEAAg");
	this.shape_114.setTransform(839.0167,180.5908);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-46.6,0,171.2).s().p("AgBAEQgiAAgQgCQgHgFgJAAQAZgBAyACIAdgBQARAAAMACQABAAAAAAQAAAAAAABQABAAAAAAQAAAAAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAQAAAAgBAAQgOADgUAAIghAAg");
	this.shape_115.setTransform(817.325,207.7688);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-44.3,0,173.6).s().p("AAQgCIAGABQABAAAAABQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAQgWACgXAAg");
	this.shape_116.setTransform(827.4,205.45);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-46.3,0,171.6).s().p("AAAAEQgmgDgSgBIgCAAIACgBIA5gDQAjgBAVAFIABABIgBABQgOADgVAAIgWgBg");
	this.shape_117.setTransform(857.65,207.3517);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],-1.4,-48.2,-1.4,169.6).s().p("AAuAIIgwgIQgtgIgxgFQArAEArAGIA0AEQAiACATAGQABABAAAAQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAAAQAAABAAAAQgBAAAAAAQgUgBgdgFg");
	this.shape_118.setTransform(840.18,209.375);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-40.9,0,177).s().p("AAkAGIgwgBQgbABgLgCQgVgBgQgGQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAABAAQAZACA9gCQA3gCAfAEQAAABABAAQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgRACgYAAIgJAAg");
	this.shape_119.setTransform(969.38,202.05);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-42.2,0,175.6).s().p("AAAAEQgxgBgSgDQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQABAAAAAAQAAAAABAAQAZgBAzABIAdAAQASgBALADIABABIgBACQgOADgUAAIgigBg");
	this.shape_120.setTransform(992.8438,203.38);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-39.3,0,178.4).s().p("AhugBIAAAAQBsgLBvANQABABAAAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAAAAAQAAAAgBAAQgfACghAAQhHAAhUgIg");
	this.shape_121.setTransform(994.425,200.5114);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-41.8,0,176.1).s().p("AAAAFIg5gFIgBAAIABgBIA6gDQAjgBAVAGIABABIgBABQgOADgTAAIgYgBg");
	this.shape_122.setTransform(1033.3,202.9384);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-43.8,0,174).s().p("ABtAQQgUgBgdgFIgxgJQhAgLg5gFQA6AEA3AJIA2AEQAhADATAHQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAAAQAAAAgBAAIAAAAg");
	this.shape_123.setTransform(1014.43,204.98);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-56.6,0,161.3).s().p("AAAAGQhLgJgdACIAAgBQAVgJAeACQASABAiAEQAMACAoABQAhABATADQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgQADgWAAQgcAAglgFg");
	this.shape_124.setTransform(1072.25,217.7301);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-53.8,0,164.1).s().p("AhmAEQgBAAgBAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAAAQABgBAAAAQABgBAAAAQABAAABAAQBjgMBsASQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAABIgBABQgTAAgigBIg0gCIgzADIgRABQgVAAgNgEg");
	this.shape_125.setTransform(1068.9972,214.9368);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-43.8,0,174).s().p("AhJARQgcgGgFAAIgeAAQgRgBgMgGIgKAAQAAAAgBgBQAAAAAAAAQAAAAAAgBQgBAAAAAAIgWgCIgWgFQgQgCgXAGQgeAHgHABIAAgBIAdgMQATgIAMAAQAbABAqAJQADgCACABIALABIAfgIQAVgHALADIA2ACIAFAAQAVgCAnAEIAeADQARAEAJAHIABADIAdgBQAPgBAxAEQAZADAugIQAfgEAPACQAAAAABAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQgBAAAAAAIgkAGIgkAFQgYAEgegGQgSgEgZgBIgrAAIgDAAQgbgBgSgEQgPAFgVgBIgkgDIgmgDQgYgDgPACQAYAAALABQAUACAQAGQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAgBABQgGADgKAAQgHAAgJgBgAhygBIgEgDIgJACIANABIAAAAg");
	this.shape_126.setTransform(953.2125,204.9971);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-206.5,0,11.3).s().p("AC8A5QgygBhwgYQgJgBAAgNQhDAQgqAFQg1AHhcgPIhggNQhFgPBDgPQAdgHAtAJIBKANQA8AFCMgbQCBgZBIAQQAiAIAOACQAeADASgGQAFgBAPgPQAPgPAIgDQAIgDAFAIQAHAKgMAWQgJAPgLAKIgBABQg1AxhcAAIgHAAg");
	this.shape_127.setTransform(525.3188,367.7359);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-199.1,0,18.8).s().p("AC8A5QgwgBhygYQgJgCAAgMQhDAQgqAFQgzAGhegOQg8gGgkgIQhEgOBCgPQAdgHAtAIIBKANQA8AGCMgbQCBgZBIAQQAkAIAMABQAeAEASgGQAFgCAPgOQAPgPAIgDQAJgDAEAHQAHALgMAVQgJAQgLAKIgBAAQg2AyhdAAIgFAAg");
	this.shape_128.setTransform(481.7313,360.2193);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-187.3,0,30.5).s().p("AKECOQgwgBhygYQgJgCAAgMQhCAPgsAGQgzAGhegOQhVgIgfgLIgpgCQgZAAgQAEIgYAHQgOADgLgFIgMADQg0AMhJgJIgegCIgdgDIgvgCQgHACgFgCIgDgCIgDAAIgcACQgmABgeAIQgIACgCgJQgCgIAIgEIAegMIAQgIIhIgTQgvALgJABQggAFgWgIQgWAEgngNQghgBgLgDIgBgBQAAAAABgBQAAAAAAAAQAAAAAAAAQAAgBAAAAIAMgCQgrADADAJQATBEheAMQglAFglgHQglgIgOgRQAHgJALgCIAYgDQAXgBAsAAQAmgBAbgMQgsgJADgRQADgNAfgOQgRgEgYgIQgHgCADgKQACgKAFADIA+AGQAmAFAZABIADAAQgBgIAEgFQAEgHAIgBQBVgNBjAGQBTAFBlARIADACIAoACIALAAQgXgHgLgLQAHgJALgDIAYgCQAXgCAsABQAmgCAbgMQg+gNAegZQAbgWAugHQALgCAfAAQgCgIAEgIQAEgIAIgBQBVgMBjAGQBTAEBlATQAMACgCAQQgCAQgMgBIhTgHQBtAQAuALQALACgBAPQANABAOgBQAogBAhgHQAUgEAFgFQAKgIgLgUQgFgJAFgIQAEgJAIAAQBjgGA6APQAlAJAIAIQALAKgVAMQgXANg6gNQhCgQgTADQAIAzhCAQQg3AOhPgLQgcgEhqgXIg3gNIg4gOQgagHhpgDQh0gDAEAQQAOAwgzAVIAVAEQAEgGAHgBQBigEA6ANQAlAKAIAIQAKAKgUAMQgWAMgvgKQAJAGABAKQAcgFArAJIBHANQA8AGCNgcQCAgZBIAQIAwAJQAfAEASgGQAEgCAQgOQAPgPAHgDQAJgDAFAHQAHALgNAVQgJAQgLALIAAAAQg2AyhdAAIgGAAgAjbArIgBABIBFANQALADgBAPQANABANgBQAngCAjgGQATgFAFgDIgZgJQgagHgUgDQgTAHgdgBIgxgDIgggBg");
	this.shape_129.setTransform(299.4535,348.5048);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-121.1,0,96.7).s().p("AigAMIgBgBIABgBQBBALACgIQACgHADAAIAkgDQAXgBAMgCQAMgCAUgHIAhgLQBGgRAoAWQADACAAAGQAAAHgDAAQgSAFgggEQgkgDgOACQgOABggALQgdAKgSABQgpAFgWABIgEAAQgkAAgWgRg");
	this.shape_130.setTransform(260.8,282.34);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-114.6,0,103.3).s().p("AhIAaQgdgJgEAAIgfAAQgQgCgNgIIgJgBQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQgJgBgNgDIgWgHQgRgFgWAKQgfAMgHACQAAAAAAAAQgBAAAAgBQAAAAABAAQAAAAAAgBIAegUQASgLAMAAQAdABApAOQABgDADABIAMADIAegOIAQgHQAJgCAHADIAbABIAcACIAFAAQASgDAqAGIAdAFQARAGAKAMIAAAFIAdgCQAPgCASACIAfAFQARADATgDIAjgIQAggHAOAEQABAAAAAAQAAAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAAAAAQAAABgBAAQgNAFgWAEIgkAHQgZAHgegKQgSgGgZgBIgrgBIgDAAQgagBgSgGQgPAHgWgBIgjgEQgIgBgfgFQgYgFgPADQAXABANACQAUADAPAKQACABABADQAAADgCACQgHAHgLAAQgHAAgHgDgAhxgDQgDAAgBgFIgKAEIAOABIAAAAg");
	this.shape_131.setTransform(268.2375,275.7722);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-117.1,0,100.7).s().p("AA0AWIgvgOQgrgJgSgDIgWgDQgNgBgJgEIgBgCIABgDQAQgLAcAEIAtAMQAeAIArAIIAUAEQALADAIAFQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAABAAABQAAAAAAABQgBAAAAAAQAAABgBAAQgIACgKAAQgNAAgRgEg");
	this.shape_132.setTransform(235.275,278.3327);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-133.9,0,84).s().p("AAtAQIgngFIhWgIQgHgBACgJQACgKAFACIBUAEIAnABQAXABAPAIQADABAAAFQAAAHgDABQgLADgPAAIgMAAg");
	this.shape_133.setTransform(76.1688,295.0295);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-130.1,0,87.8).s().p("AA5AQIg5gLIg7gFQgjgDgWgHIgBgBIABgBQAXgIAjADIA6AGIA6AEQAjAEAXAKQAAAAABABQAAAAAAABQAAAAABABQAAABAAABQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAAAQgMADgQAAQgOAAgRgDg");
	this.shape_134.setTransform(78.325,291.2781);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-143.7,0,74.1).s().p("AhmAHQgEgBABgGQABgEADAAQBjgRBrAcIABACQAAAAAAAAQAAABgBAAQAAAAAAAAQAAABAAAAQgTABgigDQglgDgPAAIgzAFIgQABQgVAAgOgFg");
	this.shape_135.setTransform(87.8389,304.9438);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-123.9,0,93.9).s().p("AAGA7IgwgPIgxgNQgEABgDgBIgEgBIgDgBIgcACQglABgfAIQgIACgBgJQgCgIAGgDQgNAEgSAAIgggBQgigBgJgCIAAgLQAjACASgBIAdgBQARAAAMAEIABACQABAAAAABQAAAAAAABQgBAAAAAAQAAABAAAAIAZgLQAOgGAGgDIgCgBQgDgCgBgEIgBgBQgLgEgYgCIgigCIgoAJQgXAFgRAAIACggQAVgCAWAAQApgKAcgDQArgGAyABIAPAAIABAAQARgKAfAAIAwADIAcAAQA6gPBMARQAuAKBSAfQARAGgCASQgCATgSAAIgsgBQgbgBgRAEIgZAIQgOADgLgFQgWAFgQgDQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAIAQgJQgmgGgRgBQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAAAgBQAAAAAAAAQANAAAcgEQAagDARACQAIgFAJgEQgIgFgcgJQgYgHgWgDQgTAHgdgBIgwgDIgggBIgBABQgJAGgKABQgCAJgJAAQgQABgNAHQAEADABADIATAEIACABIAjACIAoABQAYAAAPAGQAFADAAAFQAAAGgFACQgRAGgbgCIgsgEIgrgCIAhAHQAIADAsAGQAiAEATAKQABABAAAAQABAAAAABQAAABAAAAQAAABAAABQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAAAQgUgCgdgIg");
	this.shape_136.setTransform(38.6608,285.1109);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-78.6,0,139.3).s().p("AAAAFQgvgBgUgEQAAAAgBAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAABAAQAZgBAzACIAdgBQARAAAMACIABACIgBACQgOADgUAAIgiAAg");
	this.shape_137.setTransform(98.9438,239.6583);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-75.3,0,142.5).s().p("AhugBIAAAAQBugMBtAPQABAAAAAAQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAQAAAAgBABQAAAAAAAAQAAAAgBAAQggACgjAAQhGAAhSgIg");
	this.shape_138.setTransform(100.525,236.4968);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-78.1,0,139.8).s().p("AAAAFIg5gFQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIA6gEQAjgBAVAHQABAAAAABQAAAAAAAAQAAAAAAABQAAAAgBAAQgOADgVAAIgWgBg");
	this.shape_139.setTransform(139.35,239.1798);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-91.3,0,126.6).s().p("AhmAFQgEgBABgEQABgCADgBQBlgMBqAUQAAAAAAABQAAAAAAABQAAAAAAAAQAAAAgBAAQgTABgigCIg0gCIgzAEIgRAAQgUAAgOgDg");
	this.shape_140.setTransform(175.0339,252.4204);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-109.1,0,108.8).s().p("AA/AXIg3gKIg9gKQgngFgXgGQgGgCACgHQABgHAGABIA/AGQAlADAYABQAqAAAMACQAgADATAJQAEADAAAFQAAAFgEACQgPAIgWAAIgRgBg");
	this.shape_141.setTransform(182.2265,270.2908);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-127.4,0,90.4).s().p("AhlA3QgvgBgdgFIhCgJIgkgFQgWgDgNgHQAAAAAAAAQgBgBAAAAQAAAAABAAQAAgBAAAAIAKgDIgvgEQgcgDgSgFIgBgCIABgCQAVgIAdgBIgNgCIgBgCQAAAAAAgBQABAAAAAAQAAAAAAAAQAAAAAAAAQAggGAiABIARAAIARACQAfgJApABQAzgMAagEQAvgGAuACIAPAAIABgBQAQgKAeABQASAAAgACIAcABQA5gPBMARQAvAKBSAfQAQAFgCATQgCATgRAAIgsgCQgbAAgRAEIgZAHQgPADgKgFQgUAGgSgEQgBAAAAAAQgBgBAAAAQAAAAAAgBQgBgBAAAAQAAgBABgBQAAAAAAgBQAAAAABgBQAAAAAAAAQAIgIAjgPQAHgGALgFQgHgGgcgHQgggIgOgCIAAAAQADAEgFABQgbAGgwgHIgUgCIgggBIgCACQgHAFgLACIgBADIARAAIAnABQAXABAPAFQADABABAFQAAAFgEABQgQAEgWgCIgngDIg2gFQADAEAAADIATADIACABIAjACIAoABQAYABAPAGQAFACAAAGQAAAFgFACQgRAHgbgCIgsgFIgugCQgHACgFgBIgDgCIgDAAIgCAAQACACgBADQAAAEgDAAQgQAFgXAAIgngBgAjUAJQAWAHAPAPIABADIAzADIAEgDIAygXIgCgBQgDgCgCgDIAAgBIgPgEQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAAAQgNAEgSgDIgfgFQgsAJgNABgAhOgLIAFABIACgCg");
	this.shape_142.setTransform(434.3611,288.6359);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-113.9,0,104).s().p("AA/AXIg3gLIg9gKQgngFgXgFQgHgCADgHQACgIAFACIA+AFQAnAEAWAAIA2ACQAhADATAKQAEACAAAGQAAAFgEACQgPAIgWAAIgRgBg");
	this.shape_143.setTransform(586.5653,275.0573);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-89.7,0,128.2).s().p("AigAJIAAgCQBAAIADgGQABgFAFAAIAjgCIAjgCQANgBATgFIAggIQBIgMAnAQQADABABAEQAAAFgEAAQgSADgggCQgkgCgOABQgNABgiAIQgcAHgRAAQgqAEgWAAIgGAAQgjAAgVgLg");
	this.shape_144.setTransform(456.1417,250.8419);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-90,0,127.9).s().p("ABbANIgqgFQgjgCgkgHQgQADgXgDQgRgEggADIgDgBQgIgCgGAAIgDAAIgHAAIAVgDQAVgFAHAAIAdABIAXgBQAPgBAIAEQABAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAgBAAQAAABAAAAQgBAAgBAAIgBABIBGACIAoAAQAYAAAOAEQAEABAAADQAAAEgEABQgKACgPAAIgSgBg");
	this.shape_145.setTransform(274.5025,251.1082);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-77.8,0,140).s().p("AANgBIAFAAIACABQAAAAAAAAQAAABgBAAQAAAAAAAAQAAAAgBAAIglABg");
	this.shape_146.setTransform(288.575,238.95);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-83.1,0,134.7).s().p("AgEAOQgRgBgKgEQAAAAgBAAQAAAAAAgBQAAAAAAAAQABAAAAAAIAIgCIgngCQgWgBgPgDIgBAAIABgBQAcgJBAAFQAEgGANAAQAogIAwAFQAAAFADAFIgggDQABAEgEABIgPACIAIACIgSADQgNACgEAKIgcgDg");
	this.shape_147.setTransform(307.025,244.2789);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-93.7,0,124.2).s().p("AAHAFQgcgChLABQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQArgJA1ABQAPAAAggCQAdgBASAEQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAAAQgBABAAAAQAAAAgBABQgRAGgaAAIgtgDg");
	this.shape_148.setTransform(220.3542,254.84);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-126.9,0,90.9).s().p("AgBAFQgmgBgMgCQgHgGgJAAQAZgBAyACIAdgBQARgBAMADQABABAAAAQAAAAAAAAQABABAAAAQAAAAAAAAQAAAAAAABQAAAAgBAAQAAAAAAABQAAAAgBAAQgOADgUAAIghAAg");
	this.shape_149.setTransform(198.675,288.1083);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-126.4,0,91.3).s().p("AAAAFIg5gFIAAAAIAAgBQATgBAngDQAjgBAWAHQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAAAQgPADgVAAIgWgBg");
	this.shape_150.setTransform(238.975,287.6111);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-128.8,0,89.1).s().p("AA8ALIgxgKQhBgMg4gGIAAAAQA0AEA9ALIA1AFQAiADATAHQABABAAAAQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAAAQAAABgBAAQgVgBgcgHg");
	this.shape_151.setTransform(220.1,289.9);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-120,0,97.9).s().p("AAkAHIgwgBIgmgBQgWgCgPgHIAAgCQAaADA9gDQA3gCAfAGQAAAAABAAQAAABAAAAQABABAAAAQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAAAQgRADgaAAIgHAAg");
	this.shape_152.setTransform(350.7375,281.1164);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-121.6,0,96.3).s().p("AAAAFQgwgBgTgFQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQABAAAAAAQAAgBABAAQAZgBAzACIAdgBQARAAAMADIABACIgBACQgOADgUABIgigBg");
	this.shape_153.setTransform(374.1938,282.7583);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-118,0,99.8).s().p("AhtgBIAAgBQBtgMBtAQQAAAAABAAQAAAAAAAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAgBAAQAAAAAAABQAAAAgBAAQggACgiAAQhGAAhSgJg");
	this.shape_154.setTransform(375.7425,279.2324);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-121,0,96.9).s().p("AAAAGQgmgFgTgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIA5gEQAkgCAVAIIABABIgBABQgOAEgUAAIgXgBg");
	this.shape_155.setTransform(414.6625,282.1917);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-123.5,0,94.3).s().p("AA8AMIgxgLQg/gOg6gFIAAgBQAzAEA+AMIA2AGQAhAEATAHQABABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgUgBgdgHg");
	this.shape_156.setTransform(395.755,284.7);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-139.2,0,78.7).s().p("AAAAHQhLgLgdACIAAAAQAWgMAdACQASABAjAGIAzADQAgACAUADQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAQgRAEgWAAQgcAAgkgGg");
	this.shape_157.setTransform(453.5875,300.313);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-135.7,0,82.2).s().p("AhmAFQgEgBABgEQABgDADAAQBjgOBrAWIABACQAAAAAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAQgTABgigCIg0gCIgzAEIgQAAQgVAAgOgEg");
	this.shape_158.setTransform(450.3389,296.877);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-123.5,0,94.3).s().p("AhJAUQgcgHgFAAIgeAAQgRgCgNgGIgJgBQAAAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBQgJgBgNgCIgWgFQgQgEgXAIQgeAJgHABIAAgBIAdgPQATgKAMABQAaAAArAMQACgDADABIALACIAfgLQAWgIAJAEQATgBAkADIAFAAQAYgDAkAFIAeAFQAQAEAKAJIABAEIAdgCQAOgBASACIAgAEQAQACATgCIAkgHQAfgFAPADQAAAAABAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAAAAAABQgBAAAAAAQgNADgXAEIgkAGQgYAFgegIQgSgFgZgBIgrAAIgBAAIgCAAQgcgBgRgFQgPAGgVgBIgkgDIgmgEQgYgEgPACQAvABAXALQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAgBAAQgHAFgKAAQgHAAgIgCgAhygCQgCgBgCgDIgJADIANABIAAAAg");
	this.shape_159.setTransform(334.5625,284.7072);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-66.9,0,151).s().p("AAFAOIgzgIIgPgDIAAgSIAZABQAOABAggBQAeAAARAJQAEADABAFQAAAHgFACQgLAEgQAAQgLAAgOgCg");
	this.shape_160.setTransform(15.4271,228.0171);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-52.3,0,165.6).s().p("AAtANIgngEIhWgHQgHAAACgIQACgIAFACIBUADIAnABQAXABAPAGQADABAAAEQAAAGgDAAQgLADgPAAIgMAAg");
	this.shape_161.setTransform(76.1688,213.4255);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0.1,-49.2,0.1,168.6).s().p("AA6ANIg6gJIg6gEQgkgCgWgGQAAAAgBgBQAAAAAAAAQAAAAAAgBQABAAAAAAQAXgHAjADQAUABAmAEIA6ADQAjADAXAJQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBAAQgMADgQAAQgOAAgQgDg");
	this.shape_162.setTransform(78.3,210.3593);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-53.5,0,164.3).s().p("ABrAoQgqgBghgFIhBgKIgkgFQgWgDgOgHQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIALgEIgvgDQgcgCgSgGIgBgCIABgCQAWgLAgAAQAXgBAjAFQAEgKASgBQBJgYBgAhQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgQAFgagGIgogHIgQgBQABAHgFACQgHAEgKACQAVAHAQAPIABADIAGAAQAkAFAogBIAjgBQAUgBAOAFQADABAAAFQAAAEgDABQgQAFgXAAIgogBg");
	this.shape_163.setTransform(50.9,214.6863);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-60.4,0,157.5).s().p("AhmAFQgEgBABgEQABgDADAAQBigOBsAWIABACIgBACQgTAAgigCQglgCgPAAIgzAEIgSAAQgTAAgOgEg");
	this.shape_164.setTransform(87.8389,221.5254);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-58.7,0,159.1).s().p("ACJBMQgZgDgNgDQgIABgNgEQgPgFgGAAQgKAAgSAEQgSADgIAAQhUgFghgEQgFgBAAgGQAAgHAFgBQAkgFAgADQAeADAmgNQAMgEAKgBIgvgDQgggEgPAAQgMgBgvADQgMAGgRACIgeADQgUACgLgBQgQgBgNgHQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAQgJAjgEIgpgCIgugCQgZgDgRgMIgGACIAAg4IAGgCIAbgGQAQgDALABQAyAEA+AcQAAABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQgWAPglgNQgxgRgMABIgrAHQAUATAjACQAUACAngBQAVABArABIAZABQAOACAIAIQADADAAAEIAZACIBEABQApACAbAMQACAAABAEQAgACAPAMQADACAAAFQAAAEgDADIgBAAIAVABIAdgBQARAAALAHQARgIAZgBIAcAAQAQABALAHQAEACgBAFQgBAFgDABQgLAEgQAAIgbgBIgnAAIAAAAQgIAFgHABIgRABIgXABIgHAAIgRgBg");
	this.shape_165.setTransform(40.6361,219.8688);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-44.2,0,173.7).s().p("AgDAwIgxgMIgxgKQgEABgDgCIgEgBIgDAAIgcABQglABgfAGQgIACgBgHQgCgHAGgCQgNADgSAAIgggBIgXAAIAAgKIAhAAIAdgBQARAAAMADIABACQABAAAAAAQAAABAAAAQgBAAAAABQAAAAAAAAIAZgJQAOgEAGgDIgCgBIgEgEIgBgBQgKgDgZgCIgZgBIgJgBIg9ALIAAgaIAagBQAmgHAfgEQAtgFAwABIAPAAIABAAQARgIAfAAIAxACIAbAAQA6gLBMANQAvAJBRAZQARAFgCAOQgCAQgSAAIgsgBQgagBgSAEQgRAEgIABQgOADgLgEQgXAEgPgDQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAgBQAAAAAAAAQAAgBABAAQAAgBAAAAQAEgDAMgEIg3gGQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAgBAAAAIApgEQAagCARACQAHgEAKgDQgJgGgbgGQgbgGgTgCQgTAFgdgBIgwgCIgggBIgBACQgJAEgKABQgCAIgJgBQgPABgOAGQAEACABADIATADIACAAIAjACIApABQAXAAAPAFQAFACAAAFQAAAEgFACQgRAFgagBIgtgEIgrgCIAhAHIA1AGQAhAEATAIQABAAAAABQABAAAAABQAAAAAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAAAAAQgUgBgcgHg");
	this.shape_166.setTransform(39.6608,205.3355);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-20,0,197.8).s().p("AC0ArQgNgBgegEQgugHgMgBQgegBgaAMQgFADgDgFQgDgFAFgCQANgIASgFQgTgIgKgCQgYgFgkgEQgXgDgiABIg7ACQgCADgFAAQgMAAgUgIQgYgLgIgCQgTgEgWABIgqACQgsADhCgBQADAEgHADQgMAFgUgCIghgEIgDgBIABgVIAUACIAjAFIA8gBQAUgBAdgFIAxgHQApgGAhAMQAhALAKAJIAUgGIAfgEQAegBALADQAVAIAMADQAOACAqAAQAmACAMAOIAnABQA7gEARgEIASgDQAJgCAIABIAjABIAdgDQAQAAALAFQACABAAACQAAADgCACIgBAAIBVADIAxAAQAdAAARAGQAEACABAFQAAAFgFABQgUAFgggDIg0gHQgtgEgpgKQgTAFgcgFQgUgEgWACIgpAFQgTACgdAAIgwgCIAAABIABABQAPgBAUAEQAoAJAWABIAZgBQAPAAAJAEQABAAABAAQAAABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAABgBAAQAAAAAAABQgBAAgBAAQgNAGgUAAIgIAAg");
	this.shape_167.setTransform(59.5,181.1632);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-24.8,0,193).s().p("AAdAJQgUgCgngHIAAgJQAkAFAXAIQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAgBAAQAAABgBAAIAAgBg");
	this.shape_168.setTransform(12.9292,185.9542);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-5.9,0,211.9).s().p("AAkAGIgwgBIgmgBQgVgBgQgFIAAgBIABgBQAZACA9gCQA3gCAfAFQAAAAABAAQAAAAABABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQgBAAAAABQgBAAAAAAQgRADgYAAIgJAAg");
	this.shape_169.setTransform(75.475,166.9978);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-7.1,0,210.7).s().p("AAAAEQgtAAgWgEQAAAAgBAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQABAAAAgBQAAAAABAAQAZgBAzACIAdgBQARAAAMACIABABIgBACQgNACggAAIgXAAg");
	this.shape_170.setTransform(98.9438,168.1675);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-4.5,0,213.4).s().p("AhugBIAAAAQBvgKBsAMQABAAAAABQAAAAAAAAQABAAAAAAQAAABAAAAIgCABQgfACghAAQhJAAhSgHg");
	this.shape_171.setTransform(100.525,165.6026);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-11.7,0,206.1).s().p("AAsAJIgmgCIhWgFQgHgBACgFQACgFAFABIBUACIAnABQAWABAQAEQADAAAAADQAAAEgDAAQgMACgQAAIgLAAg");
	this.shape_172.setTransform(163.404,172.8798);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-9.5,0,208.3).s().p("AA5AKIg5gHQhPgCgmgGIAAgBQAYgFAiABIA7AEIA6ADQAjACAXAFQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgNACgQAAQgOAAgQgBg");
	this.shape_173.setTransform(165.5625,170.6976);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-6.6,0,211.1).s().p("AAAAEIg5gEIgBAAIABgBIA6gDQAjAAAVAFIABABIgBABQgOACgTAAIgYgBg");
	this.shape_174.setTransform(139.35,167.7844);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-8.5,0,209.4).s().p("AA8AJIgxgIQhEgKg1gEIAAgBQA6AEA3AIIA2AEQAhADATAGQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAABQAAAAAAABQgBAAAAAAQAAAAgBABQAAAAgBAAQgTgBgdgFg");
	this.shape_175.setTransform(120.5125,169.625);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-12.7,0,205.2).s().p("ABrAcQgsgBgfgDIhBgHIgkgEQgWgCgNgFQAAAAAAAAQgBAAAAgBQAAAAABAAQAAAAAAAAIAKgDIgvgCQgcgCgRgEIgCgBIACgCQAjgMBLAIQAFgHASgBQAmgJAvADQApACAqAKQABABAAAAQABAAAAABQAAAAAAAAQABABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBAAQgPADgagDIgpgGIgQAAQADAFgHABQgHADgKABQAVAFAQALIABABIAGABQApADAjgBIAjAAQAVgBANADQAEABAAADQAAAEgEAAQgPAEgXAAIgogBg");
	this.shape_176.setTransform(138.15,173.7716);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-20,0,197.9).s().p("AAAAFQhKgHgeABIAAAAQAWgJAdACQARAAAjAFIA0ACQAgABAUADQABAAAAAAQAAAAABAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAQgQADgVAAQgdAAglgFg");
	this.shape_177.setTransform(178.3,181.1423);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-17.5,0,200.4).s().p("AhmAEQgBAAgBgBQAAAAgBAAQAAgBAAAAQAAgBAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAABAAQBlgKBqAQQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAgBAAQgTAAgigBIg0gCIgzADIgQABQgVAAgOgDg");
	this.shape_178.setTransform(175.0339,178.6103);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-32.1,0,185.8).s().p("AA/ATIg3gJQhSgKgpgHQgGgBACgGQABgGAGABIA/AFQAlADAYAAIA2ACQAgACATAIQAEACAAAEQAAAEgEACQgPAHgWAAIgRgBg");
	this.shape_179.setTransform(182.2265,193.207);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-16.3,0,201.6).s().p("AD0A2IgmgEQgIABgOgDQgPgEgGAAQgJAAgSADQgRACgKAAQhHgCgtgEQgFgBAAgFQAAgEAFgBQAhgEAiADQAeACAmgJQANgDAJgBIgvgCIgvgDIg6ABQgPAFgtAEQgoACgTgIQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAQAQgGAjgDIgpgBIgvgBQgZgDgQgIQgXAGgfACIg2AAQg2AAg4gRQAAgBAAAAQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAQAAAAABAAQAkAIAWADQAhAEAbgCIArgEIAqgGIgGgGIgDgEQghACgWgKQgDgCABgDQABgEAEAAQApADAigGQAngHAPABQAvACBAAVQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAgBABQgVAKgmgJQgwgMgNABIgrAFQAUANAjACQATABAngBIBAABIAYABQAOABAJAGQACACABADIAZABIBFABQAoACAbAIQABAAABAAQAAAAAAABQABAAAAABQAAAAAAABQAfAAAQAJQADACAAADQAAADgDACIgBABIAVAAIAeAAQARAAAKAEQASgFAZgBQAmgBAQAHQAEABgBADQgBAEgDABQgLADgPAAIgbgBIgoAAQgHAEgIABIgQAAIgYABIgXgBg");
	this.shape_180.setTransform(117.2299,177.4438);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-12.4,0,205.5).s().p("AigAHQAAAAgBgBQAAAAAAAAQAAAAAAAAQABAAAAAAQBBAGACgFQACgEAEAAIAjgCIAkgBQAVgCArgKQBJgJAlAMQADABABAEQAAAEgEAAQgSACgggCQgjgBgPABQgOAAggAHQgdAFgRABIhAADIgDAAQglAAgWgJg");
	this.shape_181.setTransform(51.8275,173.4583);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-8.5,0,209.3).s().p("AhJAPQgcgFgFAAQgqAAgRgGIgKgBIgCgCIgWgCIgWgEQgQgCgXAGQgdAGgIABIAAgBIAdgLQASgHANAAQAbABAqAIQABAAAAgBQABAAAAAAQABAAABAAQAAAAABAAIALABIAfgIQAXgFAJACQASAAAkACIAFAAQAZgCAjAEIAeADQARACAJAHIABADIAdgBQAPgBAxAEQAbACAsgHQAggDAOACQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAAAAAABQgBAAAAAAIgkAFIgkAEQgYAEgegGQgSgDgZgBIgrAAIgDAAQgagBgTgDQgPAEgVgBIgkgDQgJAAgdgCQgZgDgOABQAvABAYAIQAAAAABABQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBAAQAAABgBAAQgHADgKAAIgPgBgAhygCQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAgBAAAAIgKACIANAAIAAAAg");
	this.shape_182.setTransform(59.3125,169.6659);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-10,0,207.9).s().p("AA0ANIgvgIIhTgJQgNAAgJgDIgBgBIABgBQAQgHAcADIAtAGIBJAJQAdADAKAEQAAAAAAABQABAAAAAAQAAABAAAAQAAAAAAABIgCACIgSABQgNAAgRgCg");
	this.shape_183.setTransform(26.325,171.1296);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-11.1,0,206.7).s().p("Ag9AJIAAgTQANACAwABQAlAAAXAFQABABAAAAQAAAAABABQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAABQgBAAAAAAQAAAAgBAAQglAJgsAAIgogCg");
	this.shape_184.setTransform(16.575,172.2508);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-27.6,0,190.3).s().p("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IAmAAQA4gDAVgEQAcgGAGAAIAjABIAdgCQARgBAKAFQADABAAAEQAAADgDABIgBABIBWACIAwAAQAdAAARAHQAFACAAAEQABAFgGABQgTAFgggDIg0gGQgtgEgpgKQgUAEgcgFQgTgEgWACIgpAFQgVACgbAAIgxgCIABACIAAAAQATgBARAFQAnAJAWAAIAaAAQAPgBAJAEQABAAAAAAQAAABABAAQAAABABAAQAAABAAAAQAAABAAABQAAAAAAAAQAAAAgBAAQAAABgBAAQgQAHgagCQgMAAgfgFQgtgGgMAAQgfgCgaALQgFADgDgFQgDgDAFgDQANgIASgFQgTgIgKgCQgUgEgogFQgXgEgjABIg6ACQgDAEgEAAQgNAAgUgJQgXgKgJgCQgSgFgXABIgqADQgsAChBgBQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQgMAFgUgCIgigEQgsgDgeAAIhCAAQgMADgHABQAAAEgCAEQAnAEAZAQQAAABAAAAQABABAAAAQAAABgBAAQAAAAgBAAIhxgGIgqAAQgbAAgPgHIgEABIgCABQgLADgKAAQAdAGAOANIACADQAbAAAaACQATACAdgCIAwgBQA+gBAfACQA2ACAkANQABABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQgPgCghgFQgfgFgRgCQgwgDgvACIhmAFQADADgDADQgJAHgPABIgagCQgZgDgQgJQgQACgXgBIgogCIgMgBQhMgCgdACIgxAFIABADQASgCA1AAIBEAAQApABAZAJQAEABAAAEQAAADgEABQgZAGgqgCQgtgEgWgBIgkgBQAAABgBAAQAAAAAAABQAAAAgBAAQAAABgBAAQghAKgngDIgmAAIgRgBQgMADgHAAIgIABIgDAAQgFADgGABQgMAEgWgBIgBADQgIAFgQgCIgagEIglgFIgbACQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQgBACgFACIA9AFIAbADQARACAKAEQAEACgBACQAAADgEABQgNACgRgBIgdgDIhYgHQgTADgSgBIggAAIACABIAbAHQAPAEANAAQAogDANABIACABIgBABQgRADglABIgVAAQgLAAgJgDIgcgHQgPgDgOADIgKADQgBACgDACQgLAFgVABIgjAAIgTAAIgNAAgAlQAIIgqABIgBABIhRAMIgxAIQAHACAKACIAnAFQABAAAAAAQAAABABAAQAAAAAAAAQAAAAAAABIA1ABIA4ACQgcgDgQgGQgBAAAAAAQgBgBAAAAQAAAAAAgBQgBAAABgBQAAAAAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAXgGAxADICJANIABAAIAZgEQADAAADACQAqgDAbAGIABAAIAYgBIASgDQgSgCgMgEIgCAAIgDgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAAAAAgBIAAgBIgLAAQgZACgZgCQgfgCgKgIIgEAAIgfgCIgZgDQgaACgMAAQgKAEgPAAQgOAAgLgFQgEgBAAgDIAAgBgAg1APIArgBIAVgCQAcgDAJACIBTgBIgVgCQgQgBgjgGQghgFgSgBIgBAAIgLABIgCAAQgdAEgOAAIgdABIgeABQgEAAgFgCIgMADQgFAFAAADIABADIAbAAIAMAAIApABgADSAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAABAAIACgBIgYAAIAGACIAPAAIAAAAg");
	this.shape_185.setTransform(334.4438,188.7125);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-26.4,0,191.5).s().p("AA/ALIg2gEQgZgCglAAIg/AAIgBgBQA3gNA+ABIA5gCQAjgBAWAFQADABAAADQABADgDABQgUAJgdAAIgDAAg");
	this.shape_186.setTransform(26.5036,187.5102);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-47,0,170.8).s().p("AhlAtQgugBgegDIhCgIIgkgEQgWgDgNgFQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIAKgCIgvgEQgcgCgSgFQAAAAAAAAQAAAAAAAAQAAAAgBgBQAAAAAAAAIABgCQAVgGAdgBQgHAAgGgCIgBgBIABgBQAfgFAjABIARABIARABQAhgIAnABQAzgKAagDQAtgFAwACIAPAAIABgBQAQgIAeAAQASAAAgADIAcAAQA5gMBMANQAtAIBUAaQAQAEgCAPQgCAQgRAAIgsgBQgbgBgRAEIgZAGQgPACgKgEQgVAEgRgCQgBgBAAAAQgBAAAAAAQAAgBAAAAQgBAAAAgBQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAHgEAkgOQAIgFAKgEQgIgFgbgFQgcgHgSgBIAAAAQACAEgEAAQgbAFgwgHIg0gBIgCABQgIAFgKAAIgBADIARAAIAnABQAXABAPAEQADABABAEQAAAEgEAAQgPADgXgBIgngDIg2gDQADACAAADIATADIACABIAjABIAoABQAZABAOAFQAFABAAAFQAAAEgFACQgRAGgbgCIgsgEIgugCQgHACgFgBIgDgBIgDgBIgCAAQABABAAAAQAAABAAAAQABABAAAAQAAABgBABQAAAAAAABQAAABgBAAQAAAAAAABQgBAAgBAAQgQAEgXAAIgngBgAjUAIQAVAFAQANIABACIAGAAIAtADIAEgDIAmgNIAMgGIgCAAQgDgCgCgDIAAgBIgPgDQAAABAAAAQAAABgBAAQAAAAAAAAQgBABAAAAQgOADgRgCIgfgEQgpAGgQACgAhOgJIAFABIACgBg");
	this.shape_187.setTransform(434.3611,208.1926);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-9.7,0,208.1).s().p("AAkAGIgwgBIgmgBQgVgBgQgFIAAgBIABgBQAZACA9gCQA3gCAfAFQAAAAABAAQAAAAABABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQgBAAAAABQgBAAAAAAQgRADgYAAIgJAAg");
	this.shape_188.setTransform(479.725,170.8978);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-10.9,0,206.9).s().p("AAAAEQgtAAgWgEIgBgBIABgCQAagBAzACQArgBAPACQAAAAAAABQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBABQAAAAAAAAQgNACggAAIgXAAg");
	this.shape_189.setTransform(503.225,172.0563);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-8.4,0,209.5).s().p("AhtAAIAAgBQBugJBsAMQAAAAABAAQAAAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAAAAAQgBAAAAAAQghACgjAAQhGAAhQgGg");
	this.shape_190.setTransform(504.7875,169.4911);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-15.7,0,202.2).s().p("AAtAJIgngCIhWgGQgHAAACgFQACgFAFABIBUACIAnABQAXABAPAEQADAAAAADQAAAEgDAAQgLACgQAAIgLAAg");
	this.shape_191.setTransform(567.7188,176.7798);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-13.4,0,204.4).s().p("AA6AKIg6gHQhPgCglgGQAAAAgBAAQAAAAAAgBQAAAAAAAAQABAAAAgBQAXgEAjABIA6AEIA6ADQAjACAXAFQABAAAAABQABAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAgBAAQgMACgQAAIgegBg");
	this.shape_192.setTransform(569.825,174.5755);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-10.5,0,207.4).s().p("AAAAEQgmgDgSgBIgBAAIABgBIA5gDQAjgBAWAGQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAQgPADgVAAIgWgBg");
	this.shape_193.setTransform(543.675,171.6767);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],-1.4,-12.5,-1.4,205.4).s().p("AAuAIIgwgIQgvgIgvgFQArAEArAGIA0AEQAiADATAFQABABAAAAQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAQgBABAAAAQAAAAAAAAQgBAAAAAAQgVAAgcgFg");
	this.shape_194.setTransform(526.23,173.65);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-16.5,0,201.3).s().p("ABrAcQgugBgegDIhAgHIgkgEQgWgCgOgFIAAgBIALgDIgvgCQgcgCgSgEIgBgBIABgCQAjgMBNAIQAEgHATgBQAlgJAuADQAqACArAKQAAABABAAQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAAAQgBABAAAAQgRADgZgEIgpgFIgPgBQABAFgFACQgIADgJABQAWAFAPALIABABIAGABQAfACAtAAIAjAAQAUgBANADQAEABAAADQAAAEgEAAQgPAEgYAAIgngBg");
	this.shape_195.setTransform(542.45,177.6716);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-36,0,181.9).s().p("AA/ATIg3gJQhSgKgpgHQgGgBACgGQACgGAFABIB7AIIA2ACQAhACATAIQAEACAAAEQAAAEgEACQgPAHgWAAIgRgBg");
	this.shape_196.setTransform(586.575,197.107);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-16.2,0,201.7).s().p("AigAHQgBAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAQBAAGADgFQABgEAFAAIAjgBIAjgCIAggFIAggGQBIgKAnANQADABABADQAAAEgEAAQgSACgggCQgkgBgOABIgvAHQgcAGgRAAIhAAEIgEAAQgkAAgWgKg");
	this.shape_197.setTransform(456.1179,177.3338);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-12.4,0,205.5).s().p("AhJAPIghgFQgoABgTgHIgJAAQgBgBAAAAQgBAAAAAAQAAgBAAAAQgBAAAAAAIgVgCIgWgEQgRgDgWAGQgeAHgIAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIAdgLQATgHAMABQAbAAAqAJQABgBABAAQABgBAAAAQABAAAAAAQABAAAAAAIAMACIAegIIAQgEQAJgBAHACQASgBAkACIAFAAQATgCApAEIAeADQARADAJAHQABAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABIAdgCQAPgBAxAFQAXACAwgHQAggDAOABQABAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAQAAABgBAAQgNADgXACIgkAEQgXAEgfgGQgTgDgYgBIgrAAIgBAAIgCAAQgYAAgVgEQgPAEgVgBIgkgCQgJAAgdgDQgYgDgPACQAwABAXAHQAAAAABABQAAAAABAAQAAABAAAAQAAABAAAAQABABAAAAQAAAAgBABQAAAAAAAAQgBABAAAAQgHAEgLAAIgPgCg");
	this.shape_198.setTransform(463.555,173.5479);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-13.9,0,204).s().p("AA1ANIgxgIIg8gHIgXgCQgMgBgJgCIgBgBIABgBQAQgHAcADIAtAGIBKAJQAcADAJAEQABAAAAABQAAAAABAAQAAABAAAAQAAAAAAABIgCACIgSABQgNAAgQgCg");
	this.shape_199.setTransform(430.6,175.0296);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-15.9,0,202).s().p("AhLAWQgxgHgLgBIghgCQgTgCgNAAIg5AEQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAIABgCQAagKAjgBQARAAAtADQBJAEAaAFQAHgEALgBQADgHAIABQgKgDgQgDIgagEIg/gIQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAQA6ACAqAHQAAAAAAAAQABgBAAAAQAAAAAAgBQABAAAAAAQASgIArgDQAtgDAYAFIAHACIAHABQAUADAvABQArAAAYAFQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQg6AMhLgHQgLAFgSADQABAKgJAAIgEABQgUADgfAAIgOAAIgNgCIgOACIgCAAQAAADgEABIgOAAQgTAAgcgEg");
	this.shape_200.setTransform(401.125,176.9737);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-30.3,0,187.6).s().p("AA/ALIg2gEQgdgChgABIAAgBQA2gOA+ABQASABAngDQAjgBAWAGQADABABADQAAACgDABQgTAJgeAAIgDAAg");
	this.shape_201.setTransform(430.7911,191.3936);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-16.4,0,201.4).s().p("ABbALIgqgEQgigCglgGQgSACgVgCQgTgDgeADIgDgBQgHgDgHABIgDAAIgHAAIAVgDIAcgDIA0gBQAOAAAJADQABAAABAAQAAABAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAgBAAIBFACIAoAAQAYAAAOADQAEABAAADQAAADgEABQgJACgOAAIgUgBg");
	this.shape_202.setTransform(274.5025,177.5614);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-14.4,0,203.5).s().p("AgNAAIgtAAIgfAAIhnAAIABgDIAWgBQAcAAA1gHQAigEAbAHQAbAHAIAFIARgEIAZgCQAcAAAGACIAbAFIApABQAdABAMAGIhUgBIgBAAQgTgCgdABIgwABIgDACQgCgNgUgBg");
	this.shape_203.setTransform(233.35,175.5417);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-12,0,205.7).s().p("AAAACIgqgBQgFgBgIgBIA+AAQAigBAOACIABAAIgBABQgKABgWAAIgXAAg");
	this.shape_204.setTransform(958.35,173.1333);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-10.6,0,207.2).s().p("AANgBIAGAAIABABIgBAAIgmACg");
	this.shape_205.setTransform(966.675,171.8);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-11.8,0,206).s().p("AAAACIgvgCQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAvgCQAdgBATADQAAABAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQgMACgPAAIgVgBg");
	this.shape_206.setTransform(991.6,172.9004);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-12.9,0,205).s().p("AAyAFIgpgEQgxgGgygCIAAgBQAvADAtAFIAtABQAbACAQAEIACABQAAAAAAAAQgBABAAAAQAAAAAAAAQgBAAAAAAQgRAAgXgEg");
	this.shape_207.setTransform(976.0375,174);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-15,0,202.9).s().p("AgDAMQgRgCgLgDIAAAAIAIgCQhDgEgJgBQgBAAAAAAQgBAAAAAAQAAgBABAAQAAAAABAAQAdgHA/AEQAEgEAOgBQAkgGA0AEQgBAEADAEIgfgCQACADgGABIgOABIAIACIgTACQgNACgDAIIgcgCg");
	this.shape_208.setTransform(985.1,176.1355);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-16.7,0,201.2).s().p("ABEAUIgBgBIABgCQALgDAegCIghgBIgngBQgUgBgOgGQgeAGg6gBQgvAAgrgJIgBgBQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQA+AJAkgCQAXgBAvgEIgFgEIgCgCQgeABgQgGQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABAAQAgABAegDQAcgEAQAAQAmACA2AMIABABIgBACQgSAGgfgFQgogIgKABIgjADQAQAIAdABQAQAAAgAAIA1AAIAaABQgJADgDAGIghABQgKAAgGAEQgGADgBAGIgKAAQgUAAgMgEg");
	this.shape_209.setTransform(956.5,177.8313);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-10.7,0,207.2).s().p("AAAACIgqgBQgEgBgJgBIA+AAQAjgBANACIABAAIgBABQgKACgWAAIgXgBg");
	this.shape_210.setTransform(810.575,171.8333);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-9.3,0,208.5).s().p("AANAAIAFAAIACAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAABgBAAIglAAg");
	this.shape_211.setTransform(818.9,170.5);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-10.5,0,207.4).s().p("AAAACIgvgCQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAwgCQAcgBATADQAAABAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQgMACgPAAIgVgBg");
	this.shape_212.setTransform(843.85,171.6004);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-11.6,0,206.3).s().p("AAxAGIgogGQgxgEgzgEIAAAAQAwADAtAEIAtADQAbABAQADIACACIgCABQgRgBgYgCg");
	this.shape_213.setTransform(828.275,172.7);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-14.1,0,203.8).s().p("AANAEIgsgBIgeAAIgZAAQgGADgCAEIgcgCQgRgBgLgDIAAgBIgPAAIABgCQgqgCgNgCQAAAAAAAAQgBgBAAAAQAAAAABAAQAAgBAAAAQAdgGBAAEQADgEAQgBQAkgGAzADQAAAEADAEIARADQAbAFAJAGIAQgEIAZgCQAcAAAGABIAbAHIAqABQAdAAALAGIhTAAIgBAAQgUgCgdAAIgvABIgDACQgCgMgWgBg");
	this.shape_214.setTransform(849.25,175.1855);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-15.4,0,202.5).s().p("ABEAUIgCgBIACgCQALgDAfgCIgigBIgngBQgUgBgOgGQgeAGg6gBQguAAgtgJIAAgBQAAAAAAgBQAAAAAAAAQAAAAABAAQAAAAAAAAQA+AJAjgCQAYgBAvgEIgGgEIgCgCQgdABgQgGQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAABAAQAAAAABAAQAgABAdgDQAggFANABQAmACA2AMIABABQAAABAAAAQAAAAAAAAQAAAAAAAAQgBABAAAAQgSAGgfgFQgogIgKABIgjADQAPAIAeABQAQAAAgAAIA1AAIAaABQgKADgCAGIggABQgKAAgHAEQgGADgBAGIgKAAQgUAAgMgEg");
	this.shape_215.setTransform(808.7417,176.525);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-34.9,0,182.9).s().p("AAAACIgqgBQgFgBgIgBIA9AAQAkgBANACIABAAIgBABQgKABgWAAIgXAAg");
	this.shape_216.setTransform(827.35,196.0833);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-33.6,0,184.3).s().p("AANgBIAGAAIABABIgBAAIgmACg");
	this.shape_217.setTransform(835.675,194.75);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-34.8,0,183.1).s().p("AABACIgwgCQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAwgCQAdgBARADQABABAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAQgLACgPAAIgUgBg");
	this.shape_218.setTransform(860.6,195.8504);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-35.8,0,182.1).s().p("AAyAFIgpgEQgxgGgygCIAAgBQAvADAtAFIAtABQAbACAQAEIACABQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAQgRAAgXgEg");
	this.shape_219.setTransform(845.0375,196.95);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-38,0,179.9).s().p("AgEAMQgQgCgLgDIAAAAIAJgCQhDgEgKgBQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAAAABAAQAcgHBAAEQADgEAPgBQAkgGAzAEQABAEADAEIghgCQACADgEABIgQABIAJACIgTACQgNACgEAIIgcgCg");
	this.shape_220.setTransform(854.1,199.0855);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-8.7,0,209).s().p("AgqABQgGgCgHAAIA+AAQAjgBANACIABAAIgBABQgLABgsAAIgqgBg");
	this.shape_221.setTransform(194.25,169.8167);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-7.3,0,210.6).s().p("AANAAIAGAAIABAAIgBABIgmAAg");
	this.shape_222.setTransform(202.575,168.45);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-8.4,0,209.2).s().p("AAAADIgvgDQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAvgCQAdgBASADQABAAAAABQAAAAAAAAQAAAAAAAAQAAABgBAAQgLABgRAAIgTAAg");
	this.shape_223.setTransform(227.5125,169.5817);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],-1.1,-9.7,-1.1,208.2).s().p("AgCAAIhNgHQAkACAiAEIAsABQAbACAQAEIACABQAAABAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgRAAg/gIg");
	this.shape_224.setTransform(213.1375,170.775);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-11.6,0,206.2).s().p("AgDAMQgRgBgLgDQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAIAJgCQg8gCgRgDQgEAAAEgBQAggHA8AFQAFgFANAAQAogHAwAEQAAAFADADIgggCQABACgEACIgPABIAIACIgTACQgNADgDAHIgcgCg");
	this.shape_225.setTransform(220.9625,172.7988);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-13.4,0,204.5).s().p("ABDAUIgBgBIABgCQANgEAdgCIgiAAIgmgBQgVgBgNgGQgcAFg9AAQgsAAgugKQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBABAAQA7AJAmgCQAYgBAvgEIgGgEIgCgDQgcACgRgGQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAgBAAAAQABgBAAAAQABAAAAAAQABAAABAAQAmABAXgEQAkgEAIABQAnACA1AMQAFABgEACQgSAGgfgFQgogIgLABIgjADQAQAIAdABIAxAAIA1AAQAUAAAFABQgJADgDAGIggAAQgUABgDANIgKAAQgUAAgNgEg");
	this.shape_226.setTransform(192.4179,174.5063);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-36.6,0,181.3).s().p("AAAACIgqgBQgEgBgJgBIA+AAQAigBAOACIABAAIgBABQgKABgWAAIgXAAg");
	this.shape_227.setTransform(221.75,197.7333);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-35.2,0,182.6).s().p("AANAAIAGAAIABAAIgBABIgmABg");
	this.shape_228.setTransform(230.075,196.4);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-36.4,0,181.4).s().p("AAAACIgugCQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAIAugCQAdgBATADIAAABQgMACgPAAIgVgBg");
	this.shape_229.setTransform(255.025,197.5004);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-37.5,0,180.4).s().p("AAyAGIgpgGQgwgFgzgDIAAAAQAuACAvAFIAsACQAbACAQAEIACABQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAQgRAAgXgDg");
	this.shape_230.setTransform(239.4375,198.6);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-39.6,0,178.3).s().p("AgfAHIAAAAIAIgCIgmgCQgXgBgPgCQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAAAABAAQAcgHBAAEQADgEAPgBQAkgGA0AEQgBAEADAEIgfgCQABADgFABIgPABIAJACIgTACQgMACgFAIQgsgEgLgDg");
	this.shape_231.setTransform(248.5125,200.7355);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-41.3,0,176.6).s().p("ABDAUIgBgBIABgCQAMgDAegCIgigBIgmgBQgUgBgOgGQgeAGg6gBQguAAgtgJIgBgBQABAAAAgBQAAAAAAAAQAAAAABAAQAAAAAAAAQA9AJAkgCQAYgBAvgEIgGgEIgCgCQgcABgRgGQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAABAAQAAAAABAAQAgABAdgDQAggFAMABQAnACA1AMIADABIgCACQgSAGgfgFQgngIgLABIgjADQAPAIAdABQARAAAgAAIA1AAIAaABQgJADgEAGIgfABQgKAAgHAEQgGADgBAGIgKAAQgUAAgNgEg");
	this.shape_232.setTransform(219.9,202.425);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-12.5,0,205.4).s().p("AgqABQgEgBgJgBIA+AAIAYAAQAOAAAKABIABAAIgBABQgLACgsAAg");
	this.shape_233.setTransform(337.75,173.6417);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-11.2,0,206.7).s().p("AANAAIAGAAIABAAIgBAAIgmABg");
	this.shape_234.setTransform(346.075,172.3);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-12.3,0,205.4).s().p("AAAACIgugCQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAIAugCQAeAAASACIAAABQgMACgPAAIgVgBg");
	this.shape_235.setTransform(371.025,173.425);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-13.4,0,204.5).s().p("AAyAGIgpgGQgwgEgzgEIAAAAQAuACAvAFIAsADQAbABAQADIACACQAAAAgBAAQAAABAAAAQAAAAAAAAQgBAAAAAAQgRgBgXgCg");
	this.shape_236.setTransform(355.4375,174.5);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0.1,-15.5,0.1,202.3).s().p("AgDAMQgRgCgLgDIAAAAIAJgCIgngCQgXgBgPgCQgEgBAEAAQAdgHA/AEQAEgEAOgBQAlgGAzAEQAAAEADAEIgggCQABADgEABIgPABIAIACIgTACQgMACgEAIIgcgCg");
	this.shape_237.setTransform(364.4625,176.6355);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-17.2,0,200.7).s().p("ABDAUIgBgBIABgCQAMgDAfgCIgjgBIgmgBQgUgBgOgGQgbAGg9AAQgwgBgrgJIgBgBQABgBAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQA9AJAkgCQAYgBAvgEIgGgEIgBgCQgbABgTgGQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAABAAQAAAAABAAQAgABAdgDQAdgEAPAAQAnACA1AMIACABIgBACQgSAGgfgFQgngIgLABIgjADQAPAIAdABQARAAAgAAIA1AAIAZABQgIADgEAGIgfABQgVAAgDANIgKAAQgUAAgNgEg");
	this.shape_238.setTransform(335.9,178.3313);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-7.9,0,210).s().p("AgBACIgpgBQgGgCgHAAIA9AAQAkgBANACIABAAIgBABQgNABgXAAIgUAAg");
	this.shape_239.setTransform(280.25,168.981);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-6.5,0,211.4).s().p("AANAAIAFAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAIgCABIglABg");
	this.shape_240.setTransform(288.575,167.6);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-7.6,0,210.2).s().p("AAAADIgvgDQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAvgCQAdgBASADQABAAAAABQAAAAAAAAQAAAAAAAAQAAABgBAAQgLABgRAAIgTAAg");
	this.shape_241.setTransform(313.5125,168.7317);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],-1.2,-8.8,-1.2,209.1).s().p("AgCAAIhNgHQAkACAiAEIAsABQAbACAQAEIACABQAAAAgBABQAAAAAAAAQAAAAgBAAQAAAAAAAAQgRAAg/gIg");
	this.shape_242.setTransform(299.1375,169.925);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-10.8,0,207.1).s().p("AgDAMQgRgBgLgDIAAgBIAJgBQhBgEgMgCQgEAAAEgBQAcgGBAAEQAFgFANAAQAogHAwAEQAAAFADADIgggCQAAABAAAAQAAABAAAAQgBABAAAAQgBABgBAAIgPACIAIABIgTACQgNACgDAIIgcgCg");
	this.shape_243.setTransform(306.9625,171.9488);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-12.6,0,205.3).s().p("ABDAUIgBgBIABgCQAPgEAbgBIgigBIgmgBQgUgBgOgGQgcAFg9AAQgsAAgugKQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBABAAQA7AJAmgCIBHgFIgGgEIgCgDQgcACgRgGQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAgBAAAAQABgBAAAAQABAAAAAAQABAAABAAQAmABAXgEQAkgEAIABQAnACA1AMQAFABgEACQgSAGgfgFQgogIgLABIgjADQAQAIAdABIAxAAIA1AAQAUAAAFABQgJADgDAGIggAAQgVABgCANIgKAAQgUAAgNgEg");
	this.shape_244.setTransform(278.4179,173.6563);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-19.5,0,198.4).s().p("AA0AHIgtgDQgQgBhXAAIAAAAQAugIAyABQAPAAAggBQAdgBASADQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgQAGgXAAIgEAAg");
	this.shape_245.setTransform(220.3667,180.5908);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-46.6,0,171.2).s().p("AgBAEQgiAAgQgCQgHgFgJAAQAZgBAyACIAdgBQARAAAMACQABAAAAAAQAAAAAAABQABAAAAAAQAAAAAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAQAAAAgBAAQgOADgUAAIghAAg");
	this.shape_246.setTransform(198.675,207.7688);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-44.3,0,173.6).s().p("AAQgCIAGABQABAAAAABQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAQgWACgXAAg");
	this.shape_247.setTransform(208.75,205.45);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-46.3,0,171.6).s().p("AAAAEQgngDgSgBIAAAAIAAgBIA5gDQAkgBAVAFIACABIgCABQgOADgVAAIgWgBg");
	this.shape_248.setTransform(239,207.3517);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],-1.4,-48.2,-1.4,169.6).s().p("AAtAIIgvgIQgtgIgxgFQArAEArAGIA0AEQAiACATAGQABABAAAAQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgUgBgegFg");
	this.shape_249.setTransform(221.525,209.375);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-40.9,0,177).s().p("AAkAGIgwgBQgbABgLgCQgWgBgPgGIAAgBQAZACA+gCQA3gCAfAEQAAABABAAQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgSACgYAAIgIAAg");
	this.shape_250.setTransform(350.7375,202.05);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-42.2,0,175.6).s().p("AAAAEQgxgBgSgDQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQABAAAAAAQAAAAABAAQAZgBAzABIAdAAQARgBAMADIABABIgBACQgOADgUAAIgigBg");
	this.shape_251.setTransform(374.1938,203.38);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-39.3,0,178.4).s().p("AhtgBIAAAAQBsgLBuANQAAABABAAQAAAAAAAAQAAAAAAABQABAAAAAAQAAABAAAAQAAAAgBABQAAAAAAAAQAAAAgBAAQgfACghAAQhHAAhTgIg");
	this.shape_252.setTransform(375.7425,200.5114);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-41.8,0,176.1).s().p("AAAAFIg5gFIgBAAIABgBIA6gDQAjgBAVAGIABABIgBABQgOADgTAAIgYgBg");
	this.shape_253.setTransform(414.65,202.9384);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-43.8,0,174).s().p("ABtAQQgUgBgdgFIgxgJQhAgLg5gFQA6AEA3AJIA2AEQAhADATAHQABAAAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAAAAAIgBAAg");
	this.shape_254.setTransform(395.755,204.98);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-56.6,0,161.3).s().p("AAAAGQhKgJgeACQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAVgJAeACQASABAjAEQALACAoABQAhABATADQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAgBAAQgQADgWAAQgcAAglgFg");
	this.shape_255.setTransform(453.575,217.7301);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-53.8,0,164.1).s().p("AhmAEQgBAAgBAAQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAAAABAAQAAgBAAAAQABgBAAAAQABAAABAAQBjgMBrASIABACIgBABQgTAAgigBIg0gCIgzADIgRABQgUAAgOgEg");
	this.shape_256.setTransform(450.3389,214.9368);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.lf(["#2AACDF","#D9F8FC"],[0,1],0,-43.8,0,174).s().p("AhJARQgcgGgFAAIgeAAQgRgCgNgFIgJAAQAAAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAAAIgWgCIgWgFQgQgCgXAGQgeAHgHABIAAgBIAdgMQATgIAMAAQAaABArAJQADgCACABIALABIAfgIQAVgHAKADIA3ACIAFAAQAVgCAnAEIAeADQAQAEAKAHQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAABIAdgBQAPgBAxAEQAZADAugIQAfgEAPACQAAAAABAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQgBAAAAAAIgkAGIgkAFQgYAEgegGQgSgEgZgBIgrAAIgDAAQgbgBgSgEQgPAFgVgBIgkgDIgmgDQgYgDgPACQAXAAAMABQAUACAPAGQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAgBABQgGADgKAAQgHAAgJgBgAhygBIgEgDIgJACIANABIAAAAg");
	this.shape_257.setTransform(334.5625,204.9971);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#EBCE94").s().p("AgdAJQgMgDAAgGQAAgEAMgEQAMgEARAAQARAAANAEQAMAEAAAEQAAAGgMADQgNAEgRAAQgRAAgMgEg");
	this.shape_258.setTransform(518.275,461.825);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#EBCE94").s().p("AgdAJQgMgEAAgFQAAgEAMgEQAMgDARgBQARABANADQAMAEAAAEQAAAFgMAEQgNADgRABQgRgBgMgDg");
	this.shape_259.setTransform(488.375,452.15);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#EBCE94").s().p("AgdAJQgMgEAAgFQAAgEAMgEQAMgEARAAQARAAANAEQAMAEAAAEQAAAFgMAEQgNAEgRAAQgRAAgMgEg");
	this.shape_260.setTransform(471.675,453.425);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#EBCE94").s().p("AhGASQgdgHAAgLQAAgJAdgIQAegHAoAAQApAAAeAHQAdAIAAAJQAAALgdAHQgeAHgpAAQgpAAgdgHg");
	this.shape_261.setTransform(478.375,445.275);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#EBCE94").s().p("AhWASQgkgIAAgKQAAgKAkgHQAkgIAyAAQAzAAAkAIQAkAHAAAKQAAAKgkAIQgkAIgzAAQgxAAglgIg");
	this.shape_262.setTransform(515.325,451.725);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#EBCE94").s().p("Ag/AOQgagFAAgJQAAgIAagFQAagHAlAAQAlAAAbAHQAaAFAAAIQAAAJgaAFQgbAGglABQgkgBgbgGg");
	this.shape_263.setTransform(539.475,459.8);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#EBCE94").s().p("AgdAOQgNgGAAgIQAAgHANgGQAMgFARAAQARAAANAFQANAGAAAHQAAAIgNAGQgMAFgSAAQgRAAgMgFg");
	this.shape_264.setTransform(507.825,442.025);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#EBCE94").s().p("AggAGQgPgDAAgDQAAgCAPgCQAOgDASAAQATAAAOADQAOACABACQgBADgOADQgNABgUAAQgSAAgOgBg");
	this.shape_265.setTransform(996.85,454.2);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#EBCE94").s().p("AggAGQgOgDAAgDQAAgCAOgCQAOgCASAAQAUAAAOACQANACAAACQAAADgNADQgOABgUAAQgSAAgOgBg");
	this.shape_266.setTransform(963.325,448.55);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#EBCE94").s().p("AghAFQgOgCABgDQgBgGAvAAQAvAAAAAGQAAADgNACQgOACgUAAQgTAAgOgCg");
	this.shape_267.setTransform(944.6,449.275);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#EBCE94").s().p("AhOALQghgFAAgGQAAgFAhgEQAggFAuAAQAvAAAgAFQAhAEAAAFQAAAGghAFQghAEguAAQguAAgggEg");
	this.shape_268.setTransform(952.125,444.525);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#EBCE94").s().p("AhgALQgpgFAAgGQAAgFApgFQAngEA5AAQA5AAAoAEQApAFAAAFQAAAGgpAFQgoAEg5AAQg4AAgogEg");
	this.shape_269.setTransform(993.575,448.3);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#EBCE94").s().p("AhHAJQgdgEAAgFQAAgEAdgDQAegEApAAQAqAAAeAEQAdADAAAEQAAAFgdAEQgeADgqAAQgpAAgegDg");
	this.shape_270.setTransform(1020.65,453);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#EBCE94").s().p("AggAIQgPgDAAgFQAAgEAPgDQANgDATAAQAUAAANADQAOADABAEQgBAFgOADQgNADgUAAQgTAAgNgDg");
	this.shape_271.setTransform(985.15,442.625);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#EBCE94").s().p("AgTAFQgIgCAAgDQAAgCAIgCQAIgCALAAQAcAAAAAGQAAADgIACQgIACgMAAQgLAAgIgCg");
	this.shape_272.setTransform(911.575,456.475);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#EBCE94").s().p("AgTAFQgIgCAAgDQAAgCAIgCQAJgCAKAAQAMAAAIACQAIACAAACQAAADgIACQgIACgMAAQgKAAgJgCg");
	this.shape_273.setTransform(891.5,451);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#EBCE94").s().p("AgbAAQAAgCAIgCQAIgCALAAQAMAAAIACQAIACAAACQAAAHgcAAQgbAAAAgHg");
	this.shape_274.setTransform(880.275,451.7);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#EBCE94").s().p("AguAKQgUgEAAgGQAAgFAUgEQATgEAbAAQAcAAAUAEQATAEAAAFQAAAGgTAEQgUAEgcAAQgaAAgUgEg");
	this.shape_275.setTransform(884.775,447.125);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#EBCE94").s().p("Ag5AKQgZgEAAgGQAAgFAZgEQAYgEAhgBQAiABAZAEQAXAEAAAFQAAAGgXAEQgZAEgiAAQghAAgYgEg");
	this.shape_276.setTransform(909.6,450.75);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#EBCE94").s().p("AgqAIQgSgDAAgFQAAgEASgDQASgDAYgBQAZABASADQASADAAAEQAAAFgSADQgSAEgZAAQgYAAgSgEg");
	this.shape_277.setTransform(925.825,455.3);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#EBCE94").s().p("AgTAIQgIgEAAgEQAAgEAIgDQAJgDAKAAQAMAAAIADQAIADAAAEQAAAEgIAEQgIADgMAAQgKAAgJgDg");
	this.shape_278.setTransform(904.55,445.3);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#EBCE94").s().p("AgaAHQgLgDAAgEQAAgDALgCQALgEAPAAQAPAAAMAEQALACAAADQAAAEgLADQgLACgQAAQgPAAgLgCg");
	this.shape_279.setTransform(275.925,446.65);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#EBCE94").s().p("AgaAHQgLgDAAgEQAAgDALgCQALgDAPAAQAQAAALADQALACAAADQAAAEgLADQgLADgQAAQgPAAgLgDg");
	this.shape_280.setTransform(248.925,439.3);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#EBCE94").s().p("AgaAHQgLgDAAgEQAAgDALgDQALgDAPAAQAQAAALADQALADAAADQAAAEgLADQgLADgQAAQgPAAgLgDg");
	this.shape_281.setTransform(233.825,440.275);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#EBCE94").s().p("Ag/ANQgagFAAgIQAAgHAagGQAbgFAkAAQAlAAAbAFQAaAGAAAHQAAAIgaAFQgbAGglAAQgkAAgbgGg");
	this.shape_282.setTransform(239.875,434.125);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#EBCE94").s().p("AhNAOQghgGAAgIQAAgHAhgGQAggFAtgBQAvABAfAFQAhAGAAAHQAAAIghAGQggAFguAAQgtAAgggFg");
	this.shape_283.setTransform(273.25,439);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#EBCE94").s().p("Ag5ALQgYgFAAgGQAAgFAYgFQAYgFAhAAQAiAAAYAFQAYAFAAAFQAAAGgYAFQgYAEgiABQghgBgYgEg");
	this.shape_284.setTransform(295.075,445.1);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#EBCE94").s().p("AgaALQgMgFAAgGQAAgFAMgEQALgFAPAAQAPAAAMAFQAMAEAAAFQAAAGgMAFQgLAEgQAAQgPAAgLgEg");
	this.shape_285.setTransform(266.5,431.625);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#EBCE94").s().p("AglAJQgPgEAAgFQAAgEAPgFQAQgDAVAAQAWAAAQADQAPAFAAAEQAAAFgPAEQgQAFgWAAQgVAAgQgFg");
	this.shape_286.setTransform(122.475,456.55);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#EBCE94").s().p("AglAJQgPgDAAgGQAAgEAPgEQAQgEAVAAQAWAAAQAEQAPAEAAAEQAAAGgPADQgQAEgWAAQgVAAgQgEg");
	this.shape_287.setTransform(84.775,446.275);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#EBCE94").s().p("AglAJQgPgEAAgFQAAgFAPgDQAQgEAVAAQAWAAAQAEQAPADAAAFQAAAFgPAEQgQAEgWAAQgVAAgQgEg");
	this.shape_288.setTransform(63.725,447.625);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#EBCE94").s().p("AhYATQglgIAAgLQAAgKAlgIQAlgIAzAAQA0AAAlAIQAlAIAAAKQAAALglAIQglAIg0AAQgzAAglgIg");
	this.shape_289.setTransform(72.175,439.025);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#EBCE94").s().p("AhsATQgugIAAgLQAAgKAugIQAtgIA/AAQBAAAAuAIQAtAIAAAKQAAALgtAIQguAIhAAAQg/AAgtgIg");
	this.shape_290.setTransform(118.775,445.825);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#EBCE94").s().p("AhPAPQgigGAAgJQAAgIAigGQAhgHAuAAQAvAAAhAHQAiAGAAAIQAAAJgiAGQghAHgvAAQguAAghgHg");
	this.shape_291.setTransform(149.175,454.375);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#EBCE94").s().p("AglAPQgQgHAAgIQAAgHAQgHQAQgFAVAAQAWAAAQAFQAQAHAAAHQAAAIgQAHQgQAFgWAAQgVAAgQgFg");
	this.shape_292.setTransform(109.325,435.55);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#EBCE94").s().p("AglAJQgPgDAAgGQAAgEAPgEQAQgEAVAAQAWAAAQAEQAPAEAAAEQAAAGgPADQgQAEgWAAQgVAAgQgEg");
	this.shape_293.setTransform(228.925,464.475);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#EBCE94").s().p("AglAJQgPgEAAgFQAAgFAPgEQAQgDAVAAQAWAAAQADQAPAEAAAFQAAAFgPAEQgQAEgWABQgVgBgQgEg");
	this.shape_294.setTransform(191.225,454.2);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#EBCE94").s().p("AglAJQgPgEAAgFQAAgFAPgEQAQgDAVAAQAWAAAQADQAPAEAAAFQAAAFgPAEQgQAFgWAAQgVAAgQgFg");
	this.shape_295.setTransform(170.175,455.55);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#EBCE94").s().p("AhYATQglgIAAgLQAAgKAlgIQAlgIAzAAQA0AAAlAIQAlAIAAAKQAAALglAIQglAIg0AAQgzAAglgIg");
	this.shape_296.setTransform(178.625,446.975);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#EBCE94").s().p("AhsATQgugHAAgMQAAgKAugIQAtgIA/AAQBAAAAuAIQAtAIAAAKQAAAMgtAHQguAIhAAAQg/AAgtgIg");
	this.shape_297.setTransform(225.225,453.75);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#EBCE94").s().p("AhPAQQgigHAAgJQAAgIAigHQAhgGAuAAQAvAAAhAGQAiAHAAAIQAAAJgiAHQghAGgvAAQguAAghgGg");
	this.shape_298.setTransform(255.675,462.3);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#EBCE94").s().p("AglAPQgQgHAAgIQAAgIAQgFQAQgHAVAAQAWAAAQAHQAQAFAAAIQAAAIgQAHQgQAFgWABQgVgBgQgFg");
	this.shape_299.setTransform(215.775,443.5);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#DBB66E").s().p("AghAMQgOgFAAgHQAAgGAOgFQAOgFATAAQAUAAAOAFQAOAFAAAGQAAAHgOAFQgOAFgUAAQgTAAgOgFg");
	this.shape_300.setTransform(546.075,536.025);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#DBB66E").s().p("AghAMQgOgFAAgHQAAgGAOgFQAOgFATAAQAUAAAOAFQAOAFAAAGQAAAHgOAFQgOAFgUAAQgTAAgOgFg");
	this.shape_301.setTransform(579.775,522.775);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#DBB66E").s().p("AghAMQgOgFAAgHQAAgGAOgFQAOgFATAAQAUAAAOAFQAOAFAAAGQAAAHgOAFQgOAFgUAAQgTAAgOgFg");
	this.shape_302.setTransform(598.675,524.525);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#DBB66E").s().p("AhPAYQghgKAAgOQAAgNAhgKQAhgKAuAAQAvAAAhAKQAhAKAAANQAAAOghAKQghAKgvAAQguAAghgKg");
	this.shape_303.setTransform(591.075,513.45);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#DBB66E").s().p("AhhAZQgpgLAAgOQAAgOApgKQAogKA5AAQA6AAAoAKQApAKAAAOQAAAOgpALQgoAKg6AAQg5AAgogKg");
	this.shape_304.setTransform(549.375,522.2);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#DBB66E").s().p("AhHAUQgegJAAgLQAAgKAegJQAegIApAAQAqAAAeAIQAeAJAAAKQAAALgeAJQgeAIgqAAQgpAAgegIg");
	this.shape_305.setTransform(522.1,533.2);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#DBB66E").s().p("AghASQgOgHAAgLQAAgKAOgIQAOgIATAAQAUAAAOAIQAOAIAAAKQAAALgOAHQgOAJgUgBQgTABgOgJg");
	this.shape_306.setTransform(557.85,509);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#DBB66E").s().p("AghAMQgOgFAAgHQAAgGAOgFQAOgFATAAQAUAAAOAFQAOAFAAAGQAAAHgOAFQgOAFgUAAQgTAAgOgFg");
	this.shape_307.setTransform(414.325,551.725);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#DBB66E").s().p("AghAMQgOgFAAgHQAAgGAOgFQAOgFATAAQAUAAAOAFQAOAFAAAGQAAAHgOAFQgOAFgUAAQgTAAgOgFg");
	this.shape_308.setTransform(448.075,538.475);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#DBB66E").s().p("AghAMQgOgFAAgHQAAgGAOgFQAOgFATAAQAUAAAOAFQAOAFAAAGQAAAHgOAFQgOAFgUAAQgTAAgOgFg");
	this.shape_309.setTransform(466.925,540.225);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#DBB66E").s().p("AhPAZQghgKAAgPQAAgNAhgLQAhgKAuAAQAvAAAhAKQAhALAAANQAAAOghALQghAJgvABQgugBghgJg");
	this.shape_310.setTransform(459.375,529.15);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#DBB66E").s().p("AhhAZQgogKAAgPQAAgNAogLQAogKA5AAQA5AAApAKQAoALAAANQAAAPgoAKQgpAKg5AAQg5AAgogKg");
	this.shape_311.setTransform(417.65,537.9);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#DBB66E").s().p("AhHAUQgegJAAgLQAAgLAegIQAegIApAAQArAAAdAIQAeAIAAALQAAALgeAJQgdAIgrAAQgpAAgegIg");
	this.shape_312.setTransform(390.4,548.9);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#DBB66E").s().p("AghATQgOgIAAgLQAAgKAOgIQAOgHATAAQAUAAAOAHQAOAIAAAKQAAALgOAIQgOAHgUAAQgTAAgOgHg");
	this.shape_313.setTransform(426.1,524.7);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#DBB66E").s().p("AguARQgUgHAAgKQAAgJAUgHQATgHAbAAQAcAAATAHQAUAHAAAJQAAAKgUAHQgUAHgbAAQgbAAgTgHg");
	this.shape_314.setTransform(473.075,583.775);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#DBB66E").s().p("AguARQgUgHAAgKQAAgJAUgHQATgHAbAAQAbAAAUAHQAUAHAAAJQAAAKgUAHQgTAHgcAAQgbAAgTgHg");
	this.shape_315.setTransform(520.175,565.325);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#DBB66E").s().p("AguARQgTgHgBgKQABgJATgHQATgHAbAAQAbAAAUAHQAUAHgBAJQABAKgUAHQgUAHgbAAQgbAAgTgHg");
	this.shape_316.setTransform(546.5,567.725);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#DBB66E").s().p("AhuAiQgvgOAAgUQAAgTAvgOQAugOBAAAQBBAAAuAOQAvAOgBATQABAUgvAOQguAOhBAAQhAAAgugOg");
	this.shape_317.setTransform(535.9,552.275);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#DBB66E").s().p("AiIAjQg5gPAAgUQAAgTA5gOQA5gPBPAAQBQAAA5APQA5AOAAATQAAAUg5APQg5AOhQAAQhPAAg5gOg");
	this.shape_318.setTransform(477.675,564.5);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#DBB66E").s().p("AhkAcQgpgMAAgQQAAgPApgMQAqgLA6AAQA7AAAqALQApAMAAAPQAAAQgpAMQgqALg7AAQg6AAgqgLg");
	this.shape_319.setTransform(439.65,579.875);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#DBB66E").s().p("AgvAaQgTgLAAgPQAAgOATgLQAUgLAbAAQAcAAAUALQATALAAAOQAAAPgTALQgUALgcAAQgbAAgUgLg");
	this.shape_320.setTransform(489.5,546.05);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#EBCE94").s().p("AgaAHQgLgDAAgEQAAgDALgDQALgDAPAAQAQAAALADQALADAAADQAAAEgLADQgLADgQgBQgPABgLgDg");
	this.shape_321.setTransform(925.125,485.15);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#EBCE94").s().p("AgaAHQgLgDAAgEQAAgDALgCQALgEAPAAQAQAAALAEQALACAAADQAAAEgLADQgLACgQAAQgPAAgLgCg");
	this.shape_322.setTransform(898.125,477.8);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#EBCE94").s().p("AgaAHQgLgDAAgEQAAgDALgDQALgDAPAAQAQAAALADQALADAAADQAAAEgLADQgLADgQAAQgPAAgLgDg");
	this.shape_323.setTransform(883.025,478.775);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#EBCE94").s().p("Ag/ANQgbgFAAgIQAAgHAbgGQAbgFAkAAQAmAAAaAFQAaAGAAAHQAAAIgaAFQgaAGgmAAQgkAAgbgGg");
	this.shape_324.setTransform(889.1,472.625);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#EBCE94").s().p("AhNAOQghgGAAgIQAAgHAhgGQAggFAtAAQAuAAAgAFQAhAGAAAHQAAAIghAGQghAFgtAAQgtAAgggFg");
	this.shape_325.setTransform(922.5,477.5);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#EBCE94").s().p("Ag5ALQgXgFAAgGQAAgGAXgEQAZgEAggBQAiABAXAEQAZAEAAAGQAAAGgZAFQgXAFgiAAQggAAgZgFg");
	this.shape_326.setTransform(944.3,483.6);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#EBCE94").s().p("AgaALQgLgFAAgGQAAgFALgEQALgFAPAAQAQAAALAFQALAEAAAFQAAAGgLAFQgLAEgQAAQgPAAgLgEg");
	this.shape_327.setTransform(915.7,470.125);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#EBCE94").s().p("AglAJQgPgDAAgGQAAgEAPgEQAQgEAVAAQAWAAAQAEQAPAEAAAEQAAAGgPADQgQAEgWAAQgVAAgQgEg");
	this.shape_328.setTransform(878.125,502.975);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#EBCE94").s().p("AglAJQgPgDAAgGQAAgFAPgDQAQgEAVgBQAWABAQAEQAQADAAAFQAAAGgQADQgQAEgWAAQgVAAgQgEg");
	this.shape_329.setTransform(840.45,492.7);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#EBCE94").s().p("AglAKQgPgEAAgGQAAgFAPgDQAQgEAVgBQAWABAQAEQAPADAAAFQAAAGgPAEQgQADgWAAQgVAAgQgDg");
	this.shape_330.setTransform(819.375,494.05);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#EBCE94").s().p("AhYATQglgIAAgLQAAgKAlgIQAlgIAzAAQA0AAAlAIQAlAIAAAKQAAALglAIQglAIg0AAQgzAAglgIg");
	this.shape_331.setTransform(827.85,485.45);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#EBCE94").s().p("AhtATQgtgIAAgLQAAgKAtgIQAugIA/AAQBAAAAuAIQAtAIAAAKQAAALgtAIQguAIhAAAQg/AAgugIg");
	this.shape_332.setTransform(874.45,492.25);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#EBCE94").s().p("AhQAQQghgHAAgJQAAgIAhgHQAigGAuAAQAvAAAiAGQAhAHAAAIQAAAJghAHQgiAGgvAAQguAAgigGg");
	this.shape_333.setTransform(904.9,500.8);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#EBCE94").s().p("AglAPQgQgHAAgIQAAgHAQgHQAQgFAVAAQAWAAAQAFQAQAHAAAHQAAAIgQAHQgQAFgWAAQgVAAgQgFg");
	this.shape_334.setTransform(864.975,482);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#EBCE94").s().p("AgaAHQgLgDAAgEQAAgDALgDQALgDAPAAQAQAAALADQALADAAADQAAAEgLADQgMADgPAAQgPAAgLgDg");
	this.shape_335.setTransform(667.925,450.775);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#EBCE94").s().p("AgaAHQgLgDAAgEQAAgDALgDQALgDAPAAQAQAAALADQALADAAADQAAAEgLADQgLADgQAAQgPAAgLgDg");
	this.shape_336.setTransform(640.925,443.425);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#EBCE94").s().p("AgaAGQgLgCAAgEQAAgDALgDQALgCAPgBQAQABALACQALADAAADQAAAEgLACQgLADgQAAQgPAAgLgDg");
	this.shape_337.setTransform(625.825,444.4);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#EBCE94").s().p("Ag/AOQgagGAAgIQAAgHAagGQAbgFAkAAQAmAAAaAFQAaAGAAAHQAAAIgaAGQgaAFgmAAQgkAAgbgFg");
	this.shape_338.setTransform(631.875,438.225);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#EBCE94").s().p("AhOANQgggFAAgIQAAgHAggGQAhgGAtABQAvgBAgAGQAgAGAAAHQAAAIggAFQghAHgugBQgtABghgHg");
	this.shape_339.setTransform(665.25,443.1);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#EBCE94").s().p("Ag5ALQgYgFAAgGQAAgGAYgEQAYgFAhAAQAiAAAYAFQAYAEAAAGQAAAGgYAFQgYAFgiAAQghAAgYgFg");
	this.shape_340.setTransform(687.075,449.225);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#EBCE94").s().p("AgbAKQgLgEABgGQgBgFALgEQAMgFAPABQAQgBALAFQAMAEgBAFQABAGgMAEQgLAFgQAAQgPAAgMgFg");
	this.shape_341.setTransform(658.5,435.75);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#EBCE94").s().p("AglAJQgPgEAAgFQAAgFAPgEQAQgDAVAAQAWAAAQADQAPAEAAAFQAAAFgPAEQgQAEgWABQgVAAgQgFg");
	this.shape_342.setTransform(620.925,468.6);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#EBCE94").s().p("AglAJQgPgDAAgGQAAgEAPgEQAQgEAVAAQAWAAAQAEQAPAEAAAEQAAAGgPADQgQAEgWAAQgVAAgQgEg");
	this.shape_343.setTransform(583.225,458.325);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#EBCE94").s().p("AglAJQgPgEAAgFQAAgFAPgDQAQgEAVAAQAWAAAQAEQAPADAAAFQAAAFgPAEQgQAEgWAAQgVAAgQgEg");
	this.shape_344.setTransform(562.175,459.675);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#EBCE94").s().p("AhYATQglgIAAgLQAAgKAlgIQAkgIA0AAQA0AAAlAIQAlAIAAAKQAAALglAIQglAIg0AAQg0AAgkgIg");
	this.shape_345.setTransform(570.65,451.075);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#EBCE94").s().p("AhsATQgugIAAgLQAAgKAugIQAtgIA/AAQBAAAAuAIQAtAIAAAKQAAALgtAIQguAIhAAAQg/AAgtgIg");
	this.shape_346.setTransform(617.25,457.875);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#EBCE94").s().p("AhPAPQgigGAAgJQAAgIAigGQAhgHAuAAQAvAAAhAHQAiAGAAAIQAAAJgiAGQghAHgvAAQguAAghgHg");
	this.shape_347.setTransform(647.675,466.425);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#EBCE94").s().p("AglAOQgQgFAAgJQAAgHAQgHQAQgFAVAAQAWAAAQAFQAQAHAAAHQAAAJgQAFQgQAHgWgBQgVABgQgHg");
	this.shape_348.setTransform(607.775,447.6);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.lf(["#ECD39C","#EBCF97"],[0,1],-575.2,-12.8,588.4,32.5).s().p("EhPHAH0IjIjIQADhvAOjSQANjaAEhnQDTgJExARQCeAJC7ANQFeAMG6gbQDSgNHbgoQG6glDzgNQDIgKGqAJQGZAJDZgOQDRgOGigkQFsgYEHAWQETAXG7B1IFiBdQDKAzCcAaQEwA0GogfQDzgSHlg2QIHgrECgMQGxgWFaAUQBgAFCEAUQCXAXCPAiQgTEMgFG0g");
	this.shape_349.setTransform(549.65,539.0739);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.lf(["#3BA4C6","#0BB2D6","#9CDDFF"],[0,0.706,1],0,-62.4,0,20).s().p("EhSogI9MClRAAAIgGFHQgEFUAKBHQheAWnAgWQqgghkrgEQkEgDhPAJQhAAGAeASQASAMA9AdQAsAdgsAWQhfAysZgNQqGgKvggxQi0gJoMAUQp3AZlvAAQj4AAlZgNIo8gYQqdgXmNAuQgGAME2AaQErAYgoAXQhMArm/gEIk1gEQiQgBgTAHQgUAIAjALQAVAGA7AOQAyANAHAJQAKANg8AMQjCAnpWgRImugPQjWgFhIAGQhMAGg0ATQgPAFg/AeQheAsitAAg");
	this.shape_350.setTransform(550.025,221.25);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.lf(["#0BB2D6","#9DDFEB"],[0,1],0,-125.1,0,40.3).s().p("Ai9R/QhggDjmgmQjQgkh1AFQh8AEjzg7Qjtg6h9AIQgwAEhFAaQhGAbguAEQoEAqotAFQjaACqlgJQiAgBjVgYQjTgYhbgBQkigDkqAbQiWANh5AOMAAAgizMCkjAAAQAAHHABHyQADPiAKDVQgfAWmjAgQm/AhpoAXQiTAFibgOQijgOgrAAQjwAEi3gfQjAghieAAQh5AAkDAWQkIAWiAABQh8ABkMAZQkMAaiCABQhXABixgWQiwgWhaABQhaABjHAgQioAbhkAAIgTgBg");
	this.shape_351.setTransform(552.975,279.0139);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.lf(["#BEDEFF","#4D91FE"],[0.004,1],1.8,77.8,-2.8,-119.3).s().p("EhSXAM3IAA5tMCkvAAAIAAZtg");
	this.shape_352.setTransform(552.95,82.3);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#DBB66E").s().p("Al1F6QjEABmHg2QmFg1jHACQjLABmhAeQmYAcjTABQiKAAitgHQhfgEjZgMQm7gYqqgdInogHQkogFi8ghQAAgWAEgQQARhEA0gwQA4g0A7AHIBSAMQAIgMAKgLQAsgyA+gIQA9gIA4AiIAdAQIAuAQQAjALAcAGQAuAHgQgBQCGARBgAFQBaAFBZABQAagrAlgVQAogYAvADQDHAQC4gBIB8gcQC6gtDPg3QAygNCSgqQB7gjBJgRQDtg4DEgBQCIAACaBBQA2AQAvAfQAQAMANANQC9AZCbARQHWA0F2ANQFcALH0gJQEagFI2gNIBKgBQBkgGBNAEQG3gEJiAGIQXALQgaghgEgnQgHgpAUgoQAUglAjgRQAlgRAlAMQBBAVBIAlQgJg/AlgsQAngwBAAQIAOAEQAYAHASASIAIAFQAeghAxACQAZgRAcgBQAfgCAVASQArAlA/AQQAXAGBeAMIEtAlICSgCQDbgGDkgQQBIgFCSgQQCBgLBYAOQBDALALBTQAKBQgwAuQgLAKgUAMIAUADIABAAIACAAQBSAMAzA0QA4A7AABcQgBAbgIAfQkJBWlIAaQj4ATlpgMQmZgUjLgFQlhgKj6AbQimARkxgjQlKgniQAHQhnAElJAcQkLAXikAAQicAAi9AQQkOAXl9ACQmzgCjYABg");
	this.shape_353.setTransform(550.75,374.8192);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.lf(["#ECD39C","#EBCF97"],[0,1],-550.8,0,550.7,0).s().p("Ao1FsQiEgJkfgnQkQgliTgIQiogJjjAMImKAZQokAirKgQQjrgGwCgrQjegDjAgJQl4gSgCggQAAgVAEgRQARhDA0gxQA4g0A7AIIBSALQAIgLAKgLQAsgzA+gIQA9gIA4AiQANAJANAGIADACIAuARQAjAKAcAGQAuAHgQgCQCNATBZAEQBaAEBZACQAagrAlgVQAogZAvAEQDFAPC6AAIB8gdQCKghD/hCIDEg3QB6gjBKgSQDtg4DEAAQCIgBCaBCQA2AQAvAfQAQAMANANQDLAbCNAPQHWA0F2AMQFcAMH0gKQEagFI2gNIBKgBQBdgFBUADQGygDJnAFIQXALQgagggEgnQgHgqAUgnQAUglAjgRQAlgRAlALQA9AUBMAnQgJhAAlgsQAngvBAAQIAOAEQAZAHARASIAIAEQAeggAxABQAZgQAcgCQAfgBAVASQArAlA/AQQAZAGBcAMIEtAlICSgDQDbgGDkgQQBIgFCSgPQCBgLBYAOQBDALALBTQAKBQgwAtQgLALgUALIAMACIALACQBSAMAzA0QA4A6AABcQAACSoxAeQjSAMnbgMQj+gHlagEIpZgFQhngBm2gaQlPgTjPAPQvpBIkPANQlIAPklAAQleAAksgWg");
	this.shape_354.setTransform(550.75,393.8204);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.lf(["#F4E8CF","#ECD39C"],[0,1],-37,-189.3,44.6,227.7).s().p("EhSLAXVMAAAgupMCkWAAAMAAAAupg");
	this.shape_355.setTransform(554.15,441.075);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.shape_70,this.shape_71,this.shape_72,this.shape_73,this.shape_74,this.shape_75,this.shape_76,this.shape_77,this.shape_78,this.shape_79,this.shape_80,this.shape_81,this.shape_82,this.shape_83,this.shape_84,this.shape_85,this.shape_86,this.shape_87,this.shape_88,this.shape_89,this.shape_90,this.shape_91,this.shape_92,this.shape_93,this.shape_94,this.shape_95,this.shape_96,this.shape_97,this.shape_98,this.shape_99,this.shape_100,this.shape_101,this.shape_102,this.shape_103,this.shape_104,this.shape_105,this.shape_106,this.shape_107,this.shape_108,this.shape_109,this.shape_110,this.shape_111,this.shape_112,this.shape_113,this.shape_114,this.shape_115,this.shape_116,this.shape_117,this.shape_118,this.shape_119,this.shape_120,this.shape_121,this.shape_122,this.shape_123,this.shape_124,this.shape_125,this.shape_126,this.shape_127,this.shape_128,this.shape_129,this.shape_130,this.shape_131,this.shape_132,this.shape_133,this.shape_134,this.shape_135,this.shape_136,this.shape_137,this.shape_138,this.shape_139,this.shape_140,this.shape_141,this.shape_142,this.shape_143,this.shape_144,this.shape_145,this.shape_146,this.shape_147,this.shape_148,this.shape_149,this.shape_150,this.shape_151,this.shape_152,this.shape_153,this.shape_154,this.shape_155,this.shape_156,this.shape_157,this.shape_158,this.shape_159,this.shape_160,this.shape_161,this.shape_162,this.shape_163,this.shape_164,this.shape_165,this.shape_166,this.shape_167,this.shape_168,this.shape_169,this.shape_170,this.shape_171,this.shape_172,this.shape_173,this.shape_174,this.shape_175,this.shape_176,this.shape_177,this.shape_178,this.shape_179,this.shape_180,this.shape_181,this.shape_182,this.shape_183,this.shape_184,this.shape_185,this.shape_186,this.shape_187,this.shape_188,this.shape_189,this.shape_190,this.shape_191,this.shape_192,this.shape_193,this.shape_194,this.shape_195,this.shape_196,this.shape_197,this.shape_198,this.shape_199,this.shape_200,this.shape_201,this.shape_202,this.shape_203,this.shape_204,this.shape_205,this.shape_206,this.shape_207,this.shape_208,this.shape_209,this.shape_210,this.shape_211,this.shape_212,this.shape_213,this.shape_214,this.shape_215,this.shape_216,this.shape_217,this.shape_218,this.shape_219,this.shape_220,this.shape_221,this.shape_222,this.shape_223,this.shape_224,this.shape_225,this.shape_226,this.shape_227,this.shape_228,this.shape_229,this.shape_230,this.shape_231,this.shape_232,this.shape_233,this.shape_234,this.shape_235,this.shape_236,this.shape_237,this.shape_238,this.shape_239,this.shape_240,this.shape_241,this.shape_242,this.shape_243,this.shape_244,this.shape_245,this.shape_246,this.shape_247,this.shape_248,this.shape_249,this.shape_250,this.shape_251,this.shape_252,this.shape_253,this.shape_254,this.shape_255,this.shape_256,this.shape_257,this.shape_258,this.shape_259,this.shape_260,this.shape_261,this.shape_262,this.shape_263,this.shape_264,this.shape_265,this.shape_266,this.shape_267,this.shape_268,this.shape_269,this.shape_270,this.shape_271,this.shape_272,this.shape_273,this.shape_274,this.shape_275,this.shape_276,this.shape_277,this.shape_278,this.shape_279,this.shape_280,this.shape_281,this.shape_282,this.shape_283,this.shape_284,this.shape_285,this.shape_286,this.shape_287,this.shape_288,this.shape_289,this.shape_290,this.shape_291,this.shape_292,this.shape_293,this.shape_294,this.shape_295,this.shape_296,this.shape_297,this.shape_298,this.shape_299,this.shape_300,this.shape_301,this.shape_302,this.shape_303,this.shape_304,this.shape_305,this.shape_306,this.shape_307,this.shape_308,this.shape_309,this.shape_310,this.shape_311,this.shape_312,this.shape_313,this.shape_314,this.shape_315,this.shape_316,this.shape_317,this.shape_318,this.shape_319,this.shape_320,this.shape_321,this.shape_322,this.shape_323,this.shape_324,this.shape_325,this.shape_326,this.shape_327,this.shape_328,this.shape_329,this.shape_330,this.shape_331,this.shape_332,this.shape_333,this.shape_334,this.shape_335,this.shape_336,this.shape_337,this.shape_338,this.shape_339,this.shape_340,this.shape_341,this.shape_342,this.shape_343,this.shape_344,this.shape_345,this.shape_346,this.shape_347,this.shape_348,this.shape_349,this.shape_350,this.shape_351,this.shape_352,this.shape_353,this.shape_354,this.shape_355];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(40.8,2.5,1020.4000000000001,566.9), null);


(lib.clouds = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6F6F6").s().p("AjLEXQhFgWgpgoIgOABQh5AEhXgxQhXgxgDhJQgCg6A6gwQA4gwBbgUQAKhCBRgwQBRgwBxgEQBOgDBDAWQBEgaBOgCQBxgEBWAsQBVArALBEQBOATAwAqQAwArACA0QADBLhWA4QhXA4h8AEQg+ABg3gMQgkAvhGAeQhJAehVADIgRABQhJAAg/gVg");
	this.shape.setTransform(1398.7055,309.7551,2.2445,2.2445);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F6F6F6").s().p("AjMEXQhFgWgpgoIgNABQh5AEhWgxQhYgxgChIQgCg6A6gxQA4gwBagUQALhCBQgwQBRgwBxgEQBOgCBDAVQBCgZBPgDQBzgEBUAsQBWArALBEQBOAUAvApQAyArABA0QADBLhXA4QhVA4h9AEQg7ACg6gMQgkAuhHAeQhIAehWADIgQABQhJAAhAgVg");
	this.shape_1.setTransform(140.3057,67.2329,2.2445,2.2445);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F6F6F6").s().p("AjMEXQhFgWgpgoIgNABQh5AEhXgxQhXgxgChJQgCg6A5gwQA4gwBbgUQAKhCBRgwQBSgwBwgEQBNgDBEAWQBFgaBNgCQBygEBVAsQBVArALBDQBOAUAwAqQAwArACA0QADBLhWA4QhXA4h8AEQg/ABg2gMQgkAvhGAeQhJAehWADIgTAAQhHAAg/gUg");
	this.shape_2.setTransform(762.772,115.4451,2.2445,2.2445);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F6F6F6").s().p("AkVF8Qhegeg4g3IgRABQilAGh2hDQh2hCgEhjQgChPBOhCQBMhBB7gbQANhaBvhBQBvhBCYgFQBrgDBbAdQBagkBrgDQCbgFB0A7QBzA7ARBcQBpAbBBA5QBCA6ACBHQAEBlh1BMQh1BMipAGQhUADhLgRQgxBAhgAoQhiAph1AEIgXAAQhiAAhXgbg");
	this.shape_3.setTransform(1816.4163,91.3037,2.2445,2.2445);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F6F6F6").s().p("AkWF8Qhdgeg4g3IgSABQikAGh2hDQh3hCgDhjQgChPBNhCQBNhBB7gbQANhaBvhBQBvhBCYgFQBqgDBcAcQBbgjBqgDQCbgFB0A7QBzA7AQBcQBqAaBAA5QBDA7ACBHQAEBlh1BMQh1BMipAGQhUADhLgRQgxA/hgApQhiAph2AEIgWAAQhjAAhXgbg");
	this.shape_4.setTransform(1249.3339,103.312,2.2445,2.2445);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F6F6F6").s().p("AkVF7Qhegeg4g2IgRABQikAFh3hCQh2hCgEhjQgChPBOhCQBMhCB7gaQAOhbBuhAQBvhBCYgFQBqgEBcAdQBcgjBqgDQCbgFBzA7QB0A7AQBcQBpAaBBA5QBCA6ACBHQAEBmh1BMQh1BMipAFQhUADhLgRQgxBAhfAoQhjAqh1ADIgXABQhiAAhXgcg");
	this.shape_5.setTransform(830.2788,369.6821,2.2445,2.2445);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F6F6F6").s().p("AkWF8Qhdgeg4g3IgSABQikAFh2hCQh3hCgDhjQgChPBNhCQBNhBB7gbQANhbBvhAQBvhBCYgFQBqgEBcAdQBbgjBqgDQCbgFB0A7QBzA7AQBcQBqAaBAA5QBDA6ACBIQAEBlh1BMQh1BMipAGQhUAChLgQQgxA/hgAoQhiAqh2AEIgWAAQhjAAhXgbg");
	this.shape_6.setTransform(378.4534,258.9706,2.2445,2.2445);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.clouds, new cjs.Rectangle(0,0,2007.2,461), null);


(lib.___Camera___ = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// cameraBoundary
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(2,1,1,3,true).p("EAq+AfQMhV7AAAMAAAg+fMBV7AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_path = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// path
	this.instance = new lib.שביל("synched",0);
	this.instance.setTransform(-129.25,851.5,1,1,0,0,0,2156.4,341.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:2156.1,regY:341.1,x:-122.4,y:851.4},0).wait(1).to({x:-115.3,y:851.45},0).wait(1).to({x:-108.2},0).wait(1).to({x:-101.1,y:851.5},0).wait(1).to({x:-94,y:851.55},0).wait(1).to({x:-86.9},0).wait(1).to({x:-79.8,y:851.6},0).wait(1).to({x:-72.7,y:851.65},0).wait(1).to({x:-65.6},0).wait(1).to({x:-58.45,y:851.7},0).wait(1).to({x:-51.35,y:851.75},0).wait(1).to({x:-44.25},0).wait(1).to({x:-37.15,y:851.8},0).wait(1).to({x:-30.05,y:851.85},0).wait(1).to({x:-22.95},0).wait(1).to({x:-15.85,y:851.9},0).wait(1).to({x:-8.75},0).wait(1).to({x:-1.65,y:851.95},0).wait(1).to({x:5.45,y:852},0).wait(1).to({x:12.6},0).wait(1).to({x:19.7,y:852.05},0).wait(1).to({x:26.8,y:852.1},0).wait(1).to({x:33.9},0).wait(1).to({x:41,y:852.15},0).wait(1).to({x:48.1,y:852.2},0).wait(1).to({x:55.2},0).wait(1).to({x:62.3,y:852.25},0).wait(1).to({x:69.4,y:852.3},0).wait(1).to({x:76.55},0).wait(1).to({x:83.65,y:852.35},0).wait(1).to({x:90.75,y:852.4},0).wait(1).to({x:97.85},0).wait(1).to({x:104.95,y:852.45},0).wait(1).to({x:112.05},0).wait(1).to({x:119.15,y:852.5},0).wait(1).to({x:126.25,y:852.55},0).wait(1).to({x:133.35},0).wait(1).to({x:140.45,y:852.6},0).wait(1).to({x:147.6,y:852.65},0).wait(1).to({x:154.7},0).wait(1).to({x:161.8,y:852.7},0).wait(1).to({x:168.9,y:852.75},0).wait(1).to({x:176},0).wait(1).to({x:183.1,y:852.8},0).wait(1).to({x:190.2,y:852.85},0).wait(1).to({x:197.3},0).wait(1).to({x:204.4,y:852.9},0).wait(1).to({x:211.55,y:852.95},0).wait(1).to({x:218.65},0).wait(1).to({x:225.75,y:853},0).wait(1).to({x:232.85},0).wait(1).to({x:239.95,y:853.05},0).wait(1).to({x:247.05,y:853.1},0).wait(1).to({x:254.15},0).wait(1).to({x:261.25,y:853.15},0).wait(1).to({x:268.35,y:853.2},0).wait(1).to({x:275.45},0).wait(1).to({x:282.6,y:853.25},0).wait(1).to({x:289.7,y:853.3},0).wait(1).to({x:296.8},0).wait(1).to({x:303.9,y:853.35},0).wait(1).to({x:311,y:853.4},0).wait(1).to({x:318.1},0).wait(1).to({x:325.2,y:853.45},0).wait(1).to({x:332.3},0).wait(1).to({x:339.4,y:853.5},0).wait(1).to({x:346.55,y:853.55},0).wait(1).to({x:353.65},0).wait(1).to({x:360.75,y:853.6},0).wait(1).to({x:367.85,y:853.65},0).wait(1).to({x:374.95},0).wait(1).to({x:382.05,y:853.7},0).wait(1).to({x:389.15,y:853.75},0).wait(1).to({x:396.25},0).wait(1).to({x:403.35,y:853.8},0).wait(1).to({x:410.45,y:853.85},0).wait(1).to({x:417.6},0).wait(1).to({x:424.7,y:853.9},0).wait(1).to({x:431.8,y:853.95},0).wait(1).to({x:438.9},0).wait(1).to({x:446,y:854},0).wait(1).to({x:453.1},0).wait(1).to({x:460.2,y:854.05},0).wait(1).to({x:467.3,y:854.1},0).wait(1).to({x:474.4},0).wait(1).to({x:481.55,y:854.15},0).wait(1).to({x:488.65,y:854.2},0).wait(1).to({x:495.75},0).wait(1).to({x:502.85,y:854.25},0).wait(1).to({x:509.95,y:854.3},0).wait(1).to({x:517.05},0).wait(1).to({x:524.15,y:854.35},0).wait(1).to({x:531.25,y:854.4},0).wait(1).to({x:538.35},0).wait(1).to({x:545.45,y:854.45},0).wait(1).to({x:552.6,y:854.5},0).wait(1).to({x:559.7},0).wait(1).to({x:566.8,y:854.55},0).wait(1).to({x:573.9},0).wait(1).to({x:581,y:854.6},0).wait(1).to({x:588.1,y:854.65},0).wait(1).to({x:595.2},0).wait(1).to({x:602.3,y:854.7},0).wait(1).to({x:609.4,y:854.75},0).wait(1).to({x:616.55},0).wait(1).to({x:623.65,y:854.8},0).wait(1).to({x:630.75,y:854.85},0).wait(1).to({x:637.85},0).wait(1).to({x:644.95,y:854.9},0).wait(1).to({x:652.05,y:854.95},0).wait(1).to({x:659.15},0).wait(1).to({x:666.25,y:855},0).wait(1).to({x:673.35},0).wait(1).to({x:680.45,y:855.05},0).wait(1).to({x:687.6,y:855.1},0).wait(1).to({x:694.7},0).wait(1).to({x:701.8,y:855.15},0).wait(1).to({x:708.9,y:855.2},0).wait(1).to({x:716},0).wait(1).to({x:723.1,y:855.25},0).wait(1).to({x:730.2,y:855.3},0).wait(1).to({x:737.3},0).wait(1).to({x:744.4,y:855.35},0).wait(1).to({x:751.55,y:855.4},0).wait(1).to({x:758.65},0).wait(1).to({x:765.75,y:855.45},0).wait(1).to({x:772.85,y:855.5},0).wait(1).to({x:779.95},0).wait(1).to({x:787.05,y:855.55},0).wait(1).to({x:794.15},0).wait(1).to({x:801.25,y:855.6},0).wait(1).to({x:808.35,y:855.65},0).wait(1).to({x:815.45},0).wait(1).to({x:822.6,y:855.7},0).wait(1).to({x:829.7,y:855.75},0).wait(1).to({x:836.8},0).wait(1).to({x:843.9,y:855.8},0).wait(1).to({x:851,y:855.85},0).wait(1).to({x:858.1},0).wait(1).to({x:865.2,y:855.9},0).wait(1).to({x:872.3,y:855.95},0).wait(1).to({x:879.4},0).wait(1).to({x:886.55,y:856},0).wait(1).to({x:893.65,y:856.05},0).wait(1).to({x:900.75},0).wait(1).to({x:907.85,y:856.1},0).wait(1).to({x:914.95},0).wait(1).to({x:922.05,y:856.15},0).wait(1).to({x:929.15,y:856.2},0).wait(1).to({x:936.25},0).wait(1).to({x:943.35,y:856.25},0).wait(1).to({x:950.45,y:856.3},0).wait(1).to({x:957.6},0).wait(1).to({x:964.7,y:856.35},0).wait(1).to({x:971.8,y:856.4},0).wait(1).to({x:978.9},0).wait(1).to({x:986,y:856.45},0).wait(1).to({x:993.1,y:856.5},0).wait(1).to({x:1000.2},0).wait(1).to({x:1007.3,y:856.55},0).wait(1).to({x:1014.4},0).wait(1).to({x:1021.55,y:856.6},0).wait(1).to({x:1028.65,y:856.65},0).wait(1).to({x:1035.75},0).wait(1).to({x:1042.85,y:856.7},0).wait(1).to({x:1049.95,y:856.75},0).wait(1).to({x:1057.05},0).wait(1).to({x:1064.15,y:856.8},0).wait(1).to({x:1071.25,y:856.85},0).wait(1).to({x:1078.35},0).wait(1).to({x:1085.45,y:856.9},0).wait(1).to({x:1092.6,y:856.95},0).wait(1).to({x:1099.7},0).wait(1).to({x:1106.8,y:857},0).wait(1).to({x:1113.9,y:857.05},0).wait(1).to({x:1121},0).wait(1).to({x:1128.1,y:857.1},0).wait(1).to({x:1135.2},0).wait(1).to({x:1142.3,y:857.15},0).wait(1).to({x:1149.4,y:857.2},0).wait(1).to({x:1156.55},0).wait(1).to({x:1163.65,y:857.25},0).wait(1).to({x:1170.75,y:857.3},0).wait(1).to({x:1177.85},0).wait(1).to({x:1184.95,y:857.35},0).wait(1).to({x:1192.05,y:857.4},0).wait(1).to({x:1199.15},0).wait(1).to({x:1206.25,y:857.45},0).wait(1).to({x:1213.35,y:857.5},0).wait(1).to({x:1220.45},0).wait(1).to({x:1227.6,y:857.55},0).wait(1).to({x:1234.7,y:857.6},0).wait(1).to({x:1241.8},0).wait(1).to({x:1248.9,y:857.65},0).wait(1).to({x:1256},0).wait(1).to({x:1263.1,y:857.7},0).wait(1).to({x:1270.2,y:857.75},0).wait(1).to({x:1277.3},0).wait(1).to({x:1284.4,y:857.8},0).wait(1).to({x:1291.55,y:857.85},0).wait(1).to({x:1298.65},0).wait(1).to({x:1305.75,y:857.9},0).wait(1).to({x:1312.85,y:857.95},0).wait(1).to({x:1319.95},0).wait(1).to({x:1327.05,y:858},0).wait(1).to({x:1334.15,y:858.05},0).wait(1).to({x:1341.25},0).wait(1).to({x:1348.35,y:858.1},0).wait(1).to({x:1355.45,y:858.15},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Green_man = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Green_man
	this.instance = new lib.אישירוק("synched",0);
	this.instance.setTransform(2073.4,890.2,1,1,0,0,0,132.6,242.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4B8432").s().p("AADAaQgJgFgIgKQgHgLgBgJQgBgLAGgEQAGgFAKAFQAIAEAIALQAIAJAAALQABAKgGAFQgDACgEAAQgEAAgEgCg");
	this.shape.setTransform(702.3793,751.0134,3.3865,3.3865);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#7EA760").ss(0.6,1,1).p("AgHhMQAEBJALBQ");
	this.shape_1.setTransform(870.0098,925.8825,3.3865,3.3865);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#7EA760").ss(0.6,1,1).p("AgjAPQAUAEATgIQAVgJALgR");
	this.shape_2.setTransform(869.7558,894.2287,3.3865,3.3865);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#7EA760").ss(0.6,1,1).p("AAzA2QgoAEgegLQgfgMAAgVQAAgTAmgYQAjgWAcgD");
	this.shape_3.setTransform(667.7183,769.1368,3.3846,3.3846);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A4C18F").s().p("AgTAvQgfgMAAgVQgBgTAngYQAjgWAcgDIAABsIgWABQgbAAgVgIg");
	this.shape_4.setTransform(667.7183,769.1368,3.3846,3.3846);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#7EA760").ss(0.6,1,1).p("ADQACQASAJARgIQAWgIAFgcQAEgTgIgbQgFgQgJgHQgFgEgHAAQgIAAgEAFQgBACgDAIQgDAGgDACQgIAEgGgHQgFgEgDgJQgMgdgBgEQgJgSgMgJQgTgOgsAAQg/ABgdAWQAXgTAHgNQAFgHACgNQACgOABgIQAGgmgPggQgPgggggVQgigWg1gNQhSgVhWAnQhfArgLBSAlyh+QARAeAeAWQAdAWAiAIQAiAJAqgGQAHgBAugPQAtgQgBgBIB3CZQB3CngBA+QgjACgiAKQhEATAIAmIAEAFQAHAGANACQAqAEBagpIBWAZQBZATASgmQABgUgUgQQgngghiARQAmgfAUgzQAohnhWhlQgJgKgJgKACwgdQgIgIgJgIQhHhDgTAIQAZgOAXAGQAaAHANAYQAEAIAFAMQACAIAEAOQADAFACAFQAJASAOAJQAEACAFACQgQgPgQgQg");
	this.shape_5.setTransform(810.5511,831.0095,3.3846,3.3846);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A4C18F").s().p("AAtGGQgNgCgHgGIgEgFQgIgmBEgTQAigKAjgCQABg+h3inIh3iZQABABgtAQQguAPgHABQgqAGgigJQgigIgdgWQgegWgRgeIAAhxQALhSBfgrQBWgnBSAVQA1ANAiAWQAgAVAPAgQAPAggGAmIgDAWQgCANgFAHQgHANgXATQAdgWA/gBQAsAAATAOQAMAJAJASIANAhQADAJAFAEQAGAHAIgEQADgCADgGIAEgKQAEgFAIAAQAHAAAFAEQAJAHAFAQQAIAbgEATQgFAcgWAIQgRAIgSgJIASAUQBWBlgoBnQgUAzgmAfQBigRAnAgQAUAQgBAUQgSAmhZgTIhWgZQhRAlgqAAIgJAAgACwgdIgFgKIgGgWQgFgMgEgIQgNgYgagHQgXgGgZAOQATgIBHBDIARAQIAAAAg");
	this.shape_6.setTransform(810.5511,831.0095,3.3846,3.3846);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#7EA760").ss(0.5).p("AgQAPQAJAJAKADQALADAHgGQAHgGgCgLQgBgLgJgKQgJgJgKgDQgKgDgHAGQgHAHABALQACAKAIAKg");
	this.shape_7.setTransform(815.3114,739.3539,3.0663,3.0663);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#7EA760").s().p("AADAbQgKgDgJgJQgIgKgCgKQgBgLAHgHQAHgGAKADQAKADAJAJQAJAKABALQACALgHAGQgFAEgHAAIgGgBg");
	this.shape_8.setTransform(815.3114,739.3539,3.0663,3.0663);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#7EA760").ss(0.5).p("AgQAPQAJAKAKACQALADAHgGQAHgGgCgMQgBgKgJgKQgJgJgKgDQgKgDgHAGQgHAGABAMQACAKAIAKg");
	this.shape_9.setTransform(836.0088,728.6219,3.0663,3.0663);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#7EA760").s().p("AADAbQgKgCgJgKQgIgKgCgKQgBgMAHgGQAHgGAKADQAKADAJAJQAJAKABAKQACAMgHAGQgFAEgGAAIgHgBg");
	this.shape_10.setTransform(836.0088,728.6219,3.0663,3.0663);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#7EA760").ss(0.5).p("AguhnQApAlAqAFQAPABANgEQAOgGADgLQAAgDABgIQAAgHADgEQAEgHAKAAQAKAAAIAHQANAMgCAVQgBAHgDAJIgFARQgJAkANAjQADAJAHASQAFAQgDALQgFAQgVAFQgUAFgSgKQgRgJgLgRQgKgRgDgTQgDgUgIgFQgDgCgMgCQgngFgmgTQglgUgbgf");
	this.shape_11.setTransform(848.2896,861.9652,3.066,3.066);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#A6C392").s().p("ABIBoQgRgJgLgRQgKgRgDgTQgDgUgIgFQgDgCgMgCQgngFgmgTQglgUgbgfIBagpQApAlAqAFQAPABANgEQAOgGADgLIABgLQAAgHADgEQAEgHAKAAQAKAAAIAHQANAMgCAVIgEAQIgFARQgJAkANAjIAKAbQAFAQgDALQgFAQgVAFQgHACgGAAQgNAAgMgHg");
	this.shape_12.setTransform(848.2896,861.9652,3.066,3.066);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#7EA760").ss(0.5).p("ADZi0QAZgkAEgsQADgtgUglQgagvg8gXQgugShBABQhoABhKArQgqAYgdAkQggAngKAsQgNA3AXApQAbAwBBAQQAYAGAgABQASAAAogBQATBcgTBgQgTBfg2BOQgTAcgRAJQgMAHgRADQgVADgKABQgnAGgjATQgKAGgGAJQgGAKAFAHQAFAGANACIBkANQAZADAMABQAVAAAPgFQAogOAcg3QAPgeAHgOQAOgaANgPQAcgEAbALQAcAKATAVQALAMAAALQABAOgUARQgVATgCAMQgCAKAHALQAGAJAKAFQAPAHAdABIByAEQAZABAMgGQAJgFAEgJQAEgKgFgIQgEgIgRgFIhjggQAMgCAKgIQAKgJADgLQAEgMgCgNQgDgMgIgJQgHgHgSgKQgTgJgHgIQgQgQABgfQAAgIAIgtQANhQgkhLQgKgVgKgOQgZgZAAgGQgBgFAegNQAmgQAAAAQAqgaAYgkg");
	this.shape_13.setTransform(816.4965,829.1318,3.0663,3.0663);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#A6C392").s().p("AD/GtIhygEQgdgBgPgHQgKgFgGgJQgHgLACgKQACgMAVgTQAUgRgBgOQAAgLgLgMQgTgVgcgKQgbgLgcAEQgNAPgOAaIgWAsQgcA3goAOQgPAFgVAAIglgEIhkgNQgNgCgFgGQgFgHAGgKQAGgJAKgGQAjgTAngGIAfgEQARgDAMgHQARgJATgcQA2hOAThfQAThggThcIg6ABQgggBgYgGQhBgQgbgwQgXgpANg3QAKgsAggnQAdgkAqgYQBKgrBogBQBBgBAuASQA8AXAaAvQAUAlgDAtQgEAsgZAkQgYAkgqAaIgmAQQgeANABAFQAAAGAZAZQAKAOAKAVQAkBLgNBQQgIAtAAAIQgBAfAQAQQAHAIATAJQASAKAHAHQAIAJADAMQACANgEAMQgDALgKAJQgKAIgMACIBjAgQARAFAEAIQAFAIgEAKQgEAJgJAFQgKAGgVAAIgGgBg");
	this.shape_14.setTransform(816.4965,829.1318,3.0663,3.0663);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#7EA760").ss(0.6).p("ABIA6QAQALASAEQATAFAQgDQARgDAKgNQAKgMgFgOQgFgNgggYQgdgXABgQQAAgJALgOQALgPABgJQAAgJgJgKQgJgJgMgDQgNgDgLAFQgMAEgDAKQgBADgCANQgBAKgFAFQgEADgKADQgMADgDACQgIADgHAHQgHAJgDAEQgVAVgrACQggAAgrgLQgSgEgFAFQgDAEAEALQATAvgPAsQACgGA7gLQArgNAVgHQAIgDAUgJQARgIALABQAMABAOAOQAUATADABg");
	this.shape_15.setTransform(890.2894,818.9442,3.0663,3.0663);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#A6C392").s().p("AinAJQgEgKAEgEQAEgFASAEQArAKAhAAQArgCAUgUIALgNQAHgHAHgDIAQgFQAKgDAEgDQAFgFABgKIACgQQAEgKALgEQAMgFAMADQANADAJAJQAJAKgBAJQAAAJgMAPQgLAOAAAJQAAAQAcAWQAhAZAEANQAFAOgJAMQgKANgRADQgQADgUgFQgSgEgQgLIgWgUQgPgOgLgBQgLgBgSAIIgcAMQgUAHgrANQg8ALgCAGQAQgsgUgwg");
	this.shape_16.setTransform(891.7323,812.2242,3.0663,3.0663);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#7EA760").ss(0.5).p("AANAAQAAALgEAHQgDAIgGAAQgFAAgDgIQgEgHAAgLQAAgKAEgHQADgIAFAAQAGAAADAIQAEAHAAAKg");
	this.shape_17.setTransform(853.002,676.2348,4.5669,4.5669);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#7EA760").s().p("AgIASQgEgHAAgLQAAgKAEgIQADgHAFAAQAFAAAEAHQAEAIAAAKQAAALgEAHQgEAIgFAAQgFAAgDgIg");
	this.shape_18.setTransform(853.002,676.2348,4.5669,4.5669);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#7EA760").ss(0.4).p("AAIALQgHAEgGABQgHAAgDgEQgDgFACgGQADgGAGgEQAHgFAGAAQAHgBADAFQADAEgDAGQgCAGgGAFg");
	this.shape_19.setTransform(833.1361,681.2469,4.5669,4.5669);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#7EA760").s().p("AgPAMQgDgFADgGQACgGAHgEQAGgFAGAAQAGgBAEAFQADAEgCAGQgDAGgGAFQgHAEgGABQgGAAgEgEg");
	this.shape_20.setTransform(833.1361,681.2469,4.5669,4.5669);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#7EA760").ss(0.4).p("AhkAgQAEAOALAKQALAKAPADQAOADAOgFQAOgFAKgLQABgCAGgKQAFgGAEgEQAIgFAZgCQAZgCAOgJQAUgLACgVQABgKgGgJQgFgKgKgDQgLgDgTAHQgWAIgJAAQgMAAgSgNQgVgOgLgBQgLgCgHAGQgIAHADAJQACAEAFAEQADACAGAEQAFADACAGQACAFgFADQgGAFgRgFQgQgFgHAGQgJAHgDAPQgCAPADAMg");
	this.shape_21.setTransform(833.5042,772.6652,4.5669,4.5669);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#A4C290").s().p("Ag7BFQgPgDgLgKQgLgKgEgOQgDgMACgPQADgPAJgHQAHgGAQAFQARAFAGgFQAFgDgCgFQgCgGgFgDIgJgGQgFgEgCgEQgDgJAIgHQAHgGALACQALABAVAOQASANAMAAQAJAAAWgIQATgHALADQAKADAFAKQAGAJgBAKQgCAVgUALQgOAJgZACQgZACgIAFQgEAEgFAGIgHAMQgKALgOAFQgJADgJAAIgKgBg");
	this.shape_22.setTransform(833.5042,772.6652,4.5669,4.5669);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#7EA760").ss(0.4).p("AgmheQgQAigIAmQgQBTAXBQQACAHgMAJQgKAIgJAAQgVABgPAPQgGAGgBAGQAAAEADALQAFARAbADQAZADAOABQAWACAJgLQAGgJACgYIAHhpQABgeALgJIACgCQAJgFAIAHQAJAIgEAKIgCAIQgDAOAAAcIAABDQAAAhAEAFQAGAJAKAAQALAAAUACQAVACAJAAQAIABAFgHQAFgGgCgIQgFgSgGgEQgFgCgHgDQgKgDgDgBQgPgFgFgOQgEgLAHgOQACgFAEgGQAGgKAAgBQAVghAMg9QAVhsgKhxQgCgWgIgGQgKgJgVAQQgrAdgsASQgKAEgDAFQgDAFgCANQgCAWgOAfg");
	this.shape_23.setTransform(814.4492,854.6913,4.5669,4.5669);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#A4C290").s().p("ABpDoQgJAAgVgCIgfgCQgKAAgGgJQgEgFAAghIAAhDQAAgcADgOIACgIQAEgKgJgIQgIgHgJAFIgCACQgLAJgBAeIgHBpQgCAYgGAJQgJALgWgCIgngEQgbgDgFgRQgDgLAAgEQABgGAGgGQAPgPAVgBQAJAAAKgIQAMgJgCgHQgXhQAQhTQAIgmAQgiQAOgfACgWQACgNADgFQADgFAKgEQAsgSArgdQAVgQAKAJQAIAGACAWQAKBxgVBsQgMA9gVAhIgGALIgGALQgHAOAEALQAFAOAPAFIANAEIAMAFQAGAEAFASQACAIgFAGQgEAGgHAAIgCAAg");
	this.shape_24.setTransform(814.4492,854.6913,4.5669,4.5669);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#7EA760").ss(0.4).p("ACmggQAJAtgqAqQgqAqhFANQhEAOg3gXQg4gWgJguQgJgtArgqQAqgqBFgOQBEgOA3AXQA3AXAJAug");
	this.shape_25.setTransform(836.7931,709.3446,4.5669,4.5669);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#A4C290").s().p("AhlBlQg4gWgJguQgJgtArgqQAqgqBFgNQBEgOA3AXQA3AWAJAuQAJAtgqAqQgqAqhFANQgZAGgYAAQgoAAgigPg");
	this.shape_26.setTransform(836.7931,709.3446,4.5669,4.5669);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#7EA760").ss(0.4).p("AAYhAQAOALACAKQACALgKALQgDADgQAOQgNAMgBAOQgBAIADAHQAEAIAIACIAKACQAHABADADQAFAHgFAJQgEAFgJAFQgZAPgMgJQgJgIABgaQACgdgIgfQgHgegBgGQgBgVALgNQAMgNAQAIQACACAXASg");
	this.shape_27.setTransform(882.3808,813.1467,4.5669,4.5669);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#A4C290").s().p("AgRBVQgJgIABgaQACgdgIgfQgHgegBgGQgBgVALgNQAMgNAQAIIAZAUQAOALACAKQACALgKALIgTARQgNAMgBAOQgBAIADAHQAEAIAIACIAKACQAHABADADQAFAHgFAJQgEAFgJAFQgQAJgKAAQgGAAgFgDg");
	this.shape_28.setTransform(882.3808,813.1467,4.5669,4.5669);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#7EA760").ss(0.5).p("AANgDQADAKgCAIQgBAIgGACQgFABgFgGQgFgGgEgLQgDgJACgIQABgJAGgBQAGgCAEAHQAGAGADAKg");
	this.shape_29.setTransform(779.8843,664.5949,4.8183,4.8183);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#7EA760").s().p("AgDAUQgGgGgDgLQgCgJABgIQABgJAGgBQAFgCAFAHQAGAGACAKQADAKgBAIQgBAIgGACIgCAAQgEAAgEgFg");
	this.shape_30.setTransform(779.8843,664.5949,4.8183,4.8183);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#7EA760").ss(0.5).p("AANgCQACAJgBAIQgBAJgGABQgGACgEgHQgGgGgDgLQgDgJACgIQACgJAFgBQAFgBAFAGQAFAGAEALg");
	this.shape_31.setTransform(800.8438,660.4077,4.8183,4.8183);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#7EA760").s().p("AgDAUQgGgGgCgLQgDgJABgIQACgJAFgBQAGgBAEAGQAGAGADALQACAJgBAIQgBAJgGABIgCAAQgFAAgDgFg");
	this.shape_32.setTransform(800.8438,660.4077,4.8183,4.8183);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#7EA760").ss(0.4).p("ABsj3QAAgFADgEQAEgHAJgCQAJgBAFAHQAEgIAAgNQgCgPAAgHQAAgMAHgJQAIgKAKADQAHACADAKQADAHgBAKQgBAGgCAMQgBAKADAGQAMAAALAHQALAHAGAKQAFALAAAMQgBANgGAKQgEAGgJAIQgKAKgDAEQgKAOgFAaQgGAkgCAHQgJAbgYASQgYATgcABQAOAuAEAeQAGAqgKAiQgIAYgYAtQgJAUgDAVQgEAZAGARQAJgGAUADQAVACAGAJQAHAIAAAIQgBAGgGAKQgGAIgTAGQgRAEgNAAQgOAAgNgIQgNgIgIgMQgLgTgDgbQgBgRACggQgOACgIARQgGANgCAUQgBAVgEAMQgGARgNAHQgIAEgNgBQgPgBgIAAQgEAAgMABQgLABgGgBQgJgBgGgEQgIgFgCgIQgCgLAKgJQAKgIANgBQABAAAWgBQAPAAAIgDQAIgOgEgXQgGgZgBgNQgBgQAHgaIAAAAQgDACgEgBQgFgBgEgDQgEgEgEgMQgFATAIAQQgTAFgQgOQgQgOACgTQABgJAHgOQAJgRABgHQADgKgBgRQgBgbAAgBQAAgjAYgfQALgNAQgLQAEgDAMgFQALgEAEgEQgLgDgbgBQgZgBgNgDQgpgKgYgaQgYgagBgoQgCgmAUghQAkg7BSgVQA3gOAuANQA2APAaAsQAHANADAPQACAHAAAIQAAADABADQAAAbgOAVQgEAIgKALQgMAOgDAEQgRAXAEAUQApgOASgVQAMgNAFgRQAFgSgGgQQgCgFgGgJQgGgKgCgEQgCgEgCgDAhQCNIAXhlQgFgHgKADQgJACgFAIQgFAKADAZIAIA8IABABQACAPgGAEQgBABAAAAg");
	this.shape_33.setTransform(824.4376,796.5158,4.8183,4.8183);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#A4C290").s().p("AAaFNQgNgIgIgMQgLgTgDgbQgBgRACggQgOACgIARQgGANgCAUQgBAVgEAMQgGARgNAHQgIAEgNgBIgXgBIgQABIgRAAQgJgBgGgEQgIgFgCgIQgCgLAKgJQAKgIANgBIAXgBQAPAAAIgDQAIgOgEgXQgGgZgBgNQgBgQAHgaIAAAAQgDACgEgBQgFgBgEgDQgEgEgEgMQgFATAIAQQgTAFgQgOQgQgOACgTQABgJAHgOQAJgRABgHQADgKgBgRIgBgcQAAgjAYgfQALgNAQgLIAQgIQALgEAEgEQgLgDgbgBQgZgBgNgDQgpgKgYgaQgYgagBgoQgCgmAUghQAkg7BSgVQA3gOAuANQA2APAaAsQAHANADAPIACAPIgCgPQAAgFADgEQAEgHAJgCQAJgBAFAHQAEgIAAgNIgCgWQAAgMAHgJQAIgKAKADQAHACADAKQADAHgBAKIgDASQgBAKADAGQAMAAALAHQALAHAGAKQAFALAAAMQgBANgGAKQgEAGgJAIIgNAOQgKAOgFAaIgIArQgJAbgYASQgYATgcABQAOAuAEAeQAGAqgKAiQgIAYgYAtQgJAUgDAVQgEAZAGARQAJgGAUADQAVACAGAJQAHAIAAAIQgBAGgGAKQgGAIgTAGQgRAEgNAAQgOAAgNgIgAhUCiIABgBQAEgDAAgJIAAgHIgBgBIABABIAAAHQAAAJgEADIgBABIAEgVIAXhlQgFgHgKADQgJACgFAIQgFAKADAZIAIA8gABvjiQAAAbgOAVQgEAIgKALIgPASQgRAXAEAUQApgOASgVQAMgNAFgRQAFgSgGgQQgCgFgGgJIgIgOIgEgHIABAGg");
	this.shape_34.setTransform(824.4376,796.5158,4.8183,4.8183);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#7EA760").ss(0.7).p("AAUARQgJALgMAEQgNAEgIgHQgJgHABgNQABgNAJgLQAKgMALgEQANgDAJAHQAIAHAAANQgBAMgKAMg");
	this.shape_35.setTransform(734.5555,690.0636,2.6038,2.6038);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#7EA760").s().p("AgWAdQgJgHABgNQABgNAJgLQAKgMALgEQANgDAJAHQAIAHAAANQgBAMgKAMQgJALgMAEIgJABQgHAAgFgEg");
	this.shape_36.setTransform(734.5555,690.0636,2.6038,2.6038);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#7EA760").ss(0.7).p("AgpAMQARgSAXgDQAYgCATAP");
	this.shape_37.setTransform(729.0326,808.2878,2.6038,2.6038);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#7EA760").ss(0.7).p("AgfggQAeAEgGAoQgFAfABATQAAAcAKAVQAJAXAWAOQAWAOAZABQAZAAAXgNQAWgOALgWQAPgcgJgZQgFgNgLgJQgLgJgOgBQgPABgHAAQgNAAgEgIQgFgJAHgKQAEgEAMgMQATgSABgdQABgcgPgXQgOgWgZgNQgXgMgcgDQgpgFhAASQgpAMgqAQ");
	this.shape_38.setTransform(867.286,816.8836,2.6036,2.6036);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#A5C291").s().p("ABPCjQgZgBgWgOQgWgOgKgXQgJgVAAgcQgBgTAFgfQAFgogdgEIiLhYQAqgQApgMQBAgSApAFQAcADAXAMQAZANAOAWQAPAXgBAcQgBAdgTASIgQAQQgHAKAFAJQAEAIANAAIAWgBQAOABALAJQALAJAFANQAJAZgPAcQgLAWgWAOQgWANgYAAIgCAAg");
	this.shape_39.setTransform(866.8692,816.8836,2.6036,2.6036);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#7EA760").ss(0.7).p("AgHgFQADAEAOAI");
	this.shape_40.setTransform(839.8082,779.0911,2.6036,2.6036);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#7EA760").ss(0.7).p("AlqiaQghgXgYg7QgPgngDgGQgMgYgQgPQgcgYgHgiQgFgVAMgPQALgOAVgGQAQgEAcgDQAXgEASgNQAJgHAdgYQAXgTAQgJQAugbA9gLQAlgHBNgFQA+gEA2AUQA7AUAmArQApAtAHA9QAIBAghAvQgHALgRATQgRATgHAKQgcAnAKAfQAGATATAQQAMAKAZANIDxB+QAnAUASAOQAdAXAOAdIACAFQAPAtgdAmQgSAYgwAiQhQA4AIA3QAEAZAbAsQASApgdAmIgDADQgaAYgmAGQgYAEgvgCQgZgBgNgCQgUgDgPgHQgSgJgKgQQgLgRADgSIB8gcQAPgJgFgPQgEgKgOgPQgdggAEgvQADgvAhgcQg0gGgtgcQgugbgdgrQgbgngYhLQgchVgQgeQgRgggMgJQgQgMgeAFQhKANg5gFQhPgGg3gng");
	this.shape_41.setTransform(811.9761,809.4066,2.6038,2.6038);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#A5C291").s().p("ADjI4IgmgDQgUgDgPgHQgSgJgKgQQgLgRADgSIB8gcQAPgJgFgPQgEgKgOgPQgdggAEgvQADgvAhgcQg0gGgtgcQgugbgdgrQgbgngYhLQgchVgQgeQgRgggMgJQgQgMgeAFQhKANg5gFQhPgGg3gnQghgXgYg7IgSgtQgMgYgQgPQgcgYgHgiQgFgVAMgPQALgOAVgGQAQgEAcgDQAXgEASgNIAmgfQAXgTAQgJQAugbA9gLQAlgHBNgFQA+gEA2AUQA7AUAmArQApAtAHA9QAIBAghAvQgHALgRATQgRATgHAKQgcAnAKAfQAGATATAQQAMAKAZANIDxB+QAnAUASAOQAdAXAOAdIACAFQAPAtgdAmQgSAYgwAiQhQA4AIA3QAEAZAbAsQASApgdAmIgDADQgaAYgmAGQgQACgaAAIgdAAg");
	this.shape_42.setTransform(811.9761,809.4066,2.6038,2.6038);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#7EA760").ss(0.8).p("ABogpQgLAKgGAQQgGAPACAOQABAGANAjQAJAZgHAQQgFALgMAJQgJAFgPAFQg3AUgdAFQgxAJgjgLQgdgJgKgWQgGgNACgPQADgQAKgJQAPgMAaAJQAIADAMgEQAGgCAOgFQAOgDAEgDQAHgFgDgKQgBAAgJgNQgKgNAHgXQAFgQAOgaQAPgbAEgFQAKgQANgLQAYgTAPgIQAXgMATADQAcAEATAhQAWAsgJANQgFAHgSADQgTADgGAFg");
	this.shape_43.setTransform(851.876,903.3198,2.6038,2.6038);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#A5C291").s().p("AhuCVQgdgJgKgWQgGgNACgPQADgQAKgJQAPgMAaAJQAIADAMgEIAUgHQAOgDAEgDQAHgFgDgKIgKgNQgKgNAHgXQAFgQAOgaIATggQAKgQANgLQAYgTAPgIQAXgMATADQAcAEATAhQAWAsgJANQgFAHgSADQgTADgGAFQgLAKgGAQQgGAPACAOQABAGANAjQAJAZgHAQQgFALgMAJQgJAFgPAFQg3AUgdAFQgWAEgSAAQgYAAgUgGg");
	this.shape_44.setTransform(851.876,903.3198,2.6038,2.6038);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#7EA760").ss(0.7).p("AAlgBQAHABgsAjQhGAyg3gcQgMgHgHgLQgHgOANgIQgIAEgXABQgZgBgHABQgeACgeABQgfAAgIgPQgFgIADgIQADgJAHgHQAKgJAXgHQANgDAZgBQAYgBANgDQA2gQAdgBQAPAAAegCQAagBASAEQA0AKBKgDQALAAAygHQAogGAVADQABArADAQQALA4AIADg");
	this.shape_45.setTransform(756.0197,805.6706,2.6038,2.6038);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#A5C291").s().p("AhnA5QgMgHgGgLQgHgOAMgIQgHAEgXABIghAAQgeACgdABQggAAgIgPQgEgIADgIQACgJAHgHQALgJAXgHQAMgDAZgBQAZgBAMgDQA2gQAdgBIAtgCQAbgBARAEQA0AKBKgDQALAAAzgHQAngGAWADQABArADAQQAKA4AJADIjfg2QAHABgrAjQgtAggnAAQgWAAgUgKg");
	this.shape_46.setTransform(750.2272,805.6706,2.6038,2.6038);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#7EA760").ss(0.4,1,1).p("AgUA5QgGgJAAgRIgDg9QgBgQAEgJQAFgLANgCQAMgCAIAKQAHAHADAVIAIBDQACAbgRAGQgJACgKgCQgLgDgFgIg");
	this.shape_47.setTransform(772.8343,912.1155,5.8726,5.8726);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#7EA760").s().p("AgEBEQgLgDgFgIQgGgJAAgRIgDg9QgBgQAEgJQAFgLANgBQAMgDAIAKQAHAIADAVIAIBCQACAbgRAGQgFABgFAAIgJgBg");
	this.shape_48.setTransform(772.8343,912.1155,5.8726,5.8726);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#7EA760").ss(0.4,1,1).p("AgBAVQAGgUgEgV");
	this.shape_49.setTransform(886.7532,943.2404,5.8726,5.8726);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#7EA760").ss(0.4).p("AgXhHQgCgXAIgOQAJgRAVgCQAZgBARAQQAFAFALARQAKAOAHAGQAIAGATAIQAQALAQAeQAcA5gSAkQgSAkg9AKQhFALg5gUQhCgXghg2QgSgdACgWQABgVAPgTQAOgRAVgLQAOgHAYgDQAdgFAKgDQAFgCAHgF");
	this.shape_50.setTransform(892.0545,841.5119,5.8721,5.8721);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#A4C290").s().p("AgwBzQhCgXghg2QgSgdACgWQABgVAPgTQAOgRAVgLQAOgHAYgDQAdgFAKgDQAFgCAHgFIAAASQABgMAFgIQAJgRAVgCQAZgBARAQQAFAFALARQAKAOAHAGQAIAGATAIQAQALAQAeQAcA5gSAkQgSAkg9AKQgZAEgYAAQgoAAglgNg");
	this.shape_51.setTransform(892.0545,841.5119,5.8721,5.8721);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#7EA760").ss(0.4,1,1).p("AgPALQAPgIARgN");
	this.shape_52.setTransform(831.1091,911.2213,5.8721,5.8721);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#7EA760").ss(0.4,1,1).p("AgZAEQAGgIATABQAPABALAH");
	this.shape_53.setTransform(735.1005,965.8024,5.8721,5.8721);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#A4C290").s().p("AgZAEQAHgIASABQAPABALAHg");
	this.shape_54.setTransform(735.1005,965.8024,5.8721,5.8721);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#7EA760").ss(0.4,1,1).p("AAIASQgIgEgEgMQgFgLADgI");
	this.shape_55.setTransform(745.6875,929.7184,5.8721,5.8721);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#A4C290").s().p("AgEACQgFgLADgHIAOAiQgIgEgEgMg");
	this.shape_56.setTransform(745.6875,929.7184,5.8721,5.8721);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#7EA760").ss(0.4).p("AAPAAQAJgGAMgBQAJAAAQABQAOgBAHgKQAGgIAAgMQABgsAAgGQgBgdgEgVQgKgrgcgDQgSgBgOAPQgRAVADAnQAAASgEAHQgIAIgRgCQgRgFgJABQgOAAgKANQgKALgBAPQgDAdAdAhQAKANANAGQAQAIALgDQAHgDAEgIQABgEABgGQAAAAAAgBQABgPAMgFQABgBACAAQAIgCARgCQALgCAFABQAMADALARQALAUAJAEQgHAAgGAEQgGAFgBAHQgCAHABAKQABAFABALQAAATgKASQgKAQgRAMQgaASgtAHQgiAFgTABQgMAAgHgCQgLgEgEgLQgEgJACgMQAFgjATgNQAYgPAggBQATAAAGgBQAOgEAEgLQACgFgEgIQgGgMgBgCQgBgDABgEQAAgFACgGQACgHAGgGQAEgFAEgDg");
	this.shape_57.setTransform(744.1406,968.9002,5.8721,5.8721);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#A4C290").s().p("AhbC2QgKgEgFgLQgDgJABgMQAGgjATgNQAYgPAfgBQATAAAGgBQAOgEAFgLQACgFgFgIIgHgOIgBAAIAAgHQgDAIgHADQgKADgQgIQgNgGgLgNQgcghACgdQABgPAKgLQALgNAOAAQAIgBASAFQAQACAHgIQAGgHgBgSQgDgnARgVQAPgPASABQAcADAJArQAFAVAAAdIAAAyQAAAMgGAIQgHAKgOABQgRgBgIAAQgMABgJAGIgDABQgMAFgCAPQADgHAFgGQAFgFAEgDQAIgCARgCQAKgCAGABQAMADAKARQAMAUAJAEQgHAAgGAEQgGAFgCAHQgCAHABAKIACAQQABATgLASQgKAQgQAMQgbASgtAHQghAFgTABIgEAAQgKAAgGgCg");
	this.shape_58.setTransform(738.3448,968.9002,5.8721,5.8721);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#7EA760").ss(0.4,1,1).p("AAYAbQAAgUgNgPQgNgPgVgD");
	this.shape_59.setTransform(809.8228,957.464,5.8721,5.8721);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#A4C290").s().p("AgXgaQAVADANAPQANAPAAAUg");
	this.shape_60.setTransform(809.8228,957.464,5.8721,5.8721);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#7EA760").ss(0.4).p("AhEhhQAHALABADQACAMgQALQgKAHgQAHQgRAHgJAEQgiAQgOARQgKALgEAPQgFAQAFAOQAHAVAjAWQAfAUATAHQAgALAYgJQAhgMAWgyQAAgBAQgnQAKgYAJgOQAkAVAogKQAogMAUgmQAFgLAAgIQABgLgJgFQgGgEgMADQg4ANg5gLQgygKg4gdQgQgIgEALQgEALAKAPg");
	this.shape_61.setTransform(857.3594,960.6,5.8726,5.8726);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#A4C290").s().p("AhgB8QgTgHgfgUQgjgWgHgVQgFgOAFgQQAEgPAKgLQAOgRAigQIAagLQAQgHAKgHQAQgLgCgMQgBgDgHgLQgKgPAEgLQAEgLAQAIQA4AdAyAKQA5ALA4gNQAMgDAGAEQAJAFgBALQAAAIgFALQgUAmgoAMQgoAKgkgVQgJAOgKAYIgQAoQgWAyghAMQgLAEgNAAQgPAAgRgGg");
	this.shape_62.setTransform(857.3594,960.6,5.8726,5.8726);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},164).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},155).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29}]},85).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35}]},65).to({state:[{t:this.instance}]},180).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47}]},1).wait(87));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:132.5,x:2067.45,startPosition:1},0).wait(1).to({x:2061.6,y:890.25,startPosition:2},0).wait(1).to({x:2055.8,y:890.3,startPosition:3},0).wait(1).to({x:2049.95,y:890.35,startPosition:4},0).wait(1).to({x:2044.1,y:890.4,startPosition:5},0).wait(1).to({x:2038.3,y:890.45,startPosition:6},0).wait(1).to({x:2032.45,y:890.5,startPosition:7},0).wait(1).to({x:2026.6,startPosition:8},0).wait(1).to({x:2020.8,y:890.55,startPosition:9},0).wait(1).to({x:2014.95,y:890.6,startPosition:10},0).wait(1).to({x:2009.1,y:890.65,startPosition:11},0).wait(1).to({x:2003.3,y:890.7,startPosition:12},0).wait(1).to({x:1997.45,y:890.75,startPosition:13},0).wait(1).to({x:1991.6,y:890.8,startPosition:14},0).wait(1).to({x:1985.8,y:890.85,startPosition:15},0).wait(1).to({x:1979.95,startPosition:16},0).wait(1).to({x:1974.1,y:890.9,startPosition:17},0).wait(1).to({x:1968.3,y:890.95,startPosition:18},0).wait(1).to({x:1962.45,y:891,startPosition:19},0).wait(1).to({x:1956.6,y:891.05,startPosition:20},0).wait(1).to({x:1950.8,y:891.1,startPosition:21},0).wait(1).to({x:1944.95,y:891.15,startPosition:22},0).wait(1).to({x:1939.1,y:891.2,startPosition:23},0).wait(1).to({x:1933.3,startPosition:24},0).wait(1).to({x:1927.45,y:891.25,startPosition:25},0).wait(1).to({x:1921.6,y:891.3,startPosition:26},0).wait(1).to({x:1915.8,y:891.35,startPosition:27},0).wait(1).to({x:1909.95,y:891.4,startPosition:28},0).wait(1).to({x:1904.1,y:891.45,startPosition:29},0).wait(1).to({x:1898.3,y:891.5,startPosition:30},0).wait(1).to({x:1892.45,y:891.55,startPosition:31},0).wait(1).to({x:1886.6,startPosition:32},0).wait(1).to({x:1880.8,y:891.6,startPosition:33},0).wait(1).to({x:1874.95,y:891.65,startPosition:0},0).wait(1).to({x:1869.1,y:891.7,startPosition:1},0).wait(1).to({x:1863.3,y:891.75,startPosition:2},0).wait(1).to({x:1857.45,y:891.8,startPosition:3},0).wait(1).to({x:1851.65,y:891.85,startPosition:4},0).wait(1).to({x:1845.8,y:891.9,startPosition:5},0).wait(1).to({x:1839.95,startPosition:6},0).wait(1).to({x:1834.15,y:891.95,startPosition:7},0).wait(1).to({x:1828.3,y:892,startPosition:8},0).wait(1).to({x:1822.45,y:892.05,startPosition:9},0).wait(1).to({x:1816.65,y:892.1,startPosition:10},0).wait(1).to({x:1810.8,y:892.15,startPosition:11},0).wait(1).to({x:1804.95,y:892.2,startPosition:12},0).wait(1).to({x:1799.15,y:892.25,startPosition:13},0).wait(1).to({x:1793.3,startPosition:14},0).wait(1).to({x:1787.45,y:892.3,startPosition:15},0).wait(1).to({x:1781.65,y:892.35,startPosition:16},0).wait(1).to({x:1775.8,y:892.4,startPosition:17},0).wait(1).to({x:1769.95,y:892.45,startPosition:18},0).wait(1).to({x:1764.15,y:892.5,startPosition:19},0).wait(1).to({x:1758.3,y:892.55,startPosition:20},0).wait(1).to({x:1752.45,y:892.6,startPosition:21},0).wait(1).to({x:1746.65,startPosition:22},0).wait(1).to({x:1740.8,y:892.65,startPosition:23},0).wait(1).to({x:1734.95,y:892.7,startPosition:24},0).wait(1).to({x:1729.15,y:892.75,startPosition:25},0).wait(1).to({x:1723.3,y:892.8,startPosition:26},0).wait(1).to({x:1717.45,y:892.85,startPosition:27},0).wait(1).to({x:1711.65,y:892.9,startPosition:28},0).wait(1).to({x:1705.8,startPosition:29},0).wait(1).to({x:1699.95,y:892.95,startPosition:30},0).wait(1).to({x:1694.15,y:893,startPosition:31},0).wait(1).to({x:1688.3,y:893.05,startPosition:32},0).wait(1).to({x:1682.45,y:893.1,startPosition:33},0).wait(1).to({x:1676.65,y:893.15,startPosition:0},0).wait(1).to({x:1670.8,y:893.2,startPosition:1},0).wait(1).to({x:1664.95,y:893.25,startPosition:2},0).wait(1).to({x:1659.15,startPosition:3},0).wait(1).to({x:1653.3,y:893.3,startPosition:4},0).wait(1).to({x:1647.5,y:893.35,startPosition:5},0).wait(1).to({x:1641.65,y:893.4,startPosition:6},0).wait(1).to({x:1635.8,y:893.45,startPosition:7},0).wait(1).to({x:1630,y:893.5,startPosition:8},0).wait(1).to({x:1624.15,y:893.55,startPosition:9},0).wait(1).to({x:1618.3,y:893.6,startPosition:10},0).wait(1).to({x:1612.5,startPosition:11},0).wait(1).to({x:1606.65,y:893.65,startPosition:12},0).wait(1).to({x:1600.8,y:893.7,startPosition:13},0).wait(1).to({x:1595,y:893.75,startPosition:14},0).wait(1).to({x:1589.15,y:893.8,startPosition:15},0).wait(1).to({x:1583.3,y:893.85,startPosition:16},0).wait(1).to({x:1577.5,y:893.9,startPosition:17},0).wait(1).to({x:1571.65,y:893.95,startPosition:18},0).wait(1).to({x:1565.8,startPosition:19},0).wait(1).to({x:1560,y:894,startPosition:20},0).wait(1).to({x:1554.15,y:894.05,startPosition:21},0).wait(1).to({x:1548.3,y:894.1,startPosition:22},0).wait(1).to({x:1542.5,y:894.15,startPosition:23},0).wait(1).to({x:1536.65,y:894.2,startPosition:24},0).wait(1).to({x:1530.8,y:894.25,startPosition:25},0).wait(1).to({x:1525,y:894.3,startPosition:26},0).wait(1).to({x:1519.15,startPosition:27},0).wait(1).to({x:1513.3,y:894.35,startPosition:28},0).wait(1).to({x:1507.5,y:894.4,startPosition:29},0).wait(1).to({x:1501.65,y:894.45,startPosition:30},0).wait(1).to({x:1495.8,y:894.5,startPosition:31},0).wait(1).to({x:1490,y:894.55,startPosition:32},0).wait(1).to({x:1484.15,y:894.6,startPosition:33},0).wait(1).to({x:1478.3,y:894.65,startPosition:0},0).wait(1).to({x:1472.5,startPosition:1},0).wait(1).to({x:1466.65,y:894.7,startPosition:2},0).wait(1).to({x:1460.8,y:894.75,startPosition:3},0).wait(1).to({x:1455,y:894.8,startPosition:4},0).wait(1).to({x:1449.15,y:894.85,startPosition:5},0).wait(1).to({x:1443.3,y:894.9,startPosition:6},0).wait(1).to({x:1437.5,y:894.95,startPosition:7},0).wait(1).to({x:1431.65,y:895,startPosition:8},0).wait(1).to({x:1425.85,startPosition:9},0).wait(1).to({x:1420,y:895.05,startPosition:10},0).wait(1).to({x:1414.15,y:895.1,startPosition:11},0).wait(1).to({x:1408.35,y:895.15,startPosition:12},0).wait(1).to({x:1402.5,y:895.2,startPosition:13},0).wait(1).to({x:1396.65,y:895.25,startPosition:14},0).wait(1).to({x:1390.85,y:895.3,startPosition:15},0).wait(1).to({x:1385,startPosition:16},0).wait(1).to({x:1379.15,y:895.35,startPosition:17},0).wait(1).to({x:1373.35,y:895.4,startPosition:18},0).wait(1).to({x:1367.5,y:895.45,startPosition:19},0).wait(1).to({x:1361.65,y:895.5,startPosition:20},0).wait(1).to({x:1355.85,y:895.55,startPosition:21},0).wait(1).to({x:1350,y:895.6,startPosition:22},0).wait(1).to({x:1344.15,y:895.65,startPosition:23},0).wait(1).to({x:1338.35,startPosition:24},0).wait(1).to({x:1332.5,y:895.7,startPosition:25},0).wait(1).to({x:1326.65,y:895.75,startPosition:26},0).wait(1).to({x:1320.85,y:895.8,startPosition:27},0).wait(1).to({x:1315,y:895.85,startPosition:28},0).wait(1).to({x:1309.15,y:895.9,startPosition:29},0).wait(1).to({x:1303.35,y:895.95,startPosition:30},0).wait(1).to({x:1297.5,y:896,startPosition:31},0).wait(1).to({x:1291.65,startPosition:32},0).wait(1).to({x:1285.85,y:896.05,startPosition:33},0).wait(1).to({x:1280,y:896.1,startPosition:0},0).wait(1).to({x:1274.15,y:896.15,startPosition:1},0).wait(1).to({x:1268.35,y:896.2,startPosition:2},0).wait(1).to({x:1262.5,y:896.25,startPosition:3},0).wait(1).to({x:1256.65,y:896.3,startPosition:4},0).wait(1).to({x:1250.85,y:896.35,startPosition:5},0).wait(1).to({x:1245,startPosition:6},0).wait(1).to({x:1239.15,y:896.4,startPosition:7},0).wait(1).to({x:1233.35,y:896.45,startPosition:8},0).wait(1).to({x:1227.5,y:896.5,startPosition:9},0).wait(1).to({x:1221.7,y:896.55,startPosition:10},0).wait(1).to({x:1215.85,y:896.6,startPosition:11},0).wait(1).to({x:1210,y:896.65,startPosition:12},0).wait(1).to({x:1204.2,y:896.7,startPosition:13},0).wait(1).to({x:1198.35,startPosition:14},0).wait(1).to({x:1192.5,y:896.75,startPosition:15},0).wait(1).to({x:1186.7,y:896.8,startPosition:16},0).wait(1).to({x:1180.85,y:896.85,startPosition:17},0).wait(1).to({x:1175,y:896.9,startPosition:18},0).wait(1).to({x:1169.2,y:896.95,startPosition:19},0).wait(1).to({x:1163.35,y:897,startPosition:20},0).wait(1).to({x:1157.5,y:897.05,startPosition:21},0).wait(1).to({x:1151.7,startPosition:22},0).wait(1).to({x:1145.85,y:897.1,startPosition:23},0).wait(1).to({x:1140,y:897.15,startPosition:24},0).wait(1).to({x:1134.2,y:897.2,startPosition:25},0).wait(1).to({x:1128.35,y:897.25,startPosition:26},0).wait(1).to({x:1122.5,y:897.3,startPosition:27},0).wait(1).to({x:1116.7,y:897.35,startPosition:28},0).wait(1).to({x:1110.85,y:897.4,startPosition:29},0).wait(1).to({x:1105,startPosition:30},0).wait(1).to({x:1099.2,y:897.45,startPosition:31},0).wait(1).to({x:1093.35,y:897.5,startPosition:32},0).wait(1).to({x:1087.5,y:897.55,startPosition:33},0).wait(1).to({x:1081.7,y:897.6,startPosition:0},0).wait(1).to({x:1075.85,y:897.65,startPosition:1},0).wait(1).to({x:1070,y:897.7,startPosition:2},0).wait(1).to({x:1064.2,startPosition:3},0).wait(1).to({x:1058.35,y:897.75,startPosition:4},0).wait(1).to({x:1052.5,y:897.8,startPosition:5},0).wait(1).to({x:1046.7,y:897.85,startPosition:6},0).wait(1).to({x:1040.85,y:897.9,startPosition:7},0).wait(1).to({x:1035,y:897.95,startPosition:8},0).wait(1).to({x:1029.2,y:898,startPosition:9},0).wait(1).to({x:1023.35,y:898.05,startPosition:10},0).wait(1).to({x:1017.55,startPosition:11},0).wait(1).to({x:1011.7,y:898.1,startPosition:12},0).wait(1).to({x:1005.85,y:898.15,startPosition:13},0).wait(1).to({x:1000.05,y:898.2,startPosition:14},0).wait(1).to({x:994.2,y:898.25,startPosition:15},0).wait(1).to({x:988.35,y:898.3,startPosition:16},0).wait(1).to({x:982.55,y:898.35,startPosition:17},0).wait(1).to({x:976.7,y:898.4,startPosition:18},0).wait(1).to({x:970.85,startPosition:19},0).wait(1).to({x:965.05,y:898.45,startPosition:20},0).wait(1).to({x:959.2,y:898.5,startPosition:21},0).wait(1).to({x:953.35,y:898.55,startPosition:22},0).wait(1).to({x:947.55,y:898.6,startPosition:23},0).wait(1).to({x:941.7,y:898.65,startPosition:24},0).wait(1).to({x:935.85,y:898.7,startPosition:25},0).wait(1).to({x:930.05,y:898.75,startPosition:26},0).wait(1).to({x:924.2,startPosition:27},0).wait(1).to({x:918.35,y:898.8,startPosition:28},0).wait(1).to({x:912.55,y:898.85,startPosition:29},0).wait(1).to({x:906.7,y:898.9,startPosition:30},0).wait(1).to({x:900.85,y:898.95,startPosition:31},0).wait(1).to({x:895.05,y:899,startPosition:32},0).wait(1).to({x:889.2,y:899.05,startPosition:33},0).wait(1).to({x:883.35,y:899.1,startPosition:0},0).wait(1).to({x:877.55,startPosition:1},0).wait(1).to({x:871.7,y:899.15,startPosition:2},0).wait(1).to({x:865.85,y:899.2,startPosition:3},0).wait(1).to({x:860.05,y:899.25,startPosition:4},0).wait(1).to({x:854.2,y:899.3,startPosition:5},0).wait(1).to({x:848.4,y:917.45,startPosition:6},0).wait(1).to({startPosition:7},0).to({_off:true},1).wait(649).to({_off:false,x:974.15,y:796.5,startPosition:0},0).wait(1).to({x:965.45,startPosition:1},0).wait(1).to({x:956.75,startPosition:2},0).wait(1).to({x:948.1,startPosition:3},0).wait(1).to({x:939.4,startPosition:4},0).wait(1).to({x:930.7,startPosition:5},0).wait(1).to({x:922.05,startPosition:6},0).wait(1).to({x:913.35,startPosition:7},0).wait(1).to({x:904.7,startPosition:8},0).wait(1).to({x:896,startPosition:9},0).wait(1).to({x:887.3,startPosition:10},0).wait(1).to({x:878.65,startPosition:11},0).wait(1).to({x:869.95,startPosition:12},0).wait(1).to({x:861.3,startPosition:13},0).wait(1).to({x:852.6,startPosition:14},0).wait(1).to({x:843.9,startPosition:15},0).wait(1).to({x:835.25,startPosition:16},0).wait(1).to({x:826.55,startPosition:17},0).wait(1).to({x:817.9,startPosition:18},0).wait(1).to({x:809.2,startPosition:19},0).wait(1).to({x:800.5,startPosition:20},0).wait(1).to({x:791.85,startPosition:21},0).wait(1).to({x:783.15,startPosition:22},0).wait(1).to({x:774.5,startPosition:23},0).wait(1).to({x:765.8,startPosition:24},0).wait(1).to({x:757.1,startPosition:25},0).wait(1).to({x:748.45,startPosition:26},0).wait(1).to({x:739.75,startPosition:27},0).wait(1).to({x:731.05,startPosition:28},0).wait(1).to({x:722.4,startPosition:29},0).wait(1).to({x:713.7,startPosition:30},0).wait(1).to({x:705.05,startPosition:31},0).wait(1).to({x:696.35,startPosition:32},0).wait(1).to({x:687.65,startPosition:33},0).wait(1).to({x:679,startPosition:0},0).wait(1).to({x:670.3,startPosition:1},0).wait(1).to({x:661.65,startPosition:2},0).wait(1).to({x:652.95,startPosition:3},0).wait(1).to({x:644.25,startPosition:4},0).wait(1).to({x:635.6,startPosition:5},0).wait(1).to({x:626.9,startPosition:6},0).wait(1).to({x:618.25,startPosition:7},0).wait(1).to({x:609.55,startPosition:8},0).wait(1).to({x:600.85,startPosition:9},0).wait(1).to({x:592.2,startPosition:10},0).wait(1).to({x:583.5,startPosition:11},0).wait(1).to({x:574.85,startPosition:12},0).wait(1).to({x:566.15,startPosition:13},0).wait(1).to({x:557.45,startPosition:14},0).wait(1).to({x:548.8,startPosition:15},0).wait(1).to({x:540.1,startPosition:16},0).wait(1).to({x:531.4,startPosition:17},0).wait(1).to({x:522.75,startPosition:18},0).wait(1).to({x:514.05,startPosition:19},0).wait(1).to({x:505.4,startPosition:20},0).wait(1).to({x:496.7,startPosition:21},0).wait(1).to({x:488,startPosition:22},0).wait(1).to({x:479.35,startPosition:23},0).wait(1).to({x:470.65,startPosition:24},0).wait(1).to({x:462,startPosition:25},0).wait(1).to({x:453.3,startPosition:26},0).wait(1).to({x:444.6,startPosition:27},0).wait(1).to({x:435.95,startPosition:28},0).wait(1).to({x:427.25,startPosition:29},0).wait(1).to({x:418.6,startPosition:30},0).wait(1).to({x:409.9,startPosition:31},0).wait(1).to({x:401.2,startPosition:32},0).wait(1).to({x:392.55,startPosition:33},0).wait(1).to({x:383.85,startPosition:0},0).wait(1).to({x:375.2,startPosition:1},0).wait(1).to({x:366.5,startPosition:2},0).wait(1).to({x:357.8,startPosition:3},0).wait(1).to({x:349.15,startPosition:4},0).wait(1).to({x:340.45,startPosition:5},0).wait(1).to({x:331.75,startPosition:6},0).wait(1).to({x:323.1,startPosition:7},0).wait(1).to({x:314.4,startPosition:8},0).wait(1).to({x:305.75,startPosition:9},0).wait(1).to({x:297.05,startPosition:10},0).wait(1).to({x:288.35,startPosition:11},0).wait(1).to({x:279.7,startPosition:12},0).wait(1).to({x:271,startPosition:13},0).wait(1).to({x:262.35,startPosition:14},0).wait(1).to({x:253.65,startPosition:15},0).wait(1).to({x:244.95,startPosition:16},0).wait(1).to({x:236.3,startPosition:17},0).wait(1).to({x:227.6,startPosition:18},0).wait(1).to({x:218.95,startPosition:19},0).wait(1).to({x:210.25,startPosition:20},0).wait(1).to({x:201.55,startPosition:21},0).wait(1).to({x:192.9,startPosition:22},0).wait(1).to({x:184.2,startPosition:23},0).wait(1).to({x:175.55,startPosition:24},0).wait(1).to({x:166.85,startPosition:25},0).wait(1).to({x:158.15,startPosition:26},0).wait(1).to({x:149.5,startPosition:27},0).wait(1).to({x:140.8,startPosition:28},0).wait(1).to({x:132.15,startPosition:29},0).wait(1).to({x:123.5,startPosition:30},0).wait(1).to({x:114.8,startPosition:31},0).wait(1).to({x:106.15,startPosition:32},0).wait(1).to({x:97.45,startPosition:33},0).wait(1).to({x:88.75,startPosition:0},0).wait(1).to({x:80.1,startPosition:1},0).wait(1).to({x:71.4,startPosition:2},0).wait(1).to({x:62.75,startPosition:3},0).wait(1).to({x:54.05,startPosition:4},0).wait(1).to({x:45.35,startPosition:5},0).wait(1).to({x:36.7,startPosition:6},0).wait(1).to({x:28,startPosition:7},0).wait(1).to({x:19.35,startPosition:8},0).wait(1).to({x:10.65,startPosition:9},0).wait(1).to({x:1.95,startPosition:10},0).wait(1).to({x:-6.7,startPosition:11},0).wait(1).to({x:-15.4,startPosition:12},0).wait(1).to({x:-24.1,startPosition:13},0).wait(1).to({x:-32.75,startPosition:14},0).wait(1).to({x:-41.45,startPosition:15},0).wait(1).to({x:-50.1,startPosition:16},0).wait(1).to({x:-58.8,startPosition:17},0).wait(1).to({x:-67.5,startPosition:18},0).wait(1).to({x:-76.15,startPosition:19},0).wait(1).to({x:-84.85,startPosition:20},0).wait(1).to({x:-93.5,startPosition:21},0).wait(1).to({x:-102.2,startPosition:22},0).wait(1).to({x:-110.9,startPosition:23},0).wait(1).to({x:-119.55,startPosition:24},0).wait(1).to({x:-128.25,startPosition:25},0).wait(1).to({x:-136.9,startPosition:26},0).wait(1).to({x:-145.6,startPosition:27},0).wait(1).to({x:-154.3,startPosition:28},0).wait(1).to({x:-162.95,startPosition:29},0).wait(1).to({x:-171.65,startPosition:30},0).wait(1).to({x:-180.3,startPosition:31},0).wait(1).to({x:-189,startPosition:32},0).wait(1).to({x:-197.7,startPosition:33},0).wait(1).to({x:-206.35,startPosition:0},0).wait(1).to({x:-215.05,startPosition:1},0).wait(1).to({x:-223.75,startPosition:2},0).wait(1).to({x:2019.3,y:818.8,startPosition:0},0).wait(1).to({x:2007.8,startPosition:1},0).wait(1).to({x:1996.3,startPosition:2},0).wait(1).to({x:1984.8,startPosition:3},0).wait(1).to({x:1973.3,startPosition:4},0).wait(1).to({x:1961.8,startPosition:5},0).wait(1).to({x:1950.3,startPosition:6},0).wait(1).to({x:1938.8,startPosition:7},0).wait(1).to({x:1927.3,startPosition:8},0).wait(1).to({x:1915.8,startPosition:9},0).wait(1).to({x:1904.3,startPosition:10},0).wait(1).to({x:1892.8,startPosition:11},0).wait(1).to({x:1881.3,startPosition:12},0).wait(1).to({x:1869.8,startPosition:13},0).wait(1).to({x:1858.3,startPosition:14},0).wait(1).to({x:1846.8,startPosition:15},0).wait(1).to({x:1835.3,startPosition:16},0).wait(1).to({x:1823.8,startPosition:17},0).wait(1).to({x:1812.3,startPosition:18},0).wait(1).to({x:1800.8,startPosition:19},0).wait(1).to({x:1789.3,startPosition:20},0).wait(1).to({x:1777.8,startPosition:21},0).wait(1).to({x:1766.3,startPosition:22},0).wait(1).to({x:1754.8,startPosition:23},0).wait(1).to({x:1743.3,startPosition:24},0).wait(1).to({x:1731.8,startPosition:25},0).wait(1).to({x:1720.3,startPosition:26},0).wait(1).to({x:1708.8,startPosition:27},0).wait(1).to({x:1697.3,startPosition:28},0).wait(1).to({x:1685.8,startPosition:29},0).wait(1).to({x:1674.3,startPosition:30},0).wait(1).to({x:1662.8,startPosition:31},0).wait(1).to({x:1651.3,startPosition:32},0).wait(1).to({x:1639.8,startPosition:33},0).wait(1).to({x:1628.3,startPosition:0},0).wait(1).to({x:1616.8,startPosition:1},0).wait(1).to({x:1605.3,startPosition:2},0).wait(1).to({x:1593.8,startPosition:3},0).wait(1).to({x:1582.3,startPosition:4},0).wait(1).to({x:1570.8,startPosition:5},0).wait(1).to({x:1559.3,startPosition:6},0).wait(1).to({x:1547.8,startPosition:7},0).wait(1).to({x:1536.3,startPosition:8},0).wait(1).to({x:1524.8,startPosition:9},0).wait(1).to({x:1513.3,startPosition:10},0).wait(1).to({x:1501.8,startPosition:11},0).wait(1).to({x:1490.3,startPosition:12},0).wait(1).to({x:1478.8,startPosition:13},0).wait(1).to({x:1467.3,startPosition:14},0).wait(1).to({x:1455.8,startPosition:15},0).wait(1).to({x:1444.3,startPosition:16},0).wait(1).to({x:1432.8,startPosition:17},0).wait(1).to({x:1421.3,startPosition:18},0).wait(1).to({x:1409.8,startPosition:19},0).wait(1).to({x:1398.3,startPosition:20},0).wait(1).to({x:1386.8,startPosition:21},0).wait(1).to({x:1375.3,startPosition:22},0).wait(1).to({x:1363.8,startPosition:23},0).wait(1).to({x:1352.3,startPosition:24},0).wait(1).to({x:1340.8,startPosition:25},0).wait(1).to({x:1329.3,startPosition:26},0).wait(1).to({x:1317.8,startPosition:27},0).wait(1).to({x:1306.3,startPosition:28},0).wait(1).to({x:1294.8,startPosition:29},0).wait(1).to({x:1283.3,startPosition:30},0).wait(1).to({x:1271.8,startPosition:31},0).wait(1).to({x:1260.3,startPosition:32},0).wait(1).to({x:1248.8,startPosition:33},0).wait(1).to({x:1237.3,startPosition:0},0).wait(1).to({x:1225.8,startPosition:1},0).wait(1).to({x:1214.3,startPosition:2},0).wait(1).to({x:1202.8,startPosition:3},0).wait(1).to({x:1191.3,startPosition:4},0).to({_off:true},1).wait(87));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_clouds = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// clouds
	this.instance = new lib.clouds();
	this.instance.setTransform(-524.05,262,1,1,0,0,0,1003.9,230.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:1003.6,regY:230.5,x:-516.8,y:261.9},0).wait(1).to({x:-509.3},0).wait(1).to({x:-501.75},0).wait(1).to({x:-494.25},0).wait(1).to({x:-486.7},0).wait(1).to({x:-479.2},0).wait(1).to({x:-471.65},0).wait(1).to({x:-464.15},0).wait(1).to({x:-456.6},0).wait(1).to({x:-449.1},0).wait(1).to({x:-441.55},0).wait(1).to({x:-434.05},0).wait(1).to({x:-426.5},0).wait(1).to({x:-419},0).wait(1).to({x:-411.45},0).wait(1).to({x:-403.95},0).wait(1).to({x:-396.4},0).wait(1).to({x:-388.9},0).wait(1).to({x:-381.35},0).wait(1).to({x:-373.85},0).wait(1).to({x:-366.3},0).wait(1).to({x:-358.8},0).wait(1).to({x:-351.25},0).wait(1).to({x:-343.75},0).wait(1).to({x:-336.2},0).wait(1).to({x:-328.7},0).wait(1).to({x:-321.15},0).wait(1).to({x:-313.65},0).wait(1).to({x:-306.1},0).wait(1).to({x:-298.6},0).wait(1).to({x:-291.05},0).wait(1).to({x:-283.55},0).wait(1).to({x:-276},0).wait(1).to({x:-268.5},0).wait(1).to({x:-261},0).wait(1).to({x:-253.45},0).wait(1).to({x:-245.95},0).wait(1).to({x:-238.4},0).wait(1).to({x:-230.9},0).wait(1).to({x:-223.35},0).wait(1).to({x:-215.85},0).wait(1).to({x:-208.3},0).wait(1).to({x:-200.8},0).wait(1).to({x:-193.25},0).wait(1).to({x:-185.75},0).wait(1).to({x:-178.2},0).wait(1).to({x:-170.7},0).wait(1).to({x:-163.15},0).wait(1).to({x:-155.65},0).wait(1).to({x:-148.1},0).wait(1).to({x:-140.6},0).wait(1).to({x:-133.05},0).wait(1).to({x:-125.55},0).wait(1).to({x:-118},0).wait(1).to({x:-110.5},0).wait(1).to({x:-102.95},0).wait(1).to({x:-95.45},0).wait(1).to({x:-87.9},0).wait(1).to({x:-80.4},0).wait(1).to({x:-72.85},0).wait(1).to({x:-65.35},0).wait(1).to({x:-57.8},0).wait(1).to({x:-50.3},0).wait(1).to({x:-42.75},0).wait(1).to({x:-35.25},0).wait(1).to({x:-27.7},0).wait(1).to({x:-20.2},0).wait(1).to({x:-12.65},0).wait(1).to({x:-5.15},0).wait(1).to({x:2.35},0).wait(1).to({x:9.9},0).wait(1).to({x:17.4},0).wait(1).to({x:24.95},0).wait(1).to({x:32.45},0).wait(1).to({x:40},0).wait(1).to({x:47.5},0).wait(1).to({x:55.05},0).wait(1).to({x:62.55},0).wait(1).to({x:70.1},0).wait(1).to({x:77.6},0).wait(1).to({x:85.15},0).wait(1).to({x:92.65},0).wait(1).to({x:100.2},0).wait(1).to({x:107.7},0).wait(1).to({x:115.25},0).wait(1).to({x:122.75},0).wait(1).to({x:130.3},0).wait(1).to({x:137.8},0).wait(1).to({x:145.35},0).wait(1).to({x:152.85},0).wait(1).to({x:160.4},0).wait(1).to({x:167.9},0).wait(1).to({x:175.45},0).wait(1).to({x:182.95},0).wait(1).to({x:190.5},0).wait(1).to({x:198},0).wait(1).to({x:205.55},0).wait(1).to({x:213.05},0).wait(1).to({x:220.6},0).wait(1).to({x:228.1},0).wait(1).to({x:235.65},0).wait(1).to({x:243.15},0).wait(1).to({x:250.7},0).wait(1).to({x:258.2},0).wait(1).to({x:265.7},0).wait(1).to({x:273.25},0).wait(1).to({x:280.75},0).wait(1).to({x:288.3},0).wait(1).to({x:295.8},0).wait(1).to({x:303.35},0).wait(1).to({x:310.85},0).wait(1).to({x:318.4},0).wait(1).to({x:325.9},0).wait(1).to({x:333.45},0).wait(1).to({x:340.95},0).wait(1).to({x:348.5},0).wait(1).to({x:356},0).wait(1).to({x:363.55},0).wait(1).to({x:371.05},0).wait(1).to({x:378.6},0).wait(1).to({x:386.1},0).wait(1).to({x:393.65},0).wait(1).to({x:401.15},0).wait(1).to({x:408.7},0).wait(1).to({x:416.2},0).wait(1).to({x:423.75},0).wait(1).to({x:431.25},0).wait(1).to({x:438.8},0).wait(1).to({x:446.3},0).wait(1).to({x:453.85},0).wait(1).to({x:461.35},0).wait(1).to({x:468.9},0).wait(1).to({x:476.4},0).wait(1).to({x:483.95},0).wait(1).to({x:491.45},0).wait(1).to({x:499},0).wait(1).to({x:506.5},0).wait(1).to({x:514.05},0).wait(1).to({x:521.55},0).wait(1).to({x:529.05},0).wait(1).to({x:536.6},0).wait(1).to({x:544.1},0).wait(1).to({x:551.65},0).wait(1).to({x:559.15},0).wait(1).to({x:566.7},0).wait(1).to({x:574.2},0).wait(1).to({x:581.75},0).wait(1).to({x:589.25},0).wait(1).to({x:596.8},0).wait(1).to({x:604.3},0).wait(1).to({x:611.85},0).wait(1).to({x:619.35},0).wait(1).to({x:626.9},0).wait(1).to({x:634.4},0).wait(1).to({x:641.95},0).wait(1).to({x:649.45},0).wait(1).to({x:657},0).wait(1).to({x:664.5},0).wait(1).to({x:672.05},0).wait(1).to({x:679.55},0).wait(1).to({x:687.1},0).wait(1).to({x:694.6},0).wait(1).to({x:702.15},0).wait(1).to({x:709.65},0).wait(1).to({x:717.2},0).wait(1).to({x:724.7},0).wait(1).to({x:732.25},0).wait(1).to({x:739.75},0).wait(1).to({x:747.3},0).wait(1).to({x:754.8},0).wait(1).to({x:762.35},0).wait(1).to({x:769.85},0).wait(1).to({x:777.4},0).wait(1).to({x:784.9},0).wait(1).to({x:792.4},0).wait(1).to({x:799.95},0).wait(1).to({x:807.45},0).wait(1).to({x:815},0).wait(1).to({x:822.5},0).wait(1).to({x:830.05},0).wait(1).to({x:837.55},0).wait(1).to({x:845.1},0).wait(1).to({x:852.6},0).wait(1).to({x:860.15},0).wait(1).to({x:867.65},0).wait(1).to({x:875.2},0).wait(1).to({x:882.7},0).wait(1).to({x:890.25},0).wait(1).to({x:897.75},0).wait(1).to({x:905.3},0).wait(1).to({x:912.8},0).wait(1).to({x:920.35},0).wait(1).to({x:927.85},0).wait(1).to({x:935.4},0).wait(1).to({x:942.9},0).wait(1).to({x:950.45},0).wait(1).to({x:957.95},0).wait(1).to({x:965.5},0).wait(1).to({x:973},0).wait(1).to({x:980.55},0).wait(1).to({x:988.05},0).wait(1).to({x:995.6},0).wait(1).to({x:1003.1},0).wait(1).to({x:1010.6},0).wait(1).to({x:1018.1},0).wait(1).to({x:1025.65},0).wait(1).to({x:1033.15},0).wait(1).to({x:1040.7},0).wait(1).to({x:1048.2},0).wait(1).to({x:1055.75},0).wait(1).to({x:1056.9},0).wait(1).to({x:1058.1},0).wait(1).to({x:1059.3},0).wait(1).to({x:1060.5},0).wait(1).to({x:1061.7},0).wait(1).to({x:1062.9},0).wait(1).to({x:1064.1},0).wait(1).to({x:1065.3},0).wait(1).to({x:1066.5},0).wait(1).to({x:1067.7},0).wait(1).to({x:1068.9},0).wait(1).to({x:1070.1},0).wait(1).to({x:1071.3},0).wait(1).to({x:1072.5},0).wait(1).to({x:1073.7},0).wait(1).to({x:1074.9},0).wait(1).to({x:1076.1},0).wait(1).to({x:1077.3},0).wait(1).to({x:1078.5},0).wait(1).to({x:1079.7},0).wait(1).to({x:1080.9},0).wait(1).to({x:1082.1},0).wait(1).to({x:1083.3},0).wait(1).to({x:1084.5},0).wait(1).to({x:1085.7},0).wait(1).to({x:1086.9},0).wait(1).to({x:1088.1},0).wait(1).to({x:1089.3},0).wait(1).to({x:1090.5},0).wait(1).to({x:1091.7},0).wait(1).to({x:1092.9},0).wait(1).to({x:1094.1},0).wait(1).to({x:1095.3},0).wait(1).to({x:1096.5},0).wait(1).to({x:1097.7},0).wait(1).to({x:1098.9},0).wait(1).to({x:1100.1},0).wait(1).to({x:1101.3},0).wait(1).to({x:1102.5},0).wait(1).to({x:1103.7},0).wait(1).to({x:1104.9},0).wait(1).to({x:1106.1},0).wait(1).to({x:1107.3},0).wait(1).to({x:1108.5},0).wait(1).to({x:1109.7},0).wait(1).to({x:1110.9},0).wait(1).to({x:1112.1},0).wait(1).to({x:1113.3},0).wait(1).to({x:1114.5},0).wait(1).to({x:1115.7},0).wait(1).to({x:1116.9},0).wait(1).to({x:1118.1},0).wait(1).to({x:1119.3},0).wait(1).to({x:1120.5},0).wait(1).to({x:1121.7},0).wait(1).to({x:1122.9},0).wait(1).to({x:1124.1},0).wait(1).to({x:1125.3},0).wait(1).to({x:1126.5},0).wait(1).to({x:1127.7},0).wait(1).to({x:1128.9},0).wait(1).to({x:1130.1},0).wait(1).to({x:1131.3},0).wait(1).to({x:1132.5},0).wait(1).to({x:1133.7},0).wait(1).to({x:1134.9},0).wait(1).to({x:1136.1},0).wait(1).to({x:1137.3},0).wait(1).to({x:1138.5},0).wait(1).to({x:1139.7},0).wait(1).to({x:1140.9},0).wait(1).to({x:1142.1},0).wait(1).to({x:1143.3},0).wait(1).to({x:1144.5},0).wait(1).to({x:1145.7},0).wait(1).to({x:1146.9},0).wait(1).to({x:1148.1},0).wait(1).to({x:1149.3},0).wait(1).to({x:1150.5},0).wait(1).to({x:1151.7},0).wait(1).to({x:1152.9},0).wait(1).to({x:1154.1},0).wait(1).to({x:1155.3},0).wait(1).to({x:1156.5},0).wait(1).to({x:1157.7},0).wait(1).to({x:1158.9},0).wait(1).to({x:1160.1},0).wait(1).to({x:1161.3},0).wait(1).to({x:1162.5},0).wait(1).to({x:1163.7},0).wait(1).to({x:1164.9},0).wait(1).to({x:1166.1},0).wait(1).to({x:1167.25},0).wait(1).to({x:1168.45},0).wait(1).to({x:1169.65},0).wait(1).to({x:1170.85},0).wait(1).to({x:1172.05},0).wait(1).to({x:1173.25},0).wait(1).to({x:1174.45},0).wait(1).to({x:1175.65},0).wait(1).to({x:1176.85},0).wait(1).to({x:1178.05},0).wait(1).to({x:1179.25},0).wait(1).to({x:1180.45},0).wait(1).to({x:1181.65},0).wait(1).to({x:1182.85},0).wait(1).to({x:1184.05},0).wait(1).to({x:1185.25},0).wait(1).to({x:1186.45},0).wait(1).to({x:1187.65},0).wait(1).to({x:1188.85},0).wait(1).to({x:1190.05},0).wait(1).to({x:1191.25},0).wait(1).to({x:1192.45},0).wait(1).to({x:1193.65},0).wait(1).to({x:1194.85},0).wait(1).to({x:1196.05},0).wait(1).to({x:1197.25},0).wait(1).to({x:1198.45},0).wait(1).to({x:1199.65},0).wait(1).to({x:1200.85},0).wait(1).to({x:1202.05},0).wait(1).to({x:1203.25},0).wait(1).to({x:1204.45},0).wait(1).to({x:1205.65},0).wait(1).to({x:1206.85},0).wait(1).to({x:1208.05},0).wait(1).to({x:1209.25},0).wait(1).to({x:1210.45},0).wait(1).to({x:1211.65},0).wait(1).to({x:1212.85},0).wait(1).to({x:1214.05},0).wait(1).to({x:1215.25},0).wait(1).to({x:1216.45},0).wait(1).to({x:1217.65},0).wait(1).to({x:1218.85},0).wait(1).to({x:1220.05},0).wait(1).to({x:1221.25},0).wait(1).to({x:1222.45},0).wait(1).to({x:1223.65},0).wait(1).to({x:1224.85},0).wait(1).to({x:1226.05},0).wait(1).to({x:1227.25},0).wait(1).to({x:1228.45},0).wait(1).to({x:1229.65},0).wait(1).to({x:1230.85},0).wait(1).to({x:1232.05},0).wait(1).to({x:1233.25},0).wait(15).to({x:1230.65},0).wait(1).to({x:1228},0).wait(1).to({x:1225.4},0).wait(1).to({x:1222.75},0).wait(1).to({x:1220.15},0).wait(1).to({x:1217.55},0).wait(1).to({x:1214.9},0).wait(1).to({x:1212.3},0).wait(1).to({x:1209.7},0).wait(1).to({x:1207.05},0).wait(1).to({x:1204.45},0).wait(1).to({x:1201.85},0).wait(1).to({x:1199.2},0).wait(1).to({x:1196.6},0).wait(1).to({x:1194},0).wait(1).to({x:1191.35},0).wait(1).to({x:1188.75},0).wait(1).to({x:1186.1},0).wait(1).to({x:1183.5},0).wait(1).to({x:1180.9},0).wait(1).to({x:1178.25},0).wait(1).to({x:1175.65},0).wait(1).to({x:1173.05},0).wait(1).to({x:1170.4},0).wait(1).to({x:1167.8},0).wait(1).to({x:1165.2},0).wait(1).to({x:1162.55},0).wait(1).to({x:1159.95},0).wait(1).to({x:1157.3},0).wait(1).to({x:1154.7},0).wait(1).to({x:1152.1},0).wait(1).to({x:1149.45},0).wait(1).to({x:1146.85},0).wait(1).to({x:1144.25},0).wait(1).to({x:1141.6},0).wait(1).to({x:1139},0).wait(1).to({x:1136.4},0).wait(1).to({x:1133.75},0).wait(1).to({x:1131.15},0).wait(1).to({x:1128.55},0).wait(1).to({x:1125.9},0).wait(1).to({x:1123.3},0).wait(1).to({x:1120.65},0).wait(1).to({x:1118.05},0).wait(1).to({x:1115.45},0).wait(1).to({x:1112.8},0).wait(1).to({x:1110.2},0).wait(1).to({x:1107.6},0).wait(1).to({x:1104.95},0).wait(1).to({x:1102.35},0).wait(1).to({x:1099.75},0).wait(1).to({x:1097.1},0).wait(1).to({x:1094.5},0).wait(1).to({x:1091.85},0).wait(1).to({x:1089.25},0).wait(1).to({x:1086.65},0).wait(1).to({x:1084},0).wait(1).to({x:1081.4},0).wait(1).to({x:1078.8},0).wait(1).to({x:1076.15},0).wait(1).to({x:1073.55},0).wait(1).to({x:1070.95},0).wait(1).to({x:1068.3},0).wait(1).to({x:1065.7},0).wait(1).to({x:1063.1},0).wait(1).to({x:1060.45},0).wait(1).to({x:1057.85},0).wait(1).to({x:1055.2},0).wait(1).to({x:1052.6},0).wait(1).to({x:1050},0).wait(1).to({x:1047.35},0).wait(1).to({x:1044.75},0).wait(1).to({x:1042.15},0).wait(1).to({x:1039.5},0).wait(1).to({x:1036.9},0).wait(1).to({x:1034.3},0).wait(1).to({x:1031.65},0).wait(1).to({x:1029.05},0).wait(1).to({x:1026.4},0).wait(1).to({x:1023.8},0).wait(1).to({x:1021.2},0).wait(1).to({x:1018.55},0).wait(1).to({x:1015.95},0).wait(1).to({x:1013.35},0).wait(1).to({x:1010.7},0).wait(1).to({x:1008.1},0).wait(1).to({x:1005.5},0).wait(1).to({x:1002.9},0).wait(1).to({x:1000.3},0).wait(537));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Blue_sitting = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Blue_sitting
	this.instance = new lib.אישכחוליושב("synched",0);
	this.instance.setTransform(571.95,1033.95,1,1,0,0,0,97.2,243.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(291).to({_off:false},0).to({_off:true},211).wait(318).to({_off:false,regX:97.4,regY:243.5,scaleX:1.0464,scaleY:1.0464,x:590.35,y:1025.8},0).wait(41));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Blue_is_crying = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Blue_is_crying
	this.instance = new lib.Symbol1();
	this.instance.setTransform(-119,905.75,1,1,0,0,0,65.2,65);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(144).to({_off:false},0).wait(1).to({regX:65.3,scaleX:1.0046,scaleY:1.0046,x:-110.4,y:906.35},0).wait(1).to({scaleX:1.0093,scaleY:1.0093,x:-101.95,y:906.95},0).wait(1).to({scaleX:1.0139,scaleY:1.0139,x:-93.5,y:907.55},0).wait(1).to({scaleX:1.0186,scaleY:1.0186,x:-85,y:908.2},0).wait(1).to({scaleX:1.0232,scaleY:1.0232,x:-76.55,y:908.8},0).wait(1).to({scaleX:1.0278,scaleY:1.0278,x:-68.1,y:909.4},0).wait(1).to({scaleX:1.0325,scaleY:1.0325,x:-59.65,y:910},0).wait(1).to({scaleX:1.0371,scaleY:1.0371,x:-51.15,y:910.65},0).wait(1).to({scaleX:1.0418,scaleY:1.0418,x:-42.65,y:911.25},0).wait(1).to({scaleX:1.0464,scaleY:1.0464,x:-34.2,y:911.85},0).wait(1).to({scaleX:1.051,scaleY:1.051,x:-25.7,y:912.5},0).wait(1).to({scaleX:1.0557,scaleY:1.0557,x:-17.25,y:913.1},0).wait(1).to({scaleX:1.0603,scaleY:1.0603,x:-8.8,y:913.7},0).wait(1).to({scaleX:1.0649,scaleY:1.0649,x:-0.35,y:914.3},0).wait(1).to({scaleX:1.0696,scaleY:1.0696,x:8.15,y:914.95},0).wait(1).to({scaleX:1.0742,scaleY:1.0742,x:16.6,y:915.55},0).wait(1).to({scaleX:1.0789,scaleY:1.0789,x:25.05,y:916.2},0).wait(1).to({scaleX:1.0835,scaleY:1.0835,x:33.55,y:916.85},0).wait(1).to({scaleX:1.0881,scaleY:1.0881,x:42,y:917.45},0).wait(1).to({scaleX:1.0928,scaleY:1.0928,x:50.45,y:918.05},0).wait(1).to({scaleX:1.0974,scaleY:1.0974,x:58.9,y:918.65},0).wait(1).to({scaleX:1.1021,scaleY:1.1021,x:67.4,y:919.3},0).wait(1).to({scaleX:1.1067,scaleY:1.1067,x:75.8,y:919.9},0).wait(1).to({scaleX:1.1113,scaleY:1.1113,x:84.25,y:920.5},0).wait(1).to({scaleX:1.116,scaleY:1.116,x:92.75,y:921.15},0).wait(1).to({scaleX:1.1206,scaleY:1.1206,x:101.25,y:921.75},0).wait(1).to({scaleX:1.1253,scaleY:1.1253,x:109.7,y:922.35},0).wait(1).to({scaleX:1.1299,scaleY:1.1299,x:118.15,y:922.95},0).wait(1).to({scaleX:1.1345,scaleY:1.1345,x:126.65,y:923.6},0).wait(1).to({scaleX:1.1392,scaleY:1.1392,x:135.1,y:924.2},0).wait(1).to({scaleX:1.1438,scaleY:1.1438,x:143.55,y:924.8},0).wait(1).to({scaleX:1.1485,scaleY:1.1485,x:152.05,y:925.45},0).wait(1).to({scaleX:1.1531,scaleY:1.1531,x:160.5,y:926.05},0).wait(1).to({scaleX:1.1577,scaleY:1.1577,x:168.95,y:926.65},0).wait(1).to({scaleX:1.1624,scaleY:1.1624,x:177.4,y:927.25},0).wait(1).to({scaleX:1.167,scaleY:1.167,x:185.9,y:927.9},0).wait(1).to({scaleX:1.1716,scaleY:1.1716,x:194.35,y:928.5},0).wait(1).to({scaleX:1.1763,scaleY:1.1763,x:202.8,y:929.1},0).wait(1).to({scaleX:1.1809,scaleY:1.1809,x:211.3,y:929.7},0).wait(1).to({scaleX:1.1856,scaleY:1.1856,x:219.75,y:930.35},0).wait(1).to({scaleX:1.1902,scaleY:1.1902,x:228.2,y:930.95},0).wait(1).to({scaleX:1.1948,scaleY:1.1948,x:236.65,y:931.55},0).wait(1).to({scaleX:1.1995,scaleY:1.1995,x:245.2,y:932.2},0).wait(1).to({scaleX:1.2041,scaleY:1.2041,x:253.65,y:932.8},0).wait(1).to({scaleX:1.2088,scaleY:1.2088,x:262.1,y:933.4},0).wait(1).to({scaleX:1.2134,scaleY:1.2134,x:270.6,y:934},0).wait(1).to({scaleX:1.218,scaleY:1.218,x:279.05,y:934.65},0).wait(1).to({scaleX:1.2227,scaleY:1.2227,x:287.5,y:935.25},0).wait(1).to({scaleX:1.2273,scaleY:1.2273,x:295.95,y:935.9},0).wait(1).to({scaleX:1.232,scaleY:1.232,x:304.45,y:936.55},0).wait(1).to({scaleX:1.2366,scaleY:1.2366,x:312.9,y:937.15},0).wait(1).to({scaleX:1.2412,scaleY:1.2412,x:321.35,y:937.75},0).wait(1).to({scaleX:1.2459,scaleY:1.2459,x:329.85,y:938.35},0).wait(1).to({scaleX:1.2505,scaleY:1.2505,x:338.3,y:939},0).wait(1).to({scaleX:1.2551,scaleY:1.2551,x:346.75,y:939.6},0).wait(1).to({scaleX:1.2598,scaleY:1.2598,x:355.2,y:940.2},0).wait(1).to({scaleX:1.2644,scaleY:1.2644,x:363.7,y:940.85},0).wait(1).to({scaleX:1.2691,scaleY:1.2691,x:372.15,y:941.45},0).wait(1).to({scaleX:1.2737,scaleY:1.2737,x:380.6,y:942.05},0).wait(1).to({scaleX:1.2783,scaleY:1.2783,x:389.15,y:942.65},0).wait(1).to({scaleX:1.283,scaleY:1.283,x:397.6,y:943.3},0).wait(1).to({scaleX:1.2876,scaleY:1.2876,x:406.05,y:943.9},0).wait(1).to({scaleX:1.2923,scaleY:1.2923,x:414.5,y:944.5},0).wait(1).to({scaleX:1.2969,scaleY:1.2969,x:423,y:945.15},0).wait(1).to({scaleX:1.3015,scaleY:1.3015,x:605.85,y:956.8},0).wait(81).to({_off:true},1).wait(211).to({_off:false,scaleX:1.2675,scaleY:1.2675,x:582.55,y:878.55},0).wait(318));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Blue_goes = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Blue_goes
	this.instance = new lib.אישכחול("synched",0);
	this.instance.setTransform(1065.3,833.4,1,1,0,0,0,98.2,129.4);
	this.instance._off = true;

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0571B9").ss(0.4).p("AgUA5QgFgIgBgTIgDg9QgBgPAEgIQAGgLAMgDQAMgBAJAJQAHAIACAVIAIBCQADAbgSAGQgJADgKgDQgLgDgFgIg");
	this.shape.setTransform(1085.7876,919.5207,6.3335,6.3335);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0571B9").s().p("AgEBEQgLgDgFgIQgFgIgBgTIgDg9QgBgPAEgIQAGgLAMgDQAMgBAJAJQAHAIACAVIAIBCQADAbgSAGQgEABgFAAIgKgBg");
	this.shape_1.setTransform(1085.7876,919.5207,6.3335,6.3335);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#0571B9").ss(0.4).p("AgBAUQAGgUgEgU");
	this.shape_2.setTransform(1208.6781,953.0497,6.3324,6.3324);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0099FE").s().p("AABgUQAEAUgGAVg");
	this.shape_3.setTransform(1208.5932,952.8046,6.3324,6.3324);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#0571B9").ss(0.4).p("AgYhIQgEgzApgEQAYgCASARQAGAGAKAQQAJAOAIAGQAIAGATAIQARAMAOAdQAdA5gSAkQgSAjg+ALQhDALg6gUQhCgWgig3QgRgcACgXQABgVAPgTQAOgRAVgLQAOgHAYgEQAdgEAJgEQAGgCAHgE");
	this.shape_4.setTransform(1214.4243,843.3033,6.3324,6.3324);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0099FE").s().p("AgwBzQhCgWgig3QgRgcACgXQABgVAPgTQAOgRAVgLQAOgHAYgEQAdgEAJgEQAGgCAHgEIAAAPQAEghAggDQAYgCASARQAGAGAKAQQAJAOAIAGQAIAGATAIQARAMAOAdQAdA5gSAkQgSAjg+ALQgYAEgXAAQgoAAgmgNg");
	this.shape_5.setTransform(1214.4243,843.3033,6.3324,6.3324);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#0571B9").ss(0.4).p("AgRAKQASgJAOgM");
	this.shape_6.setTransform(1149.401,918.6771,6.3324,6.3324);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#0571B9").ss(0.4).p("AgZAEQAHgIASABQAQABAKAH");
	this.shape_7.setTransform(1045.0066,977.1223,6.3324,6.3324);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0099FE").s().p("AgZAEQAHgIASABQAQABAKAHg");
	this.shape_8.setTransform(1045.0066,977.4692,6.3324,6.3324);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#0571B9").ss(0.4).p("AAJASQgHgEgFgMQgFgLAEgI");
	this.shape_9.setTransform(1055.5099,938.5567,6.3324,6.3324);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0099FE").s().p("AgEACQgFgLADgHIAOAiQgIgEgEgMg");
	this.shape_10.setTransform(1056.4235,938.5567,6.3324,6.3324);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#0571B9").ss(0.4).p("AAOAAQAKgHAMAAQAIgBAQACQAPgBAHgKQAFgKAAgKQABgkAAgPQgBgcgEgVQgKgrgcgDQgTgBgNAPQgRAUADAnQABATgFAHQgIAJgRgDQgXgEgDAAQgOAAgKANQgKALgBAPQgCAeAcAgQALANAMAGQAQAIALgEQAIgDADgIQACgEAAgFIAAgBQACgPALgGQABAAACAAQAHgCASgCQADAAAFgBQAFgBADABQAMACALASQAMAUAIAEQgHgBgGAFQgGAFgBAHQgCAGABAKQABAGABALQAAATgKASQgKAQgRAMQgYARgvAIQghAFgTABQgNAAgHgCQgKgEgFgLQgEgJACgMQAFgkATgMQAXgPAhgBQAEAAAJAAQAHgBAFgBQAOgCAEgMQADgGgFgHQgGgNgBgBQAAgEAAgEQABgFABgFQACgHAGgHQAEgEAEgDg");
	this.shape_11.setTransform(1055.2946,980.8098,6.3324,6.3324);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0099FE").s().p("AhbC2QgKgEgEgLQgEgJABgMQAGgkATgMQAXgPAggBIANAAIANgCQANgCAFgMQACgGgEgHIgIgOIAAAAIAAgIQgEAJgHACQgKAEgQgIQgNgGgLgNQgcggACgeQABgPAKgLQALgNAOAAIAaAEQAQADAHgJQAGgHgBgTQgDgnASgUQANgPATABQAcADAJArQAFAVABAcIgBAzQAAAKgGAKQgHAKgOABQgRgCgIABQgLAAgKAHIgDAAQgMAGgCAPQADgHAFgHIAJgHIAZgEIAIgBQAFgBADABQAMACAKASQAMAUAJAEQgHgBgGAFQgGAFgCAHQgBAGABAKIABARQABATgLASQgJAQgRAMQgZARgvAIQggAFgUABIgEAAQgKAAgGgCg");
	this.shape_12.setTransform(1048.5182,980.8098,6.3324,6.3324);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#0571B9").ss(0.4).p("AAWAdQAAgVgOgOQgOgQgUgB");
	this.shape_13.setTransform(1127.3675,966.8941,6.3324,6.3324);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0099FE").s().p("AgXgaQAUACANAPQAOAPAAAVg");
	this.shape_14.setTransform(1125.9028,968.4772,6.3324,6.3324);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#0571B9").ss(0.4).p("AhEhhQAHAKABAEQACAMgQALQgKAHgPAHQgSAIgJAEQghAPgPARQgKALgEAPQgFAQAFAOQAEANANAMQAIAHARALQAhAVASAGQAfALAZgJQAhgMAVgyQAAgBAQgnQAKgYAKgNQAkAUAngKQAogMAUgmQAFgKABgIQAAgMgIgFQgGgDgNADQg4AMg5gLQgzgKg3gdQgQgIgEAMQgDALAJAOg");
	this.shape_15.setTransform(1176.994,971.7668,6.3335,6.3335);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0099FE").s().p("AhfB8QgSgGghgVQgRgLgIgHQgNgMgEgNQgFgOAFgQQAEgPAKgLQAPgRAhgPIAbgMQAPgHAKgHQAQgLgCgMQgBgEgHgKQgJgOADgLQAEgMAQAIQA3AdAzAKQA5ALA4gMQANgDAGADQAIAFAAAMQgBAIgFAKQgUAmgoAMQgnAKgkgUQgKANgKAYIgQAoQgVAyghAMQgMAEgMAAQgPAAgRgGg");
	this.shape_16.setTransform(1176.994,971.7668,6.3335,6.3335);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},861).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(87));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(861).to({_off:false},0).wait(1).to({regX:95.9,regY:143,x:1054.3,y:847,startPosition:1},0).wait(1).to({x:1045.6,startPosition:2},0).wait(1).to({x:1036.95,startPosition:3},0).wait(1).to({x:1028.25,startPosition:4},0).wait(1).to({x:1019.55,startPosition:5},0).wait(1).to({x:1010.9,startPosition:6},0).wait(1).to({x:1002.2,startPosition:7},0).wait(1).to({x:993.55,startPosition:8},0).wait(1).to({x:984.85,startPosition:9},0).wait(1).to({x:976.15,startPosition:10},0).wait(1).to({x:967.5,startPosition:11},0).wait(1).to({x:958.8,startPosition:12},0).wait(1).to({x:950.15,startPosition:13},0).wait(1).to({x:941.45,startPosition:14},0).wait(1).to({x:932.75,startPosition:15},0).wait(1).to({x:924.1,startPosition:16},0).wait(1).to({x:915.4,startPosition:17},0).wait(1).to({x:906.75,startPosition:18},0).wait(1).to({x:898.05,startPosition:19},0).wait(1).to({x:889.35,startPosition:20},0).wait(1).to({x:880.7,startPosition:21},0).wait(1).to({x:872,startPosition:22},0).wait(1).to({x:863.35,startPosition:23},0).wait(1).to({x:854.65,startPosition:24},0).wait(1).to({x:845.95,startPosition:25},0).wait(1).to({x:837.3,startPosition:26},0).wait(1).to({x:828.6,startPosition:27},0).wait(1).to({x:819.9,startPosition:28},0).wait(1).to({x:811.25,startPosition:29},0).wait(1).to({x:802.55,startPosition:0},0).wait(1).to({x:793.9,startPosition:1},0).wait(1).to({x:785.2,startPosition:2},0).wait(1).to({x:776.5,startPosition:3},0).wait(1).to({x:767.85,startPosition:4},0).wait(1).to({x:759.15,startPosition:5},0).wait(1).to({x:750.5,startPosition:6},0).wait(1).to({x:741.8,startPosition:7},0).wait(1).to({x:733.1,startPosition:8},0).wait(1).to({x:724.45,startPosition:9},0).wait(1).to({x:715.75,startPosition:10},0).wait(1).to({x:707.1,startPosition:11},0).wait(1).to({x:698.4,startPosition:12},0).wait(1).to({x:689.7,startPosition:13},0).wait(1).to({x:681.05,startPosition:14},0).wait(1).to({x:672.35,startPosition:15},0).wait(1).to({x:663.7,startPosition:16},0).wait(1).to({x:655,startPosition:17},0).wait(1).to({x:646.3,startPosition:18},0).wait(1).to({x:637.65,startPosition:19},0).wait(1).to({x:628.95,startPosition:20},0).wait(1).to({x:620.25,startPosition:21},0).wait(1).to({x:611.6,startPosition:22},0).wait(1).to({x:602.9,startPosition:23},0).wait(1).to({x:594.25,startPosition:24},0).wait(1).to({x:585.55,startPosition:25},0).wait(1).to({x:576.85,startPosition:26},0).wait(1).to({x:568.2,startPosition:27},0).wait(1).to({x:559.5,startPosition:28},0).wait(1).to({x:550.85,startPosition:29},0).wait(1).to({x:542.15,startPosition:0},0).wait(1).to({x:533.45,startPosition:1},0).wait(1).to({x:524.8,startPosition:2},0).wait(1).to({x:516.1,startPosition:3},0).wait(1).to({x:507.45,startPosition:4},0).wait(1).to({x:498.75,startPosition:5},0).wait(1).to({x:490.05,startPosition:6},0).wait(1).to({x:481.4,startPosition:7},0).wait(1).to({x:472.7,startPosition:8},0).wait(1).to({x:464.05,startPosition:9},0).wait(1).to({x:455.35,startPosition:10},0).wait(1).to({x:446.65,startPosition:11},0).wait(1).to({x:438,startPosition:12},0).wait(1).to({x:429.3,startPosition:13},0).wait(1).to({x:420.6,startPosition:14},0).wait(1).to({x:411.95,startPosition:15},0).wait(1).to({x:403.25,startPosition:16},0).wait(1).to({x:394.6,startPosition:17},0).wait(1).to({x:385.9,startPosition:18},0).wait(1).to({x:377.2,startPosition:19},0).wait(1).to({x:368.55,startPosition:20},0).wait(1).to({x:359.85,startPosition:21},0).wait(1).to({x:351.2,startPosition:22},0).wait(1).to({x:342.5,startPosition:23},0).wait(1).to({x:333.8,startPosition:24},0).wait(1).to({x:325.15,startPosition:25},0).wait(1).to({x:316.45,startPosition:26},0).wait(1).to({x:307.8,startPosition:27},0).wait(1).to({x:299.1,startPosition:28},0).wait(1).to({x:290.4,startPosition:29},0).wait(1).to({x:281.75,startPosition:0},0).wait(1).to({x:273.05,startPosition:1},0).wait(1).to({x:264.4,startPosition:2},0).wait(1).to({x:255.7,startPosition:3},0).wait(1).to({x:247,startPosition:4},0).wait(1).to({x:238.35,startPosition:5},0).wait(1).to({x:229.65,startPosition:6},0).wait(1).to({x:220.95,startPosition:7},0).wait(1).to({x:212.3,startPosition:8},0).wait(1).to({x:203.6,startPosition:9},0).wait(1).to({x:194.95,startPosition:10},0).wait(1).to({x:186.25,startPosition:11},0).wait(1).to({x:177.55,startPosition:12},0).wait(1).to({x:168.9,startPosition:13},0).wait(1).to({x:160.2,startPosition:14},0).wait(1).to({x:151.55,startPosition:15},0).wait(1).to({x:142.85,startPosition:16},0).wait(1).to({x:134.15,startPosition:17},0).wait(1).to({x:125.5,startPosition:18},0).wait(1).to({x:116.8,startPosition:19},0).wait(1).to({x:108.15,startPosition:20},0).wait(1).to({x:99.45,startPosition:21},0).wait(1).to({x:90.8,startPosition:22},0).wait(1).to({x:82.15,startPosition:23},0).wait(1).to({x:73.45,startPosition:24},0).wait(1).to({x:64.75,startPosition:25},0).wait(1).to({x:56.1,startPosition:26},0).wait(1).to({x:47.4,startPosition:27},0).wait(1).to({x:38.75,startPosition:28},0).wait(1).to({x:30.05,startPosition:29},0).wait(1).to({x:21.35,startPosition:0},0).wait(1).to({x:12.7,startPosition:1},0).wait(1).to({x:4,startPosition:2},0).wait(1).to({x:-4.65,startPosition:3},0).wait(1).to({x:-13.35,startPosition:4},0).wait(1).to({x:-22.05,startPosition:5},0).wait(1).to({x:-30.7,startPosition:6},0).wait(1).to({x:-39.4,startPosition:7},0).wait(1).to({x:-48.05,startPosition:8},0).wait(1).to({x:-56.75,startPosition:9},0).wait(1).to({x:-65.45,startPosition:10},0).wait(1).to({x:-74.1,startPosition:11},0).wait(1).to({x:-82.8,startPosition:12},0).wait(1).to({x:-91.45,startPosition:13},0).wait(1).to({x:-100.15,startPosition:14},0).wait(1).to({x:-108.85,startPosition:15},0).wait(1).to({x:-117.5,startPosition:16},0).wait(1).to({x:-126.2,startPosition:17},0).wait(1).to({x:-134.9,startPosition:18},0).wait(1).to({regX:96,x:2083.55,y:910.3,startPosition:0},0).wait(1).to({regX:95.9,x:2071.95,startPosition:1},0).wait(1).to({x:2060.45,startPosition:2},0).wait(1).to({x:2048.95,startPosition:3},0).wait(1).to({x:2037.45,startPosition:4},0).wait(1).to({x:2025.95,startPosition:5},0).wait(1).to({x:2014.45,startPosition:6},0).wait(1).to({x:2002.95,startPosition:7},0).wait(1).to({x:1991.45,startPosition:8},0).wait(1).to({x:1979.95,startPosition:9},0).wait(1).to({x:1968.45,startPosition:10},0).wait(1).to({x:1956.95,startPosition:11},0).wait(1).to({x:1945.45,startPosition:12},0).wait(1).to({x:1933.95,startPosition:13},0).wait(1).to({x:1922.45,startPosition:14},0).wait(1).to({x:1910.95,startPosition:15},0).wait(1).to({x:1899.45,startPosition:16},0).wait(1).to({x:1887.95,startPosition:17},0).wait(1).to({x:1876.45,startPosition:18},0).wait(1).to({x:1864.95,startPosition:19},0).wait(1).to({x:1853.45,startPosition:20},0).wait(1).to({x:1841.95,startPosition:21},0).wait(1).to({x:1830.45,startPosition:22},0).wait(1).to({x:1818.95,startPosition:23},0).wait(1).to({x:1807.45,startPosition:24},0).wait(1).to({x:1795.95,startPosition:25},0).wait(1).to({x:1784.45,startPosition:26},0).wait(1).to({x:1772.95,startPosition:27},0).wait(1).to({x:1761.45,startPosition:28},0).wait(1).to({x:1749.95,startPosition:29},0).wait(1).to({x:1738.45,startPosition:0},0).wait(1).to({x:1726.95,startPosition:1},0).wait(1).to({x:1715.45,startPosition:2},0).wait(1).to({x:1703.95,startPosition:3},0).wait(1).to({x:1692.45,startPosition:4},0).wait(1).to({x:1680.95,startPosition:5},0).wait(1).to({x:1669.45,startPosition:6},0).wait(1).to({x:1657.95,startPosition:7},0).wait(1).to({x:1646.45,startPosition:8},0).wait(1).to({x:1634.95,startPosition:9},0).wait(1).to({x:1623.45,startPosition:10},0).wait(1).to({x:1611.95,startPosition:11},0).wait(1).to({x:1600.45,startPosition:12},0).wait(1).to({x:1588.95,startPosition:13},0).wait(1).to({x:1577.45,startPosition:14},0).wait(1).to({x:1565.95,startPosition:15},0).wait(1).to({x:1554.45,startPosition:16},0).wait(1).to({x:1542.95,startPosition:17},0).wait(1).to({x:1531.45,startPosition:18},0).wait(1).to({x:1519.95,startPosition:19},0).wait(1).to({x:1508.45,startPosition:20},0).wait(1).to({x:1496.95,startPosition:21},0).wait(1).to({x:1485.45,startPosition:22},0).wait(1).to({x:1473.95,startPosition:23},0).wait(1).to({x:1462.45,startPosition:24},0).wait(1).to({x:1450.95,startPosition:25},0).wait(1).to({x:1439.45,startPosition:26},0).wait(1).to({x:1427.95,startPosition:27},0).wait(1).to({x:1416.45,startPosition:28},0).wait(1).to({x:1404.95,startPosition:29},0).wait(1).to({x:1393.45,startPosition:0},0).wait(1).to({x:1381.95,startPosition:1},0).wait(1).to({x:1370.45,startPosition:2},0).wait(1).to({x:1358.95,startPosition:3},0).wait(1).to({x:1347.45,startPosition:4},0).wait(1).to({x:1335.95,startPosition:5},0).wait(1).to({x:1324.45,startPosition:6},0).wait(1).to({x:1312.95,startPosition:7},0).wait(1).to({x:1301.45,startPosition:8},0).wait(1).to({x:1289.95,startPosition:9},0).wait(1).to({x:1278.45,startPosition:10},0).wait(1).to({x:1266.95,startPosition:11},0).wait(1).to({x:1255.45,startPosition:12},0).to({_off:true},1).wait(87));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_background = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#3FABE1"],[0,1],-231.5,400.9,231.5,-401).s().p("Eg93Av0MAAAhfnMB7vAAAMAAABfng");
	this.shape.setTransform(959.8453,539.4009,3.4631,1.9328);

	this.instance = new lib.ClipGroup();
	this.instance.setTransform(959.35,555.9,2.1788,2.1881,0,0,0,550.6,295.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.instance}]},998).wait(162));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.אנימציהסופיתקורל = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [1159];
	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.numChildren - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_1159 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1159).call(this.frame_1159).wait(1));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.name = "___camera___instance";
	this.___camera___instance.setTransform(960,540);
	this.___camera___instance.depth = 0;
	this.___camera___instance.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).wait(181).to({scaleX:0.5,scaleY:0.5,x:413.9,y:741.45},0).to({regX:1.1,regY:1.6,scaleX:0.3259,scaleY:0.3259,x:647.95,y:877.8},29).wait(14).to({regX:0.9,regY:1.4,x:645.05,y:787},0).to({regX:1,scaleX:0.5613,scaleY:0.5613,x:645.1,y:787.05},15).wait(167).to({regX:1.1,regY:1.5,scaleX:1.0081,scaleY:1.0081,x:965.45,y:588.15},75).to({regX:1.2,regY:1.7,scaleX:1.0141,scaleY:1.0141,x:952.85,y:580.85},1).wait(678));

	// Blue_sitting_obj_
	this.Blue_sitting = new lib.Scene_1_Blue_sitting();
	this.Blue_sitting.name = "Blue_sitting";
	this.Blue_sitting.depth = 0;
	this.Blue_sitting.isAttachedToCamera = 0
	this.Blue_sitting.isAttachedToMask = 0
	this.Blue_sitting.layerDepth = 0
	this.Blue_sitting.layerIndex = 0
	this.Blue_sitting.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Blue_sitting).wait(291).to({regX:105.7,regY:483.1,scaleX:1.7814,scaleY:1.7814,x:0.1},0).wait(211).to({regX:-21.8,regY:31.5,scaleX:0.9861,scaleY:0.9861,x:0},0).wait(318).to({_off:true},41).wait(299));

	// Speech_bubbles_obj_
	this.Speech_bubbles = new lib.Scene_1_Speech_bubbles();
	this.Speech_bubbles.name = "Speech_bubbles";
	this.Speech_bubbles.depth = 0;
	this.Speech_bubbles.isAttachedToCamera = 0
	this.Speech_bubbles.isAttachedToMask = 0
	this.Speech_bubbles.layerDepth = 0
	this.Speech_bubbles.layerIndex = 1
	this.Speech_bubbles.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Speech_bubbles).wait(240).to({regX:105.7,regY:483.1,scaleX:1.7814,scaleY:1.7814,x:0.1},0).wait(243).to({regX:-21.8,regY:31.5,scaleX:0.9861,scaleY:0.9861,x:0},0).wait(337).to({_off:true},40).wait(300));

	// Blue_is_crying_obj_
	this.Blue_is_crying = new lib.Scene_1_Blue_is_crying();
	this.Blue_is_crying.name = "Blue_is_crying";
	this.Blue_is_crying.depth = 0;
	this.Blue_is_crying.isAttachedToCamera = 0
	this.Blue_is_crying.isAttachedToMask = 0
	this.Blue_is_crying.layerDepth = 0
	this.Blue_is_crying.layerIndex = 2
	this.Blue_is_crying.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Blue_is_crying).wait(145).to({regX:253.4,regY:918.8,x:253.4,y:918.8},0).wait(146).to({regX:105.7,regY:483.1,scaleX:1.7814,scaleY:1.7814,x:0.1,y:0},0).wait(211).to({regX:-21.8,regY:31.5,scaleX:0.9861,scaleY:0.9861,x:0},0).to({_off:true},318).wait(340));

	// Blue_goes_obj_
	this.Blue_goes = new lib.Scene_1_Blue_goes();
	this.Blue_goes.name = "Blue_goes";
	this.Blue_goes.depth = 0;
	this.Blue_goes.isAttachedToCamera = 0
	this.Blue_goes.isAttachedToMask = 0
	this.Blue_goes.layerDepth = 0
	this.Blue_goes.layerIndex = 3
	this.Blue_goes.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Blue_goes).wait(861).to({regX:-21.8,regY:31.5,scaleX:0.9861,scaleY:0.9861},0).wait(1).to({regX:974.3,regY:898,scaleX:1,scaleY:1,x:996.1,y:866.55},0).wait(138).to({regX:-21.8,regY:31.5,scaleX:0.9861,scaleY:0.9861,x:0,y:0},0).wait(1).to({regX:974.3,regY:898,scaleX:1,scaleY:1,x:996.1,y:866.55},0).wait(72).to({regX:-21.8,regY:31.5,scaleX:0.9861,scaleY:0.9861,x:0,y:0},0).wait(87));

	// Green_man_obj_
	this.Green_man = new lib.Scene_1_Green_man();
	this.Green_man.name = "Green_man";
	this.Green_man.setTransform(2074.6,881.1,1,1,0,0,0,2074.6,881.1);
	this.Green_man.depth = 0;
	this.Green_man.isAttachedToCamera = 0
	this.Green_man.isAttachedToMask = 0
	this.Green_man.layerDepth = 0
	this.Green_man.layerIndex = 4
	this.Green_man.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Green_man).wait(1).to({regX:924.8,regY:854.8,x:924.8,y:854.8},0).wait(211).to({regX:1010.8,regY:988.5,scaleX:3.0685,scaleY:3.0685,x:2074.6,y:881.25},0).wait(164).to({regX:1270.2,regY:977.7,scaleX:1.7814,scaleY:1.7814,y:881.1},0).wait(155).to({regX:2082.1,regY:925.1,scaleX:0.9861,scaleY:0.9861,y:881.15},0).wait(331).to({regX:924.8,regY:854.8,scaleX:1,scaleY:1,x:917.35,y:810.9},0).wait(138).to({regX:2082.1,regY:925.1,scaleX:0.9861,scaleY:0.9861,x:2074.6,y:881.15},0).wait(1).to({regX:924.8,regY:854.8,scaleX:1,scaleY:1,x:917.35,y:810.9},0).wait(72).to({regX:2082.1,regY:925.1,scaleX:0.9861,scaleY:0.9861,x:2074.6,y:881.15},0).wait(87));

	// sun_obj_
	this.sun = new lib.Scene_1_sun();
	this.sun.name = "sun";
	this.sun.depth = 0;
	this.sun.isAttachedToCamera = 0
	this.sun.isAttachedToMask = 0
	this.sun.layerDepth = 0
	this.sun.layerIndex = 5
	this.sun.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.sun).wait(359).to({regX:105.7,regY:483.1,scaleX:1.7814,scaleY:1.7814,x:0.1},0).wait(801));

	// clouds_obj_
	this.clouds = new lib.Scene_1_clouds();
	this.clouds.name = "clouds";
	this.clouds.setTransform(-524.4,261.9,1,1,0,0,0,-524.4,261.9);
	this.clouds.depth = 0;
	this.clouds.isAttachedToCamera = 0
	this.clouds.isAttachedToMask = 0
	this.clouds.layerDepth = 0
	this.clouds.layerIndex = 6
	this.clouds.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.clouds).wait(1).to({regX:354.4,x:354.4},0).wait(996).to({_off:true},1).wait(162));

	// path_obj_
	this.path = new lib.Scene_1_path();
	this.path.name = "path";
	this.path.setTransform(-129.6,851.4,1,1,0,0,0,-129.6,851.4);
	this.path.depth = 0;
	this.path.isAttachedToCamera = 0
	this.path.isAttachedToMask = 0
	this.path.layerDepth = 0
	this.path.layerIndex = 7
	this.path.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.path).wait(1).to({regX:613,regY:854.8,x:613,y:854.8},0).wait(996).to({_off:true},1).wait(162));

	// background_obj_
	this.background = new lib.Scene_1_background();
	this.background.name = "background";
	this.background.setTransform(959.9,539.4,1,1,0,0,0,959.9,539.4);
	this.background.depth = 0;
	this.background.isAttachedToCamera = 0
	this.background.isAttachedToMask = 0
	this.background.layerDepth = 0
	this.background.layerIndex = 8
	this.background.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.background).wait(998).to({regX:951.6,regY:578.5,scaleX:0.9861,scaleY:0.9861,x:959.85},0).wait(162));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-1325.6,450,4837.4,751.8);
// library properties:
lib.properties = {
	id: '1B4345F67704604DA6EE93F63AD86156',
	width: 1920,
	height: 1080,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['1B4345F67704604DA6EE93F63AD86156'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}

p._getProjectionMatrix = function(container, totalDepth) {	var focalLength = 528.25;
	var projectionCenter = { x : lib.properties.width/2, y : lib.properties.height/2 };
	var scale = (totalDepth + focalLength)/focalLength;
	var scaleMat = new createjs.Matrix2D;
	scaleMat.a = 1/scale;
	scaleMat.d = 1/scale;
	var projMat = new createjs.Matrix2D;
	projMat.tx = -projectionCenter.x;
	projMat.ty = -projectionCenter.y;
	projMat = projMat.prependMatrix(scaleMat);
	projMat.tx += projectionCenter.x;
	projMat.ty += projectionCenter.y;
	return projMat;
}
p._handleTick = function(event) {
	var cameraInstance = exportRoot.___camera___instance;
	if(cameraInstance !== undefined && cameraInstance.pinToObject !== undefined)
	{
		cameraInstance.x = cameraInstance.pinToObject.x + cameraInstance.pinToObject.pinOffsetX;
		cameraInstance.y = cameraInstance.pinToObject.y + cameraInstance.pinToObject.pinOffsetY;
		if(cameraInstance.pinToObject.parent !== undefined && cameraInstance.pinToObject.parent.depth !== undefined)
		cameraInstance.depth = cameraInstance.pinToObject.parent.depth + cameraInstance.pinToObject.pinOffsetZ;
	}
	stage._applyLayerZDepth(exportRoot);
}
p._applyLayerZDepth = function(parent)
{
	var cameraInstance = parent.___camera___instance;
	var focalLength = 528.25;
	var projectionCenter = { 'x' : 0, 'y' : 0};
	if(parent === exportRoot)
	{
		var stageCenter = { 'x' : lib.properties.width/2, 'y' : lib.properties.height/2 };
		projectionCenter.x = stageCenter.x;
		projectionCenter.y = stageCenter.y;
	}
	for(child in parent.children)
	{
		var layerObj = parent.children[child];
		if(layerObj == cameraInstance)
			continue;
		stage._applyLayerZDepth(layerObj, cameraInstance);
		if(layerObj.layerDepth === undefined)
			continue;
		if(layerObj.currentFrame != layerObj.parent.currentFrame)
		{
			layerObj.gotoAndPlay(layerObj.parent.currentFrame);
		}
		var matToApply = new createjs.Matrix2D;
		var cameraMat = new createjs.Matrix2D;
		var totalDepth = layerObj.layerDepth ? layerObj.layerDepth : 0;
		var cameraDepth = 0;
		if(cameraInstance && !layerObj.isAttachedToCamera)
		{
			var mat = cameraInstance.getMatrix();
			mat.tx -= projectionCenter.x;
			mat.ty -= projectionCenter.y;
			cameraMat = mat.invert();
			cameraMat.prependTransform(projectionCenter.x, projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			cameraMat.appendTransform(-projectionCenter.x, -projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			if(cameraInstance.depth)
				cameraDepth = cameraInstance.depth;
		}
		if(layerObj.depth)
		{
			totalDepth = layerObj.depth;
		}
		//Offset by camera depth
		totalDepth -= cameraDepth;
		if(totalDepth < -focalLength)
		{
			matToApply.a = 0;
			matToApply.d = 0;
		}
		else
		{
			if(layerObj.layerDepth)
			{
				var sizeLockedMat = stage._getProjectionMatrix(parent, layerObj.layerDepth);
				if(sizeLockedMat)
				{
					sizeLockedMat.invert();
					matToApply.prependMatrix(sizeLockedMat);
				}
			}
			matToApply.prependMatrix(cameraMat);
			var projMat = stage._getProjectionMatrix(parent, totalDepth);
			if(projMat)
			{
				matToApply.prependMatrix(projMat);
			}
		}
		layerObj.transformMatrix = matToApply;
	}
}
an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}

// Virtual camera API : 

an.VirtualCamera = new function() {
var _camera = new Object();
function VC(timeline) {
	this.timeline = timeline;
	this.camera = timeline.___camera___instance;
	this.centerX = lib.properties.width / 2;
	this.centerY = lib.properties.height / 2;
	this.camAxisX = this.camera.x;
	this.camAxisY = this.camera.y;
	if(timeline.___camera___instance == null || timeline.___camera___instance == undefined ) {
		timeline.___camera___instance = new cjs.MovieClip();
		timeline.___camera___instance.visible = false;
		timeline.___camera___instance.parent = timeline;
		timeline.___camera___instance.setTransform(this.centerX, this.centerY);
	}
	this.camera = timeline.___camera___instance;
}

VC.prototype.moveBy = function(x, y, z) {
z = typeof z !== 'undefined' ? z : 0;
	var position = this.___getCamPosition___();
	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	this.camAxisX = this.camAxisX - x;
	this.camAxisY = this.camAxisY - y;
	var posX = position.x + offX;
	var posY = position.y + offY;
	this.camera.x = this.centerX - posX;
	this.camera.y = this.centerY - posY;
	this.camera.depth += z;
};

VC.prototype.setPosition = function(x, y, z) {
	z = typeof z !== 'undefined' ? z : 0;

	const MAX_X = 10000;
	const MIN_X = -10000;
	const MAX_Y = 10000;
	const MIN_Y = -10000;
	const MAX_Z = 10000;
	const MIN_Z = -5000;

	if(x > MAX_X)
	  x = MAX_X;
	else if(x < MIN_X)
	  x = MIN_X;
	if(y > MAX_Y)
	  y = MAX_Y;
	else if(y < MIN_Y)
	  y = MIN_Y;
	if(z > MAX_Z)
	  z = MAX_Z;
	else if(z < MIN_Z)
	  z = MIN_Z;

	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	
	this.camAxisX = this.centerX - x;
	this.camAxisY = this.centerY - y;
	this.camera.x = this.centerX - offX;
	this.camera.y = this.centerY - offY;
	this.camera.depth = z;
};

VC.prototype.getPosition = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camAxisX;
	loc['y'] = this.centerY - this.camAxisY;
	loc['z'] = this.camera.depth;
	return loc;
};

VC.prototype.resetPosition = function() {
	this.setPosition(0, 0);
};

VC.prototype.zoomBy = function(zoom) {
	this.setZoom( (this.getZoom() * zoom) / 100);
};

VC.prototype.setZoom = function(zoom) {
	const MAX_zoom = 10000;
	const MIN_zoom = 1;
	if(zoom > MAX_zoom)
	zoom = MAX_zoom;
	else if(zoom < MIN_zoom)
	zoom = MIN_zoom;
	this.camera.scaleX = 100 / zoom;
	this.camera.scaleY = 100 / zoom;
};

VC.prototype.getZoom = function() {
	return 100 / this.camera.scaleX;
};

VC.prototype.resetZoom = function() {
	this.setZoom(100);
};

VC.prototype.rotateBy = function(angle) {
	this.setRotation( this.getRotation() + angle );
};

VC.prototype.setRotation = function(angle) {
	const MAX_angle = 180;
	const MIN_angle = -179;
	if(angle > MAX_angle)
		angle = MAX_angle;
	else if(angle < MIN_angle)
		angle = MIN_angle;
	this.camera.rotation = -angle;
};

VC.prototype.getRotation = function() {
	return -this.camera.rotation;
};

VC.prototype.resetRotation = function() {
	this.setRotation(0);
};

VC.prototype.reset = function() {
	this.resetPosition();
	this.resetZoom();
	this.resetRotation();
	this.unpinCamera();
};
VC.prototype.setZDepth = function(zDepth) {
	const MAX_zDepth = 10000;
	const MIN_zDepth = -5000;
	if(zDepth > MAX_zDepth)
		zDepth = MAX_zDepth;
	else if(zDepth < MIN_zDepth)
		zDepth = MIN_zDepth;
	this.camera.depth = zDepth;
}
VC.prototype.getZDepth = function() {
	return this.camera.depth;
}
VC.prototype.resetZDepth = function() {
	this.camera.depth = 0;
}

VC.prototype.pinCameraToObject = function(obj, offsetX, offsetY, offsetZ) {

	offsetX = typeof offsetX !== 'undefined' ? offsetX : 0;

	offsetY = typeof offsetY !== 'undefined' ? offsetY : 0;

	offsetZ = typeof offsetZ !== 'undefined' ? offsetZ : 0;
	if(obj === undefined)
		return;
	this.camera.pinToObject = obj;
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
};

VC.prototype.setPinOffset = function(offsetX, offsetY, offsetZ) {
	if(this.camera.pinToObject != undefined) {
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
	}
};

VC.prototype.unpinCamera = function() {
	this.camera.pinToObject = undefined;
};
VC.prototype.___getCamPosition___ = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camera.x;
	loc['y'] = this.centerY - this.camera.y;
	loc['z'] = this.depth;
	return loc;
};

this.getCamera = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	if(_camera[timeline] == undefined)
	_camera[timeline] = new VC(timeline);
	return _camera[timeline];
}

this.getCameraAsMovieClip = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	return this.getCamera(timeline).camera;
}
}


// Layer depth API : 

an.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;