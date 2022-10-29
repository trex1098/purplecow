Proof of concept project using nodejs and docker

DOCKER INSTRUCTIONS

How to build:
- docker build .t appname
#example: docker build .t purplecow

How to run:
- docker run -p 3000:3000 appname
#example: docker run -p 3000:3000 purplecow


FUTURE CHANGES/RECOMMENDATIONS:
-add more error handling
-create more js classes to make the code more organized
-use mongoDB instead of local storage