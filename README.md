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


## message table
|    column     |   type     |     options                   |
|:--------------|------------|------------------------------:|
| body          | text       |                               |
| image         | string     |                               |
| user_id       | integer    | null:false, foreign key: true |
| group_id      | integer    | null:false, foreign key: true |

### Association
- belongs_to :group
- belongs_to :user


## user table
|    column     |   type     |     options                   |
|:--------------|------------|------------------------------:|
| name          | string     | null:false                    |
| email         | string     | null:false, add_index: true   |
| group_id      | integer    | null:false, foreign key: true |

### Association
-has_many :groups, through: user_group
-has_many :user_group
-has_many :messages

## group table
|    column     |   type     |     options                   |
|:--------------|------------|------------------------------:|
| name          | string     | null:false, add_index: true   |

### Association
-has_many :users, through:user_group
-has_many :user_group
-has_many :massages

## user_group table
|    column     |   type     |     options                   |
|:--------------|------------|------------------------------:|
| user_id       | integer    | foreign key: true             |
| group_id      | integer    | foreign key: true             |

### Association
-belongs_to :user
-belongs_to :group

