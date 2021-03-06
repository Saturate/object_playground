// Copyright (c) 2013 Titanium I.T. LLC. All rights reserved. See LICENSE.TXT for details.
(function() {
	"use strict";

	describe("user code", function() {
		var evaluate;
		var samples;

		beforeEach(function() {
			evaluate = jdls.usercode.evaluate;
			samples = jdls.usercode.samples;
		});

		it("evaluates to an object", function() {
			var code = "" +
				"this.foo = {" +
				"  a: 1," +
				"  b: 2" +
				"}";

			expect(evaluate(code)).to.eql({
				foo: {
					a: 1,
					b: 2
				}
			});
		});

		describe("sample", function() {
			function check(sample) {
				evaluate(sample.code);
				// check fails if evaluate() throws exception
			}

			it("classical compiles", function() {
				check(samples.classical);
			});

			it("inception compiles", function() {
				check(samples.inception);
			});
		});

	});

}());