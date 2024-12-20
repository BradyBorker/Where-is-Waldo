# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

map_coordinates = {
  beach: [],
  race: [],
  fruit: [],
  space: []
}

['beach', 'race', 'fruit', 'space'].each do |map|
  Map.create(title: map)
end

Map.all.each do |map|
  map.character.create()
end