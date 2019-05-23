Buford is a flask-based web application. 
The idea is to make a simple to deploy waiting list application. 
One of the main ideas I want to work on is server-side analytics. 
We will not use any client-side analytics for now. 
It will all be analyzing server-side logs. 

How? 
We will learn this together. 

Deploying an update is pretty easy. 

For example: 

```bash 

[kus@localhost ~]$ date;uptime;cd /home/kus/Documents/wyoming/experimental/python/buford;ls -a;git pull origin master;time docker-compose up --build -d;date;df -h;free -h;
Wed 22 May 2019 08:25:10 PM EDT
 20:25:10 up 1 day, 22:13,  1 user,  load average: 0.14, 0.63, 0.44
.   app.log  config.py  docker-compose.yml  .env         .gitignore  Pipfile       requirements.txt  templates  volumes
..  app.py   db         Dockerfile          env.example  model       Pipfile.lock  static            tests
remote: Enumerating objects: 33, done.
remote: Counting objects: 100% (33/33), done.
remote: Compressing objects: 100% (25/25), done.
remote: Total 25 (delta 18), reused 0 (delta 0)
Unpacking objects: 100% (25/25), done.
From https://gitlab.com/wyoming/wyoming.gitlab.io
 * branch            master     -> FETCH_HEAD
   19d56f2..df89f61  master     -> origin/master
Updating 19d56f2..df89f61
Fast-forward
 experimental/python/buford/templates/base.html |  2 +-
 experimental/python/goshen/README.md           | 32 ++++++++++++++++++++++++++++++++
 experimental/python/goshen/lijie_0.py          | 22 ++++++++--------------
 3 files changed, 41 insertions(+), 15 deletions(-)
 create mode 100644 experimental/python/goshen/README.md
Building buford
Step 1/13 : FROM python:3.7-stretch
 ---> a4cc999cf2aa
Step 2/13 : RUN apt-get update
 ---> Using cache
 ---> b6ef3ad7c9e8
Step 3/13 : RUN apt-get upgrade -y
 ---> Using cache
 ---> 6b4fdd455075
Step 4/13 : RUN apt-get -y install build-essential python3-psycopg2
 ---> Using cache
 ---> bef76e18daa5
Step 5/13 : RUN mkdir -p /var/www/
 ---> Using cache
 ---> 20798538edce
Step 6/13 : WORKDIR /var/www/
 ---> Using cache
 ---> 021384e2a04d
Step 7/13 : ADD . /var/www
 ---> bbeb5016fe6c
Step 8/13 : RUN pip install --upgrade pip setuptools
 ---> Running in 7cb049a9c672
Requirement already up-to-date: pip in /usr/local/lib/python3.7/site-packages (19.1.1)
Requirement already up-to-date: setuptools in /usr/local/lib/python3.7/site-packages (41.0.1)
Removing intermediate container 7cb049a9c672
 ---> 5a56e3b03c4b
Step 9/13 : RUN pip install -r requirements.txt
 ---> Running in 7c58dfa6319c
Collecting atomicwrites==1.3.0 (from -r requirements.txt (line 2))
  Downloading https://files.pythonhosted.org/packages/52/90/6155aa926f43f2b2a22b01be7241be3bfd1ceaf7d0b3267213e8127d41f4/atomicwrites-1.3.0-py2.py3-none-any.whl
Collecting attrs==18.2.0 (from -r requirements.txt (line 3))
  Downloading https://files.pythonhosted.org/packages/3a/e1/5f9023cc983f1a628a8c2fd051ad19e76ff7b142a0faf329336f9a62a514/attrs-18.2.0-py2.py3-none-any.whl
Collecting click==7.0 (from -r requirements.txt (line 4))
  Downloading https://files.pythonhosted.org/packages/fa/37/45185cb5abbc30d7257104c434fe0b07e5a195a6847506c074527aa599ec/Click-7.0-py2.py3-none-any.whl (81kB)
Collecting flask-track-usage==2.0.0 (from -r requirements.txt (line 5))
  Downloading https://files.pythonhosted.org/packages/e6/bc/937b01b2cbc5fa4c738001c4315fab751de09a71f22aa5cbb22b54d34270/Flask-Track-Usage-2.0.0.tar.gz
Collecting flask==1.0.2 (from -r requirements.txt (line 6))
  Downloading https://files.pythonhosted.org/packages/7f/e7/08578774ed4536d3242b14dacb4696386634607af824ea997202cd0edb4b/Flask-1.0.2-py2.py3-none-any.whl (91kB)
Collecting gunicorn==19.9.0 (from -r requirements.txt (line 7))
  Downloading https://files.pythonhosted.org/packages/8c/da/b8dd8deb741bff556db53902d4706774c8e1e67265f69528c14c003644e6/gunicorn-19.9.0-py2.py3-none-any.whl (112kB)
Collecting itsdangerous==1.1.0 (from -r requirements.txt (line 8))
  Downloading https://files.pythonhosted.org/packages/76/ae/44b03b253d6fade317f32c24d100b3b35c2239807046a4c953c7b89fa49e/itsdangerous-1.1.0-py2.py3-none-any.whl
Collecting jinja2==2.10 (from -r requirements.txt (line 9))
  Downloading https://files.pythonhosted.org/packages/7f/ff/ae64bacdfc95f27a016a7bed8e8686763ba4d277a78ca76f32659220a731/Jinja2-2.10-py2.py3-none-any.whl (126kB)
Collecting markupsafe==1.1.0 (from -r requirements.txt (line 10))
  Downloading https://files.pythonhosted.org/packages/e4/c4/adcc2d6f2ac2146cc04e076f14f1006c1de8e1e747fa067668b6573000b8/MarkupSafe-1.1.0-cp37-cp37m-manylinux1_x86_64.whl
Collecting more-itertools==6.0.0 (from -r requirements.txt (line 11))
  Downloading https://files.pythonhosted.org/packages/ae/d4/d6bad4844831943dd667510947712750004525c5807711982f4ec390da2b/more_itertools-6.0.0-py3-none-any.whl (52kB)
Collecting pluggy==0.8.1 (from -r requirements.txt (line 12))
  Downloading https://files.pythonhosted.org/packages/2d/60/f58d9e8197f911f9405bf7e02227b43a2acc2c2f1a8cbb1be5ecf6bfd0b8/pluggy-0.8.1-py2.py3-none-any.whl
Collecting psycopg2-binary==2.7.7 (from -r requirements.txt (line 13))
  Downloading https://files.pythonhosted.org/packages/04/c3/fbf0ec416151ce082087bfbb42f236ec42c2c74d2d9f7a5b5cdf49cfc517/psycopg2_binary-2.7.7-cp37-cp37m-manylinux1_x86_64.whl (2.7MB)
Collecting py==1.7.0 (from -r requirements.txt (line 14))
  Downloading https://files.pythonhosted.org/packages/3e/c7/3da685ef117d42ac8d71af525208759742dd235f8094221fdaafcd3dba8f/py-1.7.0-py2.py3-none-any.whl (83kB)
Collecting pytest==4.2.1 (from -r requirements.txt (line 15))
  Downloading https://files.pythonhosted.org/packages/11/e9/dc9a7269a7e1fed46de7d5864da6a86370256c791bf263dd0c7d7e8f1ff1/pytest-4.2.1-py2.py3-none-any.whl (218kB)
Collecting pytz==2018.9 (from -r requirements.txt (line 16))
  Downloading https://files.pythonhosted.org/packages/61/28/1d3920e4d1d50b19bc5d24398a7cd85cc7b9a75a490570d5a30c57622d34/pytz-2018.9-py2.py3-none-any.whl (510kB)
Collecting six==1.12.0 (from -r requirements.txt (line 17))
  Downloading https://files.pythonhosted.org/packages/73/fb/00a976f728d0d1fecfe898238ce23f502a721c0ac0ecfedb80e0d88c64e9/six-1.12.0-py2.py3-none-any.whl
Collecting werkzeug==0.14.1 (from -r requirements.txt (line 18))
  Downloading https://files.pythonhosted.org/packages/20/c4/12e3e56473e52375aa29c4764e70d1b8f3efa6682bef8d0aae04fe335243/Werkzeug-0.14.1-py2.py3-none-any.whl (322kB)
Requirement already satisfied: setuptools in /usr/local/lib/python3.7/site-packages (from pytest==4.2.1->-r requirements.txt (line 15)) (41.0.1)
Building wheels for collected packages: flask-track-usage
  Building wheel for flask-track-usage (setup.py): started
  Building wheel for flask-track-usage (setup.py): finished with status 'done'
  Stored in directory: /root/.cache/pip/wheels/b3/ad/41/4ea672a85bfe45657a259339d87f905c47363ce646bdbd2f54
Successfully built flask-track-usage
Installing collected packages: atomicwrites, attrs, click, itsdangerous, werkzeug, markupsafe, jinja2, flask, flask-track-usage, gunicorn, more-itertools, pluggy, psycopg2-binary, py, six, pytest, pytz
Successfully installed atomicwrites-1.3.0 attrs-18.2.0 click-7.0 flask-1.0.2 flask-track-usage-2.0.0 gunicorn-19.9.0 itsdangerous-1.1.0 jinja2-2.10 markupsafe-1.1.0 more-itertools-6.0.0 pluggy-0.8.1 psycopg2-binary-2.7.7 py-1.7.0 pytest-4.2.1 pytz-2018.9 six-1.12.0 werkzeug-0.14.1
Removing intermediate container 7c58dfa6319c
 ---> 4642bd2ea072
Step 10/13 : RUN pytest
 ---> Running in 2f5610252936
============================= test session starts ==============================
platform linux -- Python 3.7.3, pytest-4.2.1, py-1.7.0, pluggy-0.8.1
rootdir: /var/www, inifile:
collected 1 item

tests/test_freebie.py .                                                  [100%]

=========================== 1 passed in 0.22 seconds ===========================
Removing intermediate container 2f5610252936
 ---> c95538041518
Step 11/13 : RUN export FLASK_APP=app.py
 ---> Running in f7dff39ee279
Removing intermediate container f7dff39ee279
 ---> dba2d3af4b2d
Step 12/13 : EXPOSE 5000
 ---> Running in 9ce418095f4e
Removing intermediate container 9ce418095f4e
 ---> faaa4b7f1fed
Step 13/13 : ENTRYPOINT ["gunicorn", "-w 2", "-b 0.0.0.0:5000", "app:app"]
 ---> Running in 798f2e88f0ae
Removing intermediate container 798f2e88f0ae
 ---> 76cb49c68c1c
Successfully built 76cb49c68c1c
Successfully tagged buford_buford:latest
Recreating buford ... 
nginx is up-to-date
nginx-gen is up-to-date
Recreating buford ... done

real	2m24.592s
user	0m1.996s
sys	0m0.263s
Wed 22 May 2019 08:27:41 PM EDT
Filesystem               Size  Used Avail Use% Mounted on
devtmpfs                 716M     0  716M   0% /dev
tmpfs                    731M   28K  731M   1% /dev/shm
tmpfs                    731M  1.8M  729M   1% /run
tmpfs                    731M     0  731M   0% /sys/fs/cgroup
/dev/mapper/fedora-root   49G   17G   31G  35% /
tmpfs                    731M  4.5M  726M   1% /tmp
/dev/mapper/fedora-home   39G  1.4G   35G   4% /home
/dev/sda1                976M  220M  690M  25% /boot
tmpfs                    147M  1.2M  145M   1% /run/user/42
tmpfs                    147M  4.0K  147M   1% /run/user/1000
              total        used        free      shared  buff/cache   available
Mem:          1.4Gi       413Mi       206Mi        97Mi       840Mi       795Mi
Swap:         3.1Gi       142Mi       3.0Gi

```
