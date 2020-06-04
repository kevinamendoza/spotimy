(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{11:function(e,t,a){e.exports=a(19)},16:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(9),i=a.n(s),c=(a(16),a(7)),l=a.n(c),o=a(1),u=a(2),p=a(4),h=a(3),m=a(6),d=a(5),f=a(10),b=a.n(f),v=(a(18),new b.a),y=function(e){function t(){var e;Object(o.a)(this,t);var a=(e=Object(p.a)(this,Object(h.a)(t).call(this))).getHashParams().access_token;return a&&v.setAccessToken(a),e.state={loggedIn:!!a,header:"Recently Played",view:"",currentAlbum:null,currentAritst:null,currentPlaylist:null,currentSearchTerm:"",currentTop:"medium_term",currentTopTime:"6 Months",currentUser:null},e.getCurrentUser(),e.handleHeaderChange=e.handleHeaderChange.bind(Object(m.a)(e)),e.handlePlaylistChange=e.handlePlaylistChange.bind(Object(m.a)(e)),e.handleArtistChange=e.handleArtistChange.bind(Object(m.a)(e)),e.handleTopChange=e.handleTopChange.bind(Object(m.a)(e)),e.handleSearchChange=e.handleSearchChange.bind(Object(m.a)(e)),e}return Object(d.a)(t,e),Object(u.a)(t,[{key:"getHashParams",value:function(){var e,t={},a=/([^&;=]+)=?([^&;]*)/g,n=window.location.hash.substring(1);for(e=a.exec(n);e;)t[e[1]]=decodeURIComponent(e[2]),e=a.exec(n);return t}},{key:"getCurrentUser",value:function(){var e=this;v.getMe().then((function(t){e.setState({currentUser:t})}))}},{key:"handleHeaderChange",value:function(e){this.setState({header:e,view:"",currentPlaylist:null})}},{key:"handlePlaylistChange",value:function(e){this.setState({header:e.name,view:"playlist",currentPlaylist:e})}},{key:"handleArtistChange",value:function(e){this.setState({header:e.name,view:"Artist",currentAritst:e})}},{key:"handleTopChange",value:function(e){this.setState({currentTop:e,view:"top",currentTopTime:{short_term:"4 Weeks",medium_term:"6 Months",long_term:"All Time"}[e]})}},{key:"handleSearchChange",value:function(e){this.setState({header:"Search Results",view:"results",currentSearchTerm:e})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"app-container"},!this.state.loggedIn&&r.a.createElement(g,null),this.state.loggedIn&&null!==this.state.currentUser&&r.a.createElement("div",null,r.a.createElement("div",{className:"left-side-section"},r.a.createElement(S,{header:this.state.header,onHeaderChange:this.handleHeaderChange}),r.a.createElement(E,{user:this.state.currentUser,onPlaylistChange:this.handlePlaylistChange})),r.a.createElement("div",{className:"main-section"},r.a.createElement("div",{className:"header"},r.a.createElement(j,{onSearchChange:this.handleSearchChange}),r.a.createElement(O,{currentUser:this.state.currentUser})),r.a.createElement("div",{className:"main-section-container"},r.a.createElement(T,{appState:this.state,onTopChange:this.handleTopChange}),r.a.createElement(k,{appState:this.state}))))))}}]),t}(n.Component),g=function(e){function t(){return Object(o.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"generateRandomString",value:function(e){for(var t="",a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=0;n<e;n++)t+=a.charAt(Math.floor(Math.random()*a.length));return t}},{key:"render",value:function(){var e=this.generateRandomString(16),t="https://accounts.spotify.com/authorize";return t+="?response_type=token",t+="&client_id="+encodeURIComponent("e9a2306dd16a41838ce9cd3eb8cd72c5"),t+="&scope="+encodeURIComponent("user-read-private playlist-read-private playlist-read-collaborative user-library-read user-top-read user-read-recently-played user-follow-read"),t+="&redirect_uri="+encodeURIComponent("http://localhost:3000/"),t+="&state="+encodeURIComponent(e),r.a.createElement("a",{className:"centered login-btn",href:t},"Login to Spotify")}}]),t}(n.Component),S=function(e){function t(){return Object(o.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"renderSideMenu",value:function(){var e=this;return["Recently Played","Songs","Albums","Artists","Top"].map((function(t){return r.a.createElement("li",{key:t,className:e.props.header===t?"active side-menu-item":"side-menu-item",onClick:function(){return e.props.onHeaderChange(t)}},t)}))}},{key:"render",value:function(){return r.a.createElement("ul",{className:"side-menu-container"},r.a.createElement("h3",{className:"user-library-header"},"Your Library"),this.renderSideMenu())}}]),t}(n.Component),E=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={userPlaylists:[]},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.renderPlaylists().then((function(t){return e.setState({userPlaylists:t})}))}},{key:"renderPlaylists",value:function(){var e,t=this;return l.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e=function(e){return t.props.onPlaylistChange(e)},a.abrupt("return",v.getUserPlaylists(this.props.user.id,{limit:50}).then((function(t){return t.items.map((function(t){return r.a.createElement("li",{key:t.name,className:"side-menu-item",onClick:function(){return e(t)}},t.name)}))})).catch((function(e){console.error(e)})));case 2:case"end":return a.stop()}}),null,this)}},{key:"render",value:function(){return r.a.createElement("div",{className:"user-playlist-container"},r.a.createElement("h3",{className:"user-playlist-header"},"Playlists"),this.state.userPlaylists)}}]),t}(n.Component),j=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={searchTerm:""},a.updateSearchTerm=a.updateSearchTerm.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"updateSearchTerm",value:function(e){this.setState({searchTerm:e.target.value})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"track-search-container"},r.a.createElement("form",{onSubmit:function(){e.props.onSearchChange(e.state.searchTerm)}},r.a.createElement("input",{onChange:this.updateSearchTerm,type:"text",placeholder:"Search"})))}}]),t}(n.Component),O=function(e){function t(){return Object(o.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"user-details-container"},r.a.createElement("img",{className:"user-image",src:this.props.currentUser.images[0].url,alt:this.props.currentUser.display_name}),r.a.createElement("p",{className:"user-name"},this.props.currentUser.display_name))}}]),t}(n.Component),T=function(e){function t(){return Object(o.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.appState.header,t=this.props.appState.view,a=this.props.appState.currentAritst,n=this.props.appState.currentPlaylist,s=this.props.appState.currentTop,i=this.props.appState.currentTopTime;return r.a.createElement("div",{className:"section-title"},"playlist"===t&&r.a.createElement("div",{className:"playlist-title-container"},r.a.createElement("div",{className:"playlist-image-container"},r.a.createElement("img",{className:"playlist-image",src:n.images[0]?n.images[0].url:null,alt:n.name})),r.a.createElement("div",{className:"playlist-info-container"},r.a.createElement("p",{className:"playlist-text"},"PLAYLIST"),r.a.createElement("h3",{className:"header-title"},e),r.a.createElement("p",{className:"created-by"},"Created by ",r.a.createElement("span",{className:"lighter-text"},n.owner.display_name)," - ",n.tracks.total," songs"))),"Artist"===t&&a&&r.a.createElement("div",null,r.a.createElement("div",{className:"current-artist-header-container"},r.a.createElement("img",{className:"current-artist-image",src:a.images[0].url,alt:a.name}),r.a.createElement("div",{className:"current-artist-info"},r.a.createElement("p",null,"Artist from your library"),r.a.createElement("h3",null,a.name)))),("Top"===e||"Songs"===e||"Recently Played"===e||"Albums"===e||"Artists"===e||"Search Results"===e)&&r.a.createElement("div",{style:{display:"flex"}},r.a.createElement("h3",{className:"header-title"},e),"Top"===e&&r.a.createElement(C,{currentTop:s,currentTopTime:i,onTopChange:this.props.onTopChange})))}}]),t}(n.Component),k=function(e){function t(){return Object(o.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,"Top"===this.props.appState.header&&r.a.createElement(N,{appState:this.props.appState}),"Artists"===this.props.appState.header&&r.a.createElement(w,{appState:this.props.appState}),"Albums"===this.props.appState.header&&r.a.createElement(A,null),("Recently Played"===this.props.appState.header||"Songs"===this.props.appState.header||"Search Results"===this.props.appState.header||"playlist"===this.props.appState.view)&&r.a.createElement(P,{appState:this.props.appState}))}}]),t}(n.Component),C=function(e){function t(){return Object(o.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props.currentTop;return r.a.createElement("div",null,r.a.createElement("select",{onChange:function(t){return e.props.onTopChange(t.target.value)}},r.a.createElement("option",{hidden:!0},this.props.currentTopTime),"short_term"!==t&&r.a.createElement("option",{value:"short_term"},"4 Weeks"),"medium_term"!==t&&r.a.createElement("option",{value:"medium_term"},"6 Months"),"long_term"!==t&&r.a.createElement("option",{value:"long_term"},"All Time")))}}]),t}(n.Component),N=function(e){function t(){return Object(o.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(w,{appState:this.props.appState}),r.a.createElement(P,{appState:this.props.appState}))}}]),t}(n.Component),A=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={userAlbums:[]},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.renderAlbums().then((function(t){return e.setState({userAlbums:t})}))}},{key:"renderAlbums",value:function(){return l.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",v.getMySavedAlbums({limit:50}).then((function(e){return e.items.map((function(e){return r.a.createElement("li",{key:e.album.id,className:"album-item",onClick:function(){}},r.a.createElement("div",{className:"album-image"},r.a.createElement("img",{src:e.album.images[0].url,alt:e.album.name})),r.a.createElement("div",{className:"album-details"},r.a.createElement("p",{className:"album-name"},e.album.name),r.a.createElement("p",{className:"artist-name"},e.album.artists[0].name)))}))})).catch((function(e){console.error(e)})));case 1:case"end":return e.stop()}}))}},{key:"render",value:function(){return r.a.createElement("ul",{className:"album-view-container"},this.state.userAlbums)}}]),t}(n.Component),w=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={artists:[],visible:!0},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.renderArtists().then((function(t){return e.setState({artists:t})}))}},{key:"componentDidUpdate",value:function(){var e=this;this.state.visible&&("Top"===this.props.appState.header&&this.state.currentTop!==this.props.appState.currentTop||this.props.appState.header!==this.state.header)&&this.renderArtists().then((function(t){e.setState({header:e.props.appState.header,currentTop:e.props.appState.currentTop,artists:t})}))}},{key:"componentWillUnmount",value:function(){this.setState({visible:!1})}},{key:"renderArtists",value:function(){var e;return l.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:e=this.artistList,t.t0=this.props.appState.header,t.next="Top"===t.t0?4:"Artists"===t.t0?5:6;break;case 4:return t.abrupt("return",v.getMyTopArtists({limit:50,time_range:this.props.appState.currentTop}).then((function(t){return e(t.items)})).catch((function(e){return console.error(e),[]})));case 5:return t.abrupt("return",v.getFollowedArtists({limit:50}).then((function(t){return e(t.artists.items)})).catch((function(e){return console.error(e),[]})));case 6:return t.abrupt("return",v.getArtistRelatedArtists(this.props.appState.currentAritst.id,{limit:5}).then((function(t){return e(t.artists)})).catch((function(e){return console.error(e),[]})));case 7:case"end":return t.stop()}}),null,this)}},{key:"artistList",value:function(e){return e.map((function(e){return r.a.createElement("li",{key:e.id,className:"artist-item",onClick:function(){}},r.a.createElement("div",{className:"artist-image"},r.a.createElement("img",{src:e.images[0]?e.images[0].url:"",alt:e.name})),r.a.createElement("div",{className:"artist-details"},r.a.createElement("p",null,e.name)))}))}},{key:"render",value:function(){return r.a.createElement("ul",{className:"artist-view-container"},this.state.artists)}}]),t}(n.Component),P=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={songs:[],visible:!0},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.renderSongs().then((function(t){e.setState({header:e.props.appState.header,currentTop:"",currentSearchTerm:"",songs:t,visible:!0})}))}},{key:"componentDidUpdate",value:function(){var e=this;this.state.visible&&("Top"===this.props.appState.header&&this.state.currentTop!==this.props.appState.currentTop||"Search Results"===this.props.appState.header&&this.state.currentSearchTerm!==this.props.appState.currentSearchTerm||this.props.appState.header!==this.state.header)&&this.renderSongs().then((function(t){e.setState({header:e.props.appState.header,currentTop:e.props.appState.currentTop,currentSearchTerm:e.props.appState.currentSearchTerm,songs:t})}))}},{key:"componentWillUnmount",value:function(){this.setState({visible:!1})}},{key:"renderSongs",value:function(){var e,t,a,n,r=this;return l.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:e=this.props.appState.currentUser,t=this.props.appState.currentPlaylist,a=this.props.appState.currentSearchTerm,n=function(e){return r.songList(e)},s.t0=this.props.appState.header,s.next="Top"===s.t0?7:"Recently Played"===s.t0?8:"Songs"===s.t0?9:"Search Results"===s.t0?10:11;break;case 7:return s.abrupt("return",v.getMyTopTracks({limit:50,time_range:this.props.appState.currentTop}).then((function(e){return n(e.items)})).catch((function(e){return console.error(e),[]})));case 8:return s.abrupt("return",v.getMyRecentlyPlayedTracks({limit:50}).then((function(e){return n(e.items)})).catch((function(e){return console.error(e),[]})));case 9:return s.abrupt("return",v.getMySavedTracks({limit:50}).then((function(e){return n(e.items)})).catch((function(e){return console.error(e),[]})));case 10:return s.abrupt("return",v.searchTracks(a,{limit:25}).then((function(e){return n(e.tracks.items)})));case 11:if("playlist"!==this.props.appState.view){s.next=13;break}return s.abrupt("return",v.getPlaylistTracks(e.id,t.id).then((function(e){return n(e.items)})).catch((function(e){return console.error(e),[]})));case 13:case"end":return s.stop()}}),null,this)}},{key:"songList",value:function(e){var t="Top"===this.props.appState.header||"Search Results"===this.props.appState.header?function(e){return e}:function(e){return e.track};return e.map((function(e,a){return r.a.createElement("li",{key:a,className:"user-song-item",onClick:function(){return function(e){v.getAudioFeaturesForTrack(t(e).id).then((function(a){console.log(t(e).name+" by "+t(e).artists[0].name),console.table(a)})).catch((function(e){console.error(e)}))}(e)}},r.a.createElement("div",{className:"song-title"},r.a.createElement("p",null,t(e).name)),r.a.createElement("div",{className:"song-artist"},r.a.createElement("p",null,t(e).artists[0].name)),r.a.createElement("div",{className:"song-album"},r.a.createElement("p",null,t(e).album.name)),r.a.createElement("div",{className:"song-length"},r.a.createElement("p",null,function(e){var t=Math.floor(e/6e4),a=(e%6e4/1e3).toFixed(0);return t+":"+(a<10?"0":"")+a}(t(e).duration_ms))))}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"song-header-container"},r.a.createElement("div",{className:"song-title-header"},r.a.createElement("p",null,"Title")),r.a.createElement("div",{className:"song-artist-header"},r.a.createElement("p",null,"Aritst")),r.a.createElement("div",{className:"song-album-header"},r.a.createElement("p",null,"Album")),r.a.createElement("div",{className:"song-length-header"},r.a.createElement("p",null,"Length"))),this.state.songs)}}]),t}(n.Component),U=y;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[11,1,2]]]);
//# sourceMappingURL=main.bf5e2f0b.chunk.js.map