# == Schema Information
#
# Table name: server_memberships
#
#  id         :bigint           not null, primary key
#  server_id  :integer          not null
#  member_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ServerMembership < ApplicationRecord
  validates :server_id, uniqueness: { scope: :member_id }

  belongs_to :server
  
  belongs_to :member,
    class_name: :User,
    foreign_key: :member_id
end
