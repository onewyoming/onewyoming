package user

// User is a person with a name and an email address
type User struct {
	Name       string
	Email      string
	VisitCount int
}

// IncrementVisitCount adds one to the current value
func (user User) IncrementVisitCount() int {
	user.VisitCount = user.VisitCount + 1
	return user.VisitCount
}
