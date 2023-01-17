# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
puts 'deleteing old data'



puts'seeding users'
u1 = User.create!(username: "john", password:'password', email: "example@gmail.com")

puts 'seedind items'
i1 = Item.create!(name: "pasta", price: 9)

puts 'seeding orders'
o1 = Order.create!(user_id: u1.id) 
puts 'seedind item_orders'
io1 = ItemOrder.create!(item_id: i1.id, order_id: o1.id)
puts 'seeding done'