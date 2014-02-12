youtube.done(function(data){
				var videos = data.feed.entry.map(function(entry){
					return {
						title : entry.title.$t,
						thumb : entry.media$group.media$thumbnail[0].url
					}
				});

				console.log(videos[0]);

				videos.forEach(function(videoData){
					var videoHTML = window.templates.videoTemplate(videoData);
					self.$el.find('#videos').append(videoHTML);

				});
			});