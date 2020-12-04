(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{11:function(e,t,a){e.exports=a(19)},16:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(9),i=a.n(s),c=(a(16),a(6)),l=a.n(c),o=a(7),u=a(1),p=a(2),m=a(5),h=a(4),d=a(3),v=a(10),f=a.n(v),b=(a(18),new f.a),y=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);var r=(e=t.call(this)).getHashParams().access_token;return r&&b.setAccessToken(r),e.state={loggedIn:!!r,header:"Recently Played",view:"",currentAlbum:null,currentAritst:null,currentPlaylist:null,currentSearchTerm:"",currentTop:"medium_term",currentTopTime:"6 Months",currentUser:null},e.getCurrentUser(),e.handleHeaderChange=e.handleHeaderChange.bind(Object(m.a)(e)),e.handlePlaylistChange=e.handlePlaylistChange.bind(Object(m.a)(e)),e.handleArtistChange=e.handleArtistChange.bind(Object(m.a)(e)),e.handleTopChange=e.handleTopChange.bind(Object(m.a)(e)),e.handleSearchChange=e.handleSearchChange.bind(Object(m.a)(e)),e}return Object(p.a)(a,[{key:"getHashParams",value:function(){var e,t={},a=/([^&;=]+)=?([^&;]*)/g,r=window.location.hash.substring(1);for(e=a.exec(r);e;)t[e[1]]=decodeURIComponent(e[2]),e=a.exec(r);return t}},{key:"getCurrentUser",value:function(){var e=this;b.getMe().then((function(t){e.setState({currentUser:t})}))}},{key:"handleHeaderChange",value:function(e){this.setState({header:e,view:"",currentPlaylist:null})}},{key:"handlePlaylistChange",value:function(e){this.setState({header:e.name,view:"playlist",currentPlaylist:e})}},{key:"handleArtistChange",value:function(e){this.setState({header:e.name,view:"Artist",currentAritst:e})}},{key:"handleTopChange",value:function(e){this.setState({currentTop:e,view:"top",currentTopTime:{short_term:"4 Weeks",medium_term:"6 Months",long_term:"All Time"}[e]})}},{key:"handleSearchChange",value:function(e){this.setState({header:"Search Results",view:"results",currentSearchTerm:e})}},{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"app-container"},!this.state.loggedIn&&n.a.createElement(g,null),this.state.loggedIn&&null!==this.state.currentUser&&n.a.createElement("div",null,n.a.createElement("div",{className:"left-side-section"},n.a.createElement(S,{header:this.state.header,onHeaderChange:this.handleHeaderChange}),n.a.createElement(E,{user:this.state.currentUser,onPlaylistChange:this.handlePlaylistChange})),n.a.createElement("div",{className:"main-section"},n.a.createElement("div",{className:"header"},n.a.createElement(k,{onSearchChange:this.handleSearchChange}),n.a.createElement(T,{currentUser:this.state.currentUser})),n.a.createElement("div",{className:"main-section-container"},n.a.createElement(j,{appState:this.state,onTopChange:this.handleTopChange}),n.a.createElement(O,{appState:this.state}))))))}}]),a}(r.Component),g=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"generateRandomString",value:function(e){for(var t="",a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=0;r<e;r++)t+=a.charAt(Math.floor(Math.random()*a.length));return t}},{key:"render",value:function(){var e=this.generateRandomString(16),t="https://accounts.spotify.com/authorize";return t+="?response_type=token",t+="&client_id="+encodeURIComponent("e9a2306dd16a41838ce9cd3eb8cd72c5"),t+="&scope="+encodeURIComponent("user-read-private playlist-read-private playlist-read-collaborative user-library-read user-top-read user-read-recently-played user-follow-read"),t+="&redirect_uri="+encodeURIComponent("https://mendozatudares.github.io/spotimy/"),t+="&state="+encodeURIComponent(e),n.a.createElement("a",{className:"centered login-btn",href:t},"Login to Spotify")}}]),a}(r.Component),S=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"renderSideMenu",value:function(){var e=this;return["Recently Played","Songs","Albums","Artists","Top"].map((function(t){return n.a.createElement("li",{key:t,className:e.props.header===t?"active side-menu-item":"side-menu-item",onClick:function(){return e.props.onHeaderChange(t)}},t)}))}},{key:"render",value:function(){return n.a.createElement("ul",{className:"side-menu-container"},n.a.createElement("h3",{className:"user-library-header"},"Your Library"),this.renderSideMenu())}}]),a}(r.Component),E=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var r;return Object(u.a)(this,a),(r=t.call(this,e)).state={userPlaylists:[]},r}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.renderPlaylists().then((function(t){return e.setState({userPlaylists:t})}))}},{key:"renderPlaylists",value:function(){var e=Object(o.a)(l.a.mark((function e(){var t,a=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=function(e){return a.props.onPlaylistChange(e)},e.abrupt("return",b.getUserPlaylists(this.props.user.id,{limit:50}).then((function(e){return e.items.map((function(e){return n.a.createElement("li",{key:e.name,className:"side-menu-item",onClick:function(){return t(e)}},e.name)}))})).catch((function(e){console.error(e)})));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return n.a.createElement("div",{className:"user-playlist-container"},n.a.createElement("h3",{className:"user-playlist-header"},"Playlists"),this.state.userPlaylists)}}]),a}(r.Component),k=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var r;return Object(u.a)(this,a),(r=t.call(this,e)).state={searchTerm:""},r.updateSearchTerm=r.updateSearchTerm.bind(Object(m.a)(r)),r}return Object(p.a)(a,[{key:"updateSearchTerm",value:function(e){this.setState({searchTerm:e.target.value})}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"track-search-container"},n.a.createElement("form",{onSubmit:function(){e.props.onSearchChange(e.state.searchTerm)}},n.a.createElement("input",{onChange:this.updateSearchTerm,type:"text",placeholder:"Search"})))}}]),a}(r.Component),T=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"user-details-container"},n.a.createElement("img",{className:"user-image",src:this.props.currentUser.images[0].url,alt:this.props.currentUser.display_name}),n.a.createElement("p",{className:"user-name"},this.props.currentUser.display_name))}}]),a}(r.Component),j=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=this.props.appState.header,t=this.props.appState.view,a=this.props.appState.currentAritst,r=this.props.appState.currentPlaylist,s=this.props.appState.currentTop,i=this.props.appState.currentTopTime;return n.a.createElement("div",{className:"section-title"},"playlist"===t&&n.a.createElement("div",{className:"playlist-title-container"},n.a.createElement("div",{className:"playlist-image-container"},n.a.createElement("img",{className:"playlist-image",src:r.images[0]?r.images[0].url:null,alt:r.name})),n.a.createElement("div",{className:"playlist-info-container"},n.a.createElement("p",{className:"playlist-text"},"PLAYLIST"),n.a.createElement("h3",{className:"header-title"},e),n.a.createElement("p",{className:"created-by"},"Created by ",n.a.createElement("span",{className:"lighter-text"},r.owner.display_name)," - ",r.tracks.total," songs"))),"artist"===t&&a&&n.a.createElement("div",null,n.a.createElement("div",{className:"current-artist-header-container"},n.a.createElement("img",{className:"current-artist-image",src:a.images[0].url,alt:a.name}),n.a.createElement("div",{className:"current-artist-info"},n.a.createElement("p",null,"Artist"),n.a.createElement("h3",null,a.name)))),("Top"===e||"Songs"===e||"Recently Played"===e||"Albums"===e||"Artists"===e||"Search Results"===e)&&n.a.createElement("div",{style:{display:"flex"}},n.a.createElement("h3",{className:"header-title"},e),"Top"===e&&n.a.createElement(C,{currentTop:s,currentTopTime:i,onTopChange:this.props.onTopChange})))}}]),a}(r.Component),O=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,"Top"===this.props.appState.header&&n.a.createElement(N,{appState:this.props.appState}),"Artists"===this.props.appState.header&&n.a.createElement(w,{appState:this.props.appState}),"Albums"===this.props.appState.header&&n.a.createElement(A,null),("Recently Played"===this.props.appState.header||"Songs"===this.props.appState.header||"Search Results"===this.props.appState.header||"playlist"===this.props.appState.view)&&n.a.createElement(P,{appState:this.props.appState}))}}]),a}(r.Component),C=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=this,t=this.props.currentTop;return n.a.createElement("div",null,n.a.createElement("select",{onChange:function(t){return e.props.onTopChange(t.target.value)}},n.a.createElement("option",{hidden:!0},this.props.currentTopTime),"short_term"!==t&&n.a.createElement("option",{value:"short_term"},"4 Weeks"),"medium_term"!==t&&n.a.createElement("option",{value:"medium_term"},"6 Months"),"long_term"!==t&&n.a.createElement("option",{value:"long_term"},"All Time")))}}]),a}(r.Component),N=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(w,{appState:this.props.appState}),n.a.createElement(P,{appState:this.props.appState}))}}]),a}(r.Component),A=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var r;return Object(u.a)(this,a),(r=t.call(this,e)).state={userAlbums:[]},r}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.renderAlbums().then((function(t){return e.setState({userAlbums:t})}))}},{key:"renderAlbums",value:function(){var e=Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",b.getMySavedAlbums({limit:50}).then((function(e){return e.items.map((function(e){return n.a.createElement("li",{key:e.album.id,className:"album-item",onClick:function(){}},n.a.createElement("div",{className:"album-image"},n.a.createElement("img",{src:e.album.images[0].url,alt:e.album.name})),n.a.createElement("div",{className:"album-details"},n.a.createElement("p",{className:"album-name"},e.album.name),n.a.createElement("p",{className:"artist-name"},e.album.artists[0].name)))}))})).catch((function(e){console.error(e)})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return n.a.createElement("ul",{className:"album-view-container"},this.state.userAlbums)}}]),a}(r.Component),w=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var r;return Object(u.a)(this,a),(r=t.call(this,e)).state={artists:[]},r.visible=!1,r}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.renderArtists().then((function(t){return e.setState({artists:t})})),this.visible=!0}},{key:"componentDidUpdate",value:function(){var e=this;this.visible&&("Top"===this.props.appState.header&&this.state.currentTop!==this.props.appState.currentTop||this.props.appState.header!==this.state.header)&&this.renderArtists().then((function(t){e.setState({header:e.props.appState.header,currentTop:e.props.appState.currentTop,artists:t})}))}},{key:"componentWillUnmount",value:function(){this.visible=!1}},{key:"renderArtists",value:function(){var e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.artistList,e.t0=this.props.appState.header,e.next="Top"===e.t0?4:"Artists"===e.t0?5:6;break;case 4:return e.abrupt("return",b.getMyTopArtists({limit:50,time_range:this.props.appState.currentTop}).then((function(e){return t(e.items)})).catch((function(e){return console.error(e),[]})));case 5:return e.abrupt("return",b.getFollowedArtists({limit:50}).then((function(e){return t(e.artists.items)})).catch((function(e){return console.error(e),[]})));case 6:return e.abrupt("return",b.getArtistRelatedArtists(this.props.appState.currentAritst.id,{limit:5}).then((function(e){return t(e.artists)})).catch((function(e){return console.error(e),[]})));case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"artistList",value:function(e){return e.map((function(e){return n.a.createElement("li",{key:e.id,className:"artist-item",onClick:function(){}},n.a.createElement("div",{className:"artist-image"},n.a.createElement("img",{src:e.images[0]?e.images[0].url:"",alt:e.name})),n.a.createElement("div",{className:"artist-details"},n.a.createElement("p",null,e.name)))}))}},{key:"render",value:function(){return n.a.createElement("ul",{className:"artist-view-container"},this.state.artists)}}]),a}(r.Component),P=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var r;return Object(u.a)(this,a),(r=t.call(this,e)).state={songs:[]},r.visible=!1,r}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.renderSongs().then((function(t){e.setState({header:e.props.appState.header,currentTop:"",currentSearchTerm:"",songs:t,visible:!0})})),this.visible=!0}},{key:"componentDidUpdate",value:function(){var e=this;this.visible&&("Top"===this.props.appState.header&&this.state.currentTop!==this.props.appState.currentTop||"Search Results"===this.props.appState.header&&this.state.currentSearchTerm!==this.props.appState.currentSearchTerm||this.props.appState.header!==this.state.header)&&this.renderSongs().then((function(t){e.setState({header:e.props.appState.header,currentTop:e.props.appState.currentTop,currentSearchTerm:e.props.appState.currentSearchTerm,songs:t})}))}},{key:"componentWillUnmount",value:function(){this.visible=!1}},{key:"renderSongs",value:function(){var e=Object(o.a)(l.a.mark((function e(){var t,a,r,n,s=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.props.appState.currentUser,a=this.props.appState.currentPlaylist,r=this.props.appState.currentSearchTerm,n=function(e){return s.songList(e)},e.t0=this.props.appState.header,e.next="Top"===e.t0?7:"Recently Played"===e.t0?8:"Songs"===e.t0?9:"Search Results"===e.t0?10:11;break;case 7:return e.abrupt("return",b.getMyTopTracks({limit:50,time_range:this.props.appState.currentTop}).then((function(e){return n(e.items)})).catch((function(e){return console.error(e),[]})));case 8:return e.abrupt("return",b.getMyRecentlyPlayedTracks({limit:50}).then((function(e){return n(e.items)})).catch((function(e){return console.error(e),[]})));case 9:return e.abrupt("return",b.getMySavedTracks({limit:50}).then((function(e){return n(e.items)})).catch((function(e){return console.error(e),[]})));case 10:return e.abrupt("return",b.searchTracks(r,{limit:25}).then((function(e){return n(e.tracks.items)})));case 11:if("playlist"!==this.props.appState.view){e.next=13;break}return e.abrupt("return",b.getPlaylistTracks(t.id,a.id).then((function(e){return n(e.items)})).catch((function(e){return console.error(e),[]})));case 13:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"songList",value:function(e){var t="Top"===this.props.appState.header||"Search Results"===this.props.appState.header?function(e){return e}:function(e){return e.track};return e.map((function(e,a){return n.a.createElement("li",{key:a,className:"user-song-item"},n.a.createElement("div",{className:"song-title"},n.a.createElement("p",null,t(e).name)),n.a.createElement("div",{className:"song-artist"},n.a.createElement("p",null,t(e).artists[0].name)),n.a.createElement("div",{className:"song-album"},n.a.createElement("p",null,t(e).album.name)),n.a.createElement("div",{className:"song-length"},n.a.createElement("p",null,function(e){var t=Math.floor(e/6e4),a=(e%6e4/1e3).toFixed(0);return t+":"+(a<10?"0":"")+a}(t(e).duration_ms))))}))}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"song-header-container"},n.a.createElement("div",{className:"song-title-header"},n.a.createElement("p",null,"Title")),n.a.createElement("div",{className:"song-artist-header"},n.a.createElement("p",null,"Aritst")),n.a.createElement("div",{className:"song-album-header"},n.a.createElement("p",null,"Album")),n.a.createElement("div",{className:"song-length-header"},n.a.createElement("p",null,"Length"))),this.state.songs)}}]),a}(r.Component),U=y;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[11,1,2]]]);
//# sourceMappingURL=main.166642b3.chunk.js.map