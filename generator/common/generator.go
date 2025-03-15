package common

type Generator interface {
	Config()
	Middleware()
	Tool()
	ServiceContext()
	Types()
	Main()
	Bind()
	Route(string, []interface{})
}
