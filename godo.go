package main

import "backend-generator/godo"

func (*App) GolangVersion() string {
	return godo.Version()
}
