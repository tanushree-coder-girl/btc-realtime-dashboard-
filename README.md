<h1 align="center">Real-Time Bitcoin (BTC/USDT) Dashboard</h1>

<p align="center">
A real-time Bitcoin dashboard built using Next.js, WebSockets, and TradingView.
</p>

<hr/>

<h2>Overview</h2>

<p>
This project implements a real-time Bitcoin (BTC/USDT) dashboard using the ByBit WebSocket API.
The application streams live market data and displays it through a responsive interface with light
and dark theme support.
</p>

<hr/>

<h2>Application Preview</h2>

<p align="center">
<img src="public/BTC-Dashboard-RealTime.png" alt="BTC Dashboard Screenshot" width="100%" />
</p>

<hr />

<h2>Features</h2>

<h3>Real-Time Market Data</h3>
<ul>
<li>Live BTC/USDT price updates using the ByBit WebSocket API</li>
<li>Displays the following metrics:</li>
<ul>
<li>Last traded price</li>
<li>Mark price</li>
<li>24h high</li>
<li>24h low</li>
<li>24h turnover</li>
<li>24h percent change</li>
</ul>
</ul>

<h3>Dynamic Price Indicators</h3>
<ul>
<li>Price increase highlighted in green</li>
<li>Price decrease highlighted in red</li>
</ul>

<h3>TradingView Chart Integration</h3>
<ul>
<li>Embedded TradingView Advanced Chart widget</li>
<li>Displays BTC/USDT market data</li>
<li>Supports both light and dark themes</li>
</ul>

<h3>Light and Dark Mode</h3>
<ul>
<li>Theme toggle implemented</li>
<li>Theme applied across the entire dashboard including chart and UI components</li>
</ul>

<h3>Additional Features</h3>
<ul>
<li>Sparkline chart showing the last 60 seconds of BTC price movement</li>
<li>WebSocket connection status indicator</li>
<li>Automatic reconnection when the WebSocket connection drops</li>
</ul>

<hr/>

<h2>Technology Stack</h2>

<ul>
<li>Next.js (App Router)</li>
<li>React</li>
<li>TypeScript</li>
<li>ByBit WebSocket API</li>
<li>TradingView Advanced Chart Widget</li>
<li>Tailwind CSS</li>
</ul>

<hr/>

<h2>WebSocket Integration</h2>

<p>WebSocket Endpoint:</p>

<pre>
wss://stream.bybit.com/v5/public/linear
</pre>

<p>Subscription Topic:</p>

<pre>
tickers.BTCUSDT
</pre>

<p>
The application listens for snapshot and delta messages to maintain an updated state of the BTC ticker data.
</p>

<hr/>

<h2>Project Structure</h2>

<pre>
app/
 ├─ favicon.ico
 ├─ globals.css
 ├─ layout.tsx
 └─ page.tsx

components/
 ├─ BTCHeaderStats.tsx
 ├─ BTCStatCard.tsx
 ├─ BTCSparkline.tsx
 ├─ ConnectionStatus.tsx
 ├─ TradingViewChart.tsx
 ├─ ThemeProvider.tsx
 └─ ThemeToggle.tsx

hooks/
 └─ useBTCWebSocket.ts

types/
 └─ btc.ts
</pre>

<hr/>

<h2>Performance and Code Quality</h2>

<ul>
<li>Clean component-based architecture</li>
<li>Reusable UI components</li>
<li>TypeScript type safety</li>
<li>WebSocket reconnection handling</li>
<li>Error handling for incoming messages</li>
<li>Optimized state updates</li>
</ul>

<hr/>

<h2>Responsive Design</h2>

<p>
The dashboard follows a mobile-first approach and is responsive across different screen sizes:
</p>

<ul>
<li>Mobile</li>
<li>Tablet</li>
<li>Desktop</li>
</ul>

<hr/>

<h2>Installation</h2>

<p>Clone the repository:</p>

<pre>
git clone https://github.com/tanushree-coder-girl/btc-realtime-dashboard-
</pre>

<p>Install dependencies:</p>

<pre>
npm install
</pre>

<p>Run the development server:</p>

<pre>
npm run dev
</pre>

<p>Open the application:</p>

<pre>
http://localhost:3000
</pre>

<hr/>

<h2>Estimated Time Spent</h2>

<p>
Approximately 6–8 hours were spent on implementing the dashboard including WebSocket integration,
UI development, TradingView chart integration, theme support, and additional features.
</p>

<hr/>

<h2>Notes</h2>

<p>
This project was developed as part of a technical assignment and follows the specified requirements
including real-time WebSocket data streaming, dynamic UI updates, TradingView chart integration,
theme support, and additional features such as sparkline visualization and connection monitoring.
</p>