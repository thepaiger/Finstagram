# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Post.destroy_all
User.destroy_all

# remove bang on deployment
@paige = User.create!(email: 'paige@gmail.com', name: 'Paige Hoeppner', username: 'paigeagainst0themachine', pronouns: 'she/her', profile_pic_url: 'https://i.imgur.com/kgUcwYL.jpg', password: '12345678')
@rachel = User.create!(email: 'rachel@gmail.com', name: 'Rachel Walsh', username: 'knotsonice', pronouns: 'she/her', profile_pic_url: 'https://i.imgur.com/u4Hs9p2.jpg', password: '12345678')
@julie = User.create!(email: 'julie@gmail.com', name: 'Julie Yang', username: 'inkandbrindle', profile_pic_url: 'https://i.imgur.com/0kKfNuJ.jpg', password: '12345678')

puts "#{User.count} users created"

Post.create(img_url: 'https://i.imgur.com/DMRxrw4.jpg', caption: 'Boulder views', user: @paige)
Post.create(img_url: 'https://i.imgur.com/g2IQHWj.jpg', caption: 'Brunch with my girl :)', user: @paige)
Post.create(img_url: 'https://i.imgur.com/bH5QKI2.jpg', caption: 'Lazy day', user: @paige)
Post.create(img_url: 'https://i.imgur.com/wL594VI.jpg', caption: 'Winter Kora', user: @paige)
Post.create(img_url: 'https://i.imgur.com/4CWgOBD.jpg', caption: 'Colorado rides', user: @paige)
Post.create(img_url: 'https://i.imgur.com/b4O3KrT.jpg', caption: 'Birthday pups', user: @paige)
Post.create(img_url: 'https://i.imgur.com/bC1SF2L.jpg', user: @paige)
Post.create(img_url: 'https://i.imgur.com/3MY8zQf.jpg', user: @paige)
Post.create(img_url: 'https://i.imgur.com/Tl94NCc.jpg', caption: 'Pups had a good day', user: @paige)
Post.create(img_url: 'https://i.imgur.com/DvePYQD.jpg', caption: 'Got out to see my boy, Bo', user: @paige)
Post.create(img_url: 'https://i.imgur.com/FiCjXR9.jpg', caption: 'My best girl', user: @paige)
Post.create(img_url: 'https://i.imgur.com/mrsoYMG.jpg', caption: 'Why you gotta stick your nose in paint?', user: @paige)
Post.create(img_url: 'https://i.imgur.com/h9TSnis.jpg', caption: 'Bertie boy', user: @rachel)
Post.create(img_url: 'https://i.imgur.com/ZJJ3Yur.jpg', caption: 'Beach Bert', user: @rachel)
Post.create(img_url: 'https://i.imgur.com/WtLq02J.jpg', user: @rachel)
Post.create(img_url: 'https://i.imgur.com/S6ldXy6.jpg', caption: "she's little but fierce", user: @rachel)
Post.create(img_url: 'https://i.imgur.com/u4Hs9p2.jpg', caption: 'by the fire', user: @rachel)
Post.create(img_url: 'https://i.imgur.com/XSSksAW.jpg', caption: 'birthday girl', user: @rachel)
Post.create(img_url: 'https://i.imgur.com/L6RjPVv.jpg?1', caption: 'lake rides', user: @rachel)
Post.create(img_url: 'https://i.imgur.com/nazWhZ1.jpg', caption: 'Our newest foster girl, Becky :)', user: @julie)
Post.create(img_url: 'https://i.imgur.com/6FiZExH.jpg', caption: 'My workday distraction', user: @julie)
Post.create(img_url: 'https://i.imgur.com/F6GIBBi.jpg', caption: 'Enjoying the warm days', user: @julie)
Post.create(img_url: 'https://i.imgur.com/dHx7T9J.jpg', caption: 'Bodie got through the AKC advanced trick certifications!', user: @julie)
Post.create(img_url: 'https://i.imgur.com/ciJS4qi.jpg', caption: 'My handsome boy', user: @julie)
Post.create(img_url: 'https://i.imgur.com/vNI0m0L.jpg', caption: 'Best friends :)', user: @julie)

puts "#{Post.count} posts created"
