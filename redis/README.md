### Bruno's Request

* User stays signed in upon Page Refresh

### Section Overview

* Redis: NoSQL database in-memory db 
* Classificatoin of NoSQL Databases:
  * Redis: Key-Value(High performance scalable web applications like sessions)
    * In Memory db so it's much faster
    * Does take snapshots to disk every once in a while(Unexpected shutdowns)
  * MongoDB and CouchDB: Document(Like LinkedIn profile containing a variety of fields)
  * Cassandra: Wide Column
  * neo4j: Graph(Social media)

### Introduction to Databases

* Database: Collection of data
* DBMS: Tools that give access to data and work with data
![rel](../img/rel.png)
* Relational databases use SQL
  * users.txt
  * tweets.txt
  * profile.txt
  * following.txt
![non-rel](../img/non-rel.png)
* Non-Relational doesn't require schema first(Unstructured data)
* MongoDB as an example
  * user1.txt
  * user2.txt
  * user3.txt
![rel-vs-nonRel](../img/relVsnon-rel.png)

### Installing Redis

```sh
make 
src/redis-server
src/redis-cli
```
* If Redis installation fails: https://stackoverflow.com/questions/37103054/redis-installation-fails-with-newer-version-of-jemalloc-required-when-running
* https://stackoverflow.com/questions/8131008/issue-with-redis-install-cc-command-not-found