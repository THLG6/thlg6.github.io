// build time:Sat May 11 2024 16:28:52 GMT+0800 (China Standard Time)
const musicPlayer=new APlayer({container:document.getElementById("aplayer"),fixed:true,mini:true,autoplay:false,theme:"#b7daff",loop:"all",order:"list",preload:"auto",volume:.7,mutex:true,listFolded:true,listMaxHeight:"700px",lrcType:1,audio:[]});musicPlayer.lrc.hide();function addMusic(audio){musicPlayer.list.add(audio);if(localStorage.getItem("musicPlayer")){const audio=JSON.parse(localStorage.getItem("musicPlayer"));musicPlayer.list.audios.forEach(function(a,i){if(a.url===audio.url){musicPlayer.list.switch(i);musicPlayer.seek(audio.currentTime);const event=["click","keydown","touchend","dblclick"];function play(){if(musicPlayer.audio.paused){musicPlayer.play()}event.forEach(function(e){document.documentElement.removeEventListener(e,play)})}event.forEach(function(e){document.documentElement.addEventListener(e,play)});musicPlayer.play()}})}}window.addEventListener("beforeunload",function(){if(!musicPlayer.audio.paused){localStorage.setItem("musicPlayer",JSON.stringify({url:musicPlayer.audio.src,currentTime:musicPlayer.audio.currentTime}))}else{localStorage.setItem("musicPlayer","")}});function queryPlayListData(){var playListId=$("script[data-playlist-id]").attr("data-playlist-id");if(!playListId)return;var song_list_json=sessionStorage.getItem("song_list");var song_list=null;if(song_list_json){try{song_list=JSON.parse(song_list_json);addMusic(song_list)}catch(error){spider(playListId)}}else{spider(playListId)}}$(function(){queryPlayListData()});function spider(playListId){$.ajax({type:"get",url:"https://bird.ioliu.cn/netease/playlist?id="+playListId,success:function(response){var mediaMap={};var trackListIds=$.map(response.playlist.tracks,function(track){mediaMap[track.id]={name:track.name};return track.id});response.playlist.updateTime;response.playlist.trackCount;$.when.apply($,$.map(trackListIds,function(id){return $.ajax({type:"get",url:"https://bird.ioliu.cn/netease/song?id="+id})})).done(function(){$.each(arguments,function(_,res){if(res[0].status.code===200){var data=res[0].data;var al=data.al;var item={name:mediaMap[data.id].name||al.name,artist:$.map(data.ar,function(ar){return ar.name}).join("/"),url:"https://music.163.com/song/media/outer/url?id="+data.id+".mp3",cover:al.picUrl,lrc:""};mediaMap[data.id]=item}});$.when.apply($,$.map(trackListIds,function(id){return $.ajax({type:"get",url:"https://bird.ioliu.cn/v1?url=https://music.163.com/api/song/media&id="+id})})).done(function(){$.each(arguments,function(index,result){var track_id=trackListIds[index];if(result[0].code===200){mediaMap[track_id].lrc=result[0].lyric}});sessionStorage.setItem("song_list",JSON.stringify(Object.values(mediaMap)));addMusic(Object.values(mediaMap))})}).fail(function(e){console.log(e)})}})}
//rebuild by neat 