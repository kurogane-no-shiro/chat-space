# README

<!-- This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ... -->


##message table
|    column     |   type     |     options                   |
|:--------------|------------|------------------------------:|
| id            | integer    |                               |
| body          | text       |                               |
| image         | string     |                               |
| user_id       | integer    | null:false, foreign key: true |
| group_id      | integer    | null:false, foreign key: true |

### Association
- belongs_to :group
- belongs_to :user


##user table
|    column     |   type     |     options                   |
|:--------------|------------|------------------------------:|
| id            | integer    |                               |
| name          | string     | null:false                    |
| email         | string     | null:false, add_index: true   |
| group_id      | integer    | null:false, foreign key: true |

### Association
-has_and_belongs_to_many :groups
-has_many :messages

##group table
|    column     |   type     |     options                   |
|:--------------|------------|------------------------------:|
| id            | integer    |                               |
| name          | string     | null:false, add_index: true   |

### Association
-has_and_belongs_to_many :users
-has_many :massages

##user_group table
|    column     |   type     |     options                   |
|:--------------|------------|------------------------------:|
| user_id       | integer    | foreign key: true             |
| group_id      | integer    | foreign key: true             |

### Association
-belongs_to :user
-belongs_to :group

