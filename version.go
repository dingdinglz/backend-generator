package main

import "backend-generator/global"

func (*App) Version() string {
	return global.Version
}
