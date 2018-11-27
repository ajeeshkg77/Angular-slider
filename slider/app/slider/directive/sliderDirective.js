(function(){
	angular
	.module('sliderApp')
	.directive('sliderDirective',sliderDirective);
	function sliderDirective($interval){
		var directive = {
			link: sliderLink,
			templateUrl: `app/slider/template/sliderTemplate.html`,
			// template: `Slider!`,
			restrict: `EA`
		};
		return directive;
		function sliderLink(scope,element,attrs){
			scope.index = 0;

			scope.slideShow = [
			{
				src:`css/images/1.jpg`,
				status:true
			},

			{
				src:`css/images/2.jpg`,
				status:true
			},

			{
				src:`css/images/3.jpg`,
				status:true
			},

			{
				src:`css/images/4.jpg`,
				status:true
			},

			{
				src:`css/images/5.jpg`,
			},
			
			{
				src:`css/images/6.jpg`,
				status:true
			}];
			console.log(scope.slideShow);
			scope.next = function(){
				if(scope.index >= scope.slideShow.length-1){
					scope.index = 0;
				} else{
					scope.index += 1;
				}
			}

			scope.previous = function(){
				if(scope.index <= 0){
					scope.index = scope.slideShow-1;
				} else{
					scope.index -= 1;
				}
			}

			scope.getImage = function(index){
				scope.index = index;
			}

			scope.$watch('index',function(){
				setImage();
			});

			$interval(function(){
				scope.next();
			},3000);

			function setImage(){
				for(let i = 0; i < scope.slideShow.length; i++){
					if(scope.index === i){
						scope.slideShow[i].status = true;
					} else{
						scope.slideShow[i].status = false;
					}
				}
			}

		}
	}
	sliderDirective.$inject = ['$interval'];
})();