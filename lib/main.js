/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var isNumber = require( '@stdlib/assert-is-number' ).isPrimitive;
var incrpcorr = require( '@stdlib/stats-incr-pcorr' );
var format = require( '@stdlib/string-format' );


// MAIN //

/**
* Returns an accumulator function which incrementally computes a sample Pearson product-moment correlation distance.
*
* ## Method
*
* -   The sample Pearson product-moment correlation distance is defined as
*
*     ```tex
*     d = 1 - r = 1 - \frac{\operatorname{cov}_n(x,y)}{\sigma_x \sigma_y}
*     ```
*
* -   The implementation thus computes the sample Pearson product-moment correlation coefficient \\(r\\) and subtracts the coefficient from 1.
*
* @param {number} [meanx] - mean value
* @param {number} [meany] - mean value
* @throws {TypeError} first argument must be a number
* @throws {TypeError} second argument must be a number
* @returns {Function} accumulator function
*
* @example
* var accumulator = incrpcorrdist();
*
* var d = accumulator();
* // returns null
*
* d = accumulator( 2.0, 1.0 );
* // returns 1.0
*
* d = accumulator( -5.0, 3.14 );
* // returns ~2.0
*
* d = accumulator();
* // returns ~2.0
*
* @example
* var accumulator = incrpcorrdist( 2.0, -3.0 );
*/
function incrpcorrdist( meanx, meany ) {
	var pcorr;
	if ( arguments.length ) {
		if ( !isNumber( meanx ) ) {
			throw new TypeError( format( 'invalid argument. First argument must be a number. Value: `%s`.', meanx ) );
		}
		if ( !isNumber( meany ) ) {
			throw new TypeError( format( 'invalid argument. Second argument must be a number. Value: `%s`.', meany ) );
		}
		pcorr = incrpcorr( meanx, meany );
	} else {
		pcorr = incrpcorr();
	}
	return accumulator;

	/**
	* If provided input values, the accumulator function returns an updated sample correlation distance. If not provided input values, the accumulator function returns the current sample correlation distance.
	*
	* @private
	* @param {number} [x] - new value
	* @param {number} [y] - new value
	* @returns {(number|null)} sample correlation distance or null
	*/
	function accumulator( x, y ) {
		var r;
		if ( arguments.length === 0 ) {
			r = pcorr();
			if ( r === null ) {
				return r;
			}
			return 1.0 - r;
		}
		return 1.0 - pcorr( x, y );
	}
}


// EXPORTS //

module.exports = incrpcorrdist;
