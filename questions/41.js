/*

<div data-purpose="safely-set-inner-html:rich-text-viewer:html" class="instructions--description--2Qd_w"><p>Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called <b>countZeroes</b>, which returns the number of zeroes in the array.</p>

<div class="ud-component--base-components--code-block"><div><pre class="prettyprint linenums prettyprinted" role="presentation" style=""><ol class="linenums">
<li class="L0"><span class="pln">countZeroes</span><span class="pun">([</span><span class="lit">1</span><span class="pun">,</span><span class="lit">1</span><span class="pun">,</span><span class="lit">1</span><span class="pun">,</span><span class="lit">1</span><span class="pun">,</span><span class="lit">0</span><span class="pun">,</span><span class="lit">0</span><span class="pun">])</span><span class="pln"> </span><span class="com">// 2</span></li>
<li class="L1"><span class="pln">countZeroes</span><span class="pun">([</span><span class="lit">1</span><span class="pun">,</span><span class="lit">0</span><span class="pun">,</span><span class="lit">0</span><span class="pun">,</span><span class="lit">0</span><span class="pun">,</span><span class="lit">0</span><span class="pun">])</span><span class="pln"> </span><span class="com">// 4</span></li>
<li class="L2"><span class="pln">countZeroes</span><span class="pun">([</span><span class="lit">0</span><span class="pun">,</span><span class="lit">0</span><span class="pun">,</span><span class="lit">0</span><span class="pun">])</span><span class="pln"> </span><span class="com">// 3</span></li>
<li class="L3"><span class="pln">countZeroes</span><span class="pun">([</span><span class="lit">1</span><span class="pun">,</span><span class="lit">1</span><span class="pun">,</span><span class="lit">1</span><span class="pun">,</span><span class="lit">1</span><span class="pun">])</span><span class="pln"> </span><span class="com">// 0</span></li></ol></pre></div></div>





<p>Time Complexity - <b>O(log n) </b></p></div>

[1, 1, 1 ,1 , 0]
0   1  2   3   4
           l
*/


function countZeroes(arr) {
    let right = arr.length - 1
    let left = 0;

    if (arr[left] === 0) {
        while (right >= left) {
            let middle = Math.floor((right - left) / 2) + left
            if (arr[middle] === 1 && arr[middle + 1] === 0) {
                // succes condition
                return arr.length - middle - 1
            }
            if (arr[middle] === 0) {
                right = middle - 1
            } else {
                left = middle + 1
            }
        }
        return 0
    }
}