export default function Examples({ show, toggle }) {
  return (
    <>
      <aside className={`examples ${show ? "show" : "hide"}`}>
        <h2>📚 the G lang</h2>

        <pre>
📖 the G lang Reference<br /><br />

• <span className="bool">frfr</span> → True<br />
• <span className="bool">cap</span> → False<br />
• <span className="bool">ghosted</span> → None<br /><br />

• <span className="kw">vibe</span> → variable declaration<br />
• <span className="kw">cook</span> → function definition<br />
• <span className="kw">sendBack</span> → return<br /><br />

• <span className="fn">yap()</span> → print<br />
• <span className="fn">yapln()</span> → print (newline emphasis)<br />
• <span className="fn">flex()</span> → debug print<br />
• <span className="fn">spillTea()</span> → error / warning print<br /><br />

• <span className="kw">givingSameVibeAs</span> → ==<br />
• <span className="kw">notTheSameAs</span> → !=<br /><br />

• <span className="kw">imOut</span> → break<br />
• <span className="kw">nahKeepGoing</span> → continue<br /><br />

Code-Z = Python logic + Gen-Z dictionary 😈
        </pre>

        <pre>
<span className="kw">vibe</span> a = <span className="num">10</span><br />
<span className="kw">vibe</span> b = <span className="num">20</span><br /><br />
<span className="fn">yap</span>(a + b)
        </pre>

        <pre>
<span className="kw">lowkeyIf</span> a <span className="kw">givingSameVibeAs</span> b:<br />
&nbsp;&nbsp;&nbsp;&nbsp;<span className="fn">yapln</span>(<span className="str">"same energy frfr"</span>)<br />
<span className="kw">whateverMan</span>:<br />
&nbsp;&nbsp;&nbsp;&nbsp;<span className="fn">spillTea</span>(<span className="str">"nah bruh"</span>)
        </pre>

        <pre>
<span className="cm"># For loop (keepLoopingTill)</span><br /><br />
<span className="kw">keepLoopingTill</span> i in range(<span className="num">5</span>):<br />
&nbsp;&nbsp;&nbsp;&nbsp;<span className="fn">yap</span>(i)
        </pre>

        <pre>
<span className="cm"># While loop + break (stillStuckIn + imOut)</span><br /><br />
<span className="kw">vibe</span> count = <span className="num">0</span><br /><br />
<span className="kw">stillStuckIn</span> <span className="bool">frfr</span>:<br />
&nbsp;&nbsp;&nbsp;&nbsp;<span className="fn">flex</span>(count)<br />
&nbsp;&nbsp;&nbsp;&nbsp;count = count + <span className="num">1</span><br /><br />
&nbsp;&nbsp;&nbsp;&nbsp;<span className="kw">lowkeyIf</span> count <span className="kw">givingSameVibeAs</span> <span className="num">4</span>:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kw">imOut</span>
        </pre>

        <pre>
<span className="cm"># Function definition (cook)</span><br /><br />
<span className="kw">cook</span> add(a, b):<br />
&nbsp;&nbsp;&nbsp;&nbsp;<span className="kw">sendBack</span> a + b<br /><br />
<span className="kw">vibe</span> result = add(<span className="num">4</span>, <span className="num">6</span>)<br /><br />
<span className="kw">lowkeyIf</span> result <span className="kw">givingSameVibeAs</span> <span className="num">10</span>:<br />
&nbsp;&nbsp;&nbsp;&nbsp;<span className="fn">yapln</span>(<span className="str">"math still works frfr"</span>)
        </pre>
        <pre>
<span className="cm"># Arrays (pullUp + helpers)</span><br /><br />

<span className="kw">vibe</span> nums = <span className="fn">pullUp</span>([<span className="num">10</span>, <span className="num">20</span>, <span className="num">30</span>, <span className="num">40</span>, <span className="num">50</span>])<br /><br />

<span className="fn">yap</span>(<span className="str">"min:"</span>, min(nums))<br />
<span className="fn">yap</span>(<span className="str">"max:"</span>, Max(nums))<br />
<span className="fn">yap</span>(<span className="str">"sum:"</span>, sum(nums))<br />
<span className="fn">yap</span>(<span className="str">"avg:"</span>, avg(nums))<br />
<span className="fn">yap</span>(<span className="str">"mid:"</span>, mid(nums))<br />
<span className="fn">yap</span>(<span className="str">"rev:"</span>, rev(nums))
</pre>

      </aside>

      {/* TOGGLE BUTTON – ALWAYS VISIBLE */}
      <button
        className="examples-toggle"
        onClick={toggle}
        aria-label="Toggle examples panel"
      >
        {show ? "❮" : "❯"}
      </button>
    </>
  );
}
