class Group < ApplicationRecord
  has_many :users, through: :group_users
  has_many :group_users
  has_many :messages
  validates :name, uniqueness: true

  def show_last_message
    if (last_message = messages.last).present?
      last_message.content? ? last_message.content : '画像が掲載されています'
    else
      'まだメッセージはありません'
    end
  end

  def show_member_name
    @name = User.name
  end

end
