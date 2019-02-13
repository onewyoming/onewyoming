package user

import "testing"

func TestFreebie(t *testing.T) {
	if 1 == 2 {
		t.Errorf("This should never happen")
	}
}

func TestIncrementVisitCount(t *testing.T) {
	katy := User{
		Name:       "Katy Perry",
		Email:      "hikingfan@gmail.com",
		VisitCount: 0,
	}
	actual := User.IncrementVisitCount(katy)
	expected := 1
	if actual != expected {
		t.Errorf("expected '%d' but got '%d'", expected, actual)
	}
}
