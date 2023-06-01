import {
  boolean,
  date,
  int,
  mysqlEnum,
  mysqlTable,
  serial,
  text,
  time,
  timestamp,
} from "drizzle-orm/mysql-core";
import { InferModel, relations } from "drizzle-orm";

/* tables *********************************************************************/

export const choreAssignments = mysqlTable("chore_assignments", {
  choreOccurenceId: int("chore_occurrence_id"),
  householdMemberId: int("household_member_id"),
  id: serial("id").primaryKey(),
  mondayOfWeek: date("monday_of_week"),
  timeCreated: timestamp('time_created').defaultNow(),
  timeLastUpdated: timestamp('time_last_updated').onUpdateNow(),
});

export const choreOccurences = mysqlTable("chore_occurrences", {
  choreId: int("chore_id"),
  day: mysqlEnum("day", [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ]),
  id: serial("id").primaryKey(),
  time: time("time"),
  timeCreated: timestamp('time_created').defaultNow(),
  timeLastUpdated: timestamp('time_last_updated').onUpdateNow(),
});

export const chores = mysqlTable("chores", {
  householdId: int("household_id"),
  id: serial("id").primaryKey(),
  name: text("name"),
  timeCreated: timestamp('time_created').defaultNow(),
  timeLastUpdated: timestamp('time_last_updated').onUpdateNow(),
});

export const householdMembers = mysqlTable("household_members", {
  householdId: int("household_id"),
  id: serial("id").primaryKey(),
  isAdmin: boolean("is_admin"),
  isVisitor: boolean("is_visitor"),
  userId: int("user_id"),
  timeCreated: timestamp('time_created').defaultNow(),
  timeLastUpdated: timestamp('time_last_updated').onUpdateNow(),
});

export const households = mysqlTable("households", {
  id: serial("id").primaryKey(),
  name: text("name"),
  timeCreated: timestamp('time_created').defaultNow(),
  timeLastUpdated: timestamp('time_last_updated').onUpdateNow(),
});

export const users = mysqlTable("users", {
  email: text("email"),
  firstName: text("first_name"),
  id: serial("id").primaryKey(),
  lastName: text("last_name"),
  middleName: text("middle_name"),
  profilePictureUrl: text("profile_picture_url"),
  timeCreated: timestamp('time_created').defaultNow(),
  timeLastUpdated: timestamp('time_last_updated').onUpdateNow(),
});

/* relations ******************************************************************/

export const choreAssignmentsRelations = relations(
  choreAssignments,
  ({ one }) => ({
    choreOccurence: one(choreOccurences, {
      fields: [choreAssignments.choreOccurenceId],
      references: [choreOccurences.id],
    }),
    householdMember: one(householdMembers, {
      fields: [choreAssignments.householdMemberId],
      references: [householdMembers.id],
    }),
  })
);

export const choreOccurencesRelations = relations(
  choreOccurences,
  ({ one }) => ({
    chore: one(chores, {
      fields: [choreOccurences.choreId],
      references: [chores.id],
    }),
  })
);

export const choresRelations = relations(chores, ({ many, one }) => ({
  household: one(households, {
    fields: [chores.householdId],
    references: [households.id],
  }),
  occurrences: many(choreOccurences),
}));

export const householdMembersRelations = relations(
  householdMembers,
  ({ one }) => ({
    household: one(households, {
      fields: [householdMembers.householdId],
      references: [households.id],
    }),
    user: one(users, {
      fields: [householdMembers.userId],
      references: [users.id],
    }),
  })
);

export const householdsRelations = relations(households, ({ many }) => ({
  chores: many(chores),
  members: many(householdMembers),
}));

export const usersRelations = relations(users, ({ many }) => ({
  memberships: many(householdMembers),
}));

/* models *********************************************************************/

export type Chore = InferModel<typeof chores>;
export type NewChore = InferModel<typeof chores, "insert">;

export type ChoreAssigment = InferModel<typeof choreAssignments>;
export type NewChoreAssigment = InferModel<typeof choreAssignments, "insert">;

export type ChoreOccurence = InferModel<typeof choreAssignments>;
export type NewChoreOccurence = InferModel<typeof choreAssignments, "insert">;

export type Household = InferModel<typeof households>;
export type NewHousehold = InferModel<typeof households, "insert">;

export type HouseholdMember = InferModel<typeof householdMembers>;
export type NewHouseholdMember = InferModel<typeof householdMembers, "insert">;

export type User = InferModel<typeof users>;
export type NewUser = InferModel<typeof users, "insert">;
