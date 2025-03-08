CREATE TABLE "magazines" (
	"id" text PRIMARY KEY NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp,
	"organization_id" text NOT NULL,
	"created_by" text NOT NULL,
	"title" text NOT NULL,
	"description" text,
	"schedule" text NOT NULL,
	"next_run_at" timestamp,
	"is_public" boolean DEFAULT false NOT NULL
);
--> statement-breakpoint
CREATE TABLE "sections" (
	"id" text PRIMARY KEY NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp,
	"magazine_id" text NOT NULL,
	"metadata" text
);
--> statement-breakpoint
CREATE TABLE "subscription_channels" (
	"id" text PRIMARY KEY NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp,
	"subscription_id" text NOT NULL,
	"channel_type" text NOT NULL,
	"channel_address" text
);
--> statement-breakpoint
CREATE TABLE "subscriptions" (
	"id" text PRIMARY KEY NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp,
	"user_id" text NOT NULL,
	"magazine_id" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "magazines" ADD CONSTRAINT "magazines_organization_id_organizations_id_fk" FOREIGN KEY ("organization_id") REFERENCES "public"."organizations"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "magazines" ADD CONSTRAINT "magazines_created_by_users_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "sections" ADD CONSTRAINT "sections_magazine_id_magazines_id_fk" FOREIGN KEY ("magazine_id") REFERENCES "public"."magazines"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "subscription_channels" ADD CONSTRAINT "subscription_channels_subscription_id_subscriptions_id_fk" FOREIGN KEY ("subscription_id") REFERENCES "public"."subscriptions"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "subscriptions" ADD CONSTRAINT "subscriptions_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "subscriptions" ADD CONSTRAINT "subscriptions_magazine_id_magazines_id_fk" FOREIGN KEY ("magazine_id") REFERENCES "public"."magazines"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "magazines_next_run_at_idx" ON "magazines" USING btree ("next_run_at");--> statement-breakpoint
CREATE INDEX "sections_magazine_idx" ON "sections" USING btree ("magazine_id");--> statement-breakpoint
CREATE UNIQUE INDEX "subscriptions_user_magazine_unique" ON "subscriptions" USING btree ("user_id","magazine_id");