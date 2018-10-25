DB = []
ID = 0

def get_articles():
	return sorted(DB, key=lambda x: x['votes'], reverse=True)

def add_article(inp):
	global DB
	global ID
	ID += 1
	inp['id'] = ID
	inp['votes'] = 0
	DB.append(inp)

def up_vote(art_id):
	rec = filter(lambda x: x['id']==art_id, DB)[0]
	rec['votes'] += 1


def _init_load():
	add_article({'title': 'Awesome', 'author': 'Ramesh', 'content': 'This is awesome'})
	add_article({'title': 'Db Awesome', 'author': 'Rami', 'content': 'This is double awesome'})

_init_load()

