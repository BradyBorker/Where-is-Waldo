# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

waldo_coordinates = {
  beach: {x: 0.6167778836987607, y: 0.37444279346210996},
  race: {x: 0.27931363203050524, y: 0.3313253012048193},
  fruit: {x: 0.892278360343184, y: 0.665680473372781},
  space: {x: 0.4051477597712107, y: 0.6230101302460203}
}

['beach', 'race', 'fruit', 'space'].each do |map|
  Map.create(title: map)
end

Map.all.each do |map|
  map.characters.create(name: 'waldo', coordinates: waldo_coordinates[map.title.to_sym].to_json)
end