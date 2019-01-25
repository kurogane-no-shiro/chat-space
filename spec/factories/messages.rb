FactoryGirl.define do
  factory :message do
    content Faker::Lorem.sentence
<<<<<<< Updated upstream
    image File.open("#{Rails.root}/public/images/umi.image.jpg")
=======
    image File.open("#{Rails.root}/public/images/no_image.jpg")
>>>>>>> Stashed changes
    user
    group
  end
end
