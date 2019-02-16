// We need to import the CSS so that webpack will load it.
// The MiniCssExtractPlugin is used to separate it out into
// its own CSS file.
import '../vendor/css/font-awesome.min.css'
import '../vendor/css/phoenix.css'
import "../css/app.css"

// import '../vendor/js/jquery-3.2.1.min.js'
// import '../vendor/js/bootstrap.min.js'

// webpack automatically bundles all modules in your
// entry points. Those entry points can be configured
// in "webpack.config.js".
//
// Import dependencies
//
import "phoenix_html"

// Import local files
//
// Local files can be imported directly using relative paths, for example:
// import socket from "./socket"
