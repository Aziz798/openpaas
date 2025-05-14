package models

import (
	"github.com/jackc/pgx/v5/pgtype"
)

type (
	UserRole          string
	UserLoginProvider string
	ProjectStatus     string
	UserRoleInProject string
	TaskStatus        string
)

const (
	AdminUserRole                   UserRole          = "admin"
	UserUserRole                    UserRole          = "user"
	GoogleUserLoginProvider         UserLoginProvider = "google"
	EmailUserLoginProvider          UserLoginProvider = "email"
	ProjectStatusNotStarted         ProjectStatus     = "not_started"
	ProjectStatusInProgress         ProjectStatus     = "in_progress"
	ProjectStatusCompleted          ProjectStatus     = "completed"
	ProjectStatusOnHold             ProjectStatus     = "on_hold"
	ProjectStatusCancelled          ProjectStatus     = "cancelled"
	UserRoleInProjectScrumMaster    UserRoleInProject = "scrum_master"
	UserRoleInProjectDeveloper      UserRoleInProject = "developer"
	UserRoleInProjectStakeholder    UserRoleInProject = "stakeholder"
	UserRoleInProjectProductOwner   UserRoleInProject = "product_owner"
	UserRoleInProjectProjectManager UserRoleInProject = "project_manager"
	UserRoleINProjectQa             UserRoleInProject = "qa"
	TaskStatusNotStarted            TaskStatus        = "not_started"
	TaskStatusInProgress            TaskStatus        = "in_progress"
	TaskStatusCompleted             TaskStatus        = "completed"
	TaskStatusOnHold                TaskStatus        = "on_hold"
	TaskStatusCancelled             TaskStatus        = "cancelled"
	TaskStatusBlocked               TaskStatus        = "blocked"
	TaskStatusTesting               TaskStatus        = "testing"
	TaskStatusReview                TaskStatus        = "review"
	TaskStatusDeployed              TaskStatus        = "deployed"
	TaskStatusArchived              TaskStatus        = "archived"
)

type UserTable struct {
	ID               pgtype.UUID       `db:"id" json:"id"`
	FirstName        pgtype.Text       `db:"first_name" json:"first_name"`
	LastName         pgtype.Text       `db:"last_name" json:"last_name"`
	Email            pgtype.Text       `db:"email" json:"email"`
	Role             UserRole          `db:"role" json:"role"`
	Password         pgtype.Text       `db:"password" json:"password"`
	IsActive         pgtype.Bool       `db:"is_active" json:"is_active"`
	IsPremium        pgtype.Bool       `db:"is_premium" json:"is_premium"`
	PremiumStartDate pgtype.Date       `db:"premium_start_date" json:"premium_start_date"`
	PremiumEndDate   pgtype.Date       `db:"premium_end_date" json:"premium_end_date"`
	LoginProvider    UserLoginProvider `db:"login_provider" json:"login_provider"`
	OtpSecret        pgtype.Text       `db:"otp_secret" json:"otp_secret"`
	CreatedAt        pgtype.Date       `db:"created_at" json:"created_at"`
	UpdatedAt        pgtype.Date       `db:"updated_at" json:"updated_at"`
}
