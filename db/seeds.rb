peeps = ['Muawiyah', 'Yazid', 'Marwan', 'Abd al-Malik', 'al-Walid', 'Sulayman', 'Umar', 'al-Yazid', 'Hisham', 'Ibrahim']
peeps.each{|peep| Person.create(label: peep)}
