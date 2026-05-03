import { useUser } from "@clerk/react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Settings, MapPin, Mail, Calendar } from "lucide-react";

export default function Profile() {
  const { user } = useUser();

  if (!user) return null;

  return (
    <div className="min-h-[100dvh] bg-background py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-foreground">My Profile</h1>
          <Link href="/profile/update">
            <Button variant="outline" className="rounded-full shadow-sm">
              <Settings className="w-4 h-4 mr-2" /> Edit Profile
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <Card className="text-center overflow-hidden border-border/50 shadow-sm">
              <div className="h-32 bg-gradient-to-br from-primary/20 via-background to-secondary/20"></div>
              <CardContent className="pt-0 pb-8 px-6 -mt-16 flex flex-col items-center">
                <Avatar className="w-32 h-32 border-4 border-card shadow-md mb-4 bg-background">
                  <AvatarImage src={user.imageUrl} alt={user.fullName || ""} />
                  <AvatarFallback className="text-4xl bg-primary/10 text-primary">
                    {user.firstName?.charAt(0) || "U"}
                  </AvatarFallback>
                </Avatar>
                <h2 className="text-2xl font-bold mb-1 text-foreground">{user.fullName || "User"}</h2>
                <div className="inline-flex items-center text-sm text-muted-foreground mt-2 bg-muted px-3 py-1 rounded-full">
                  <Mail className="w-3.5 h-3.5 mr-1.5" />
                  {user.primaryEmailAddress?.emailAddress}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-2 space-y-8">
            <Card className="border-border/50 shadow-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl">Account Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground block mb-1">First Name</label>
                    <div className="text-foreground font-medium">{user.firstName || "—"}</div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground block mb-1">Last Name</label>
                    <div className="text-foreground font-medium">{user.lastName || "—"}</div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground block mb-1">Joined</label>
                    <div className="flex items-center text-foreground font-medium">
                      <Calendar className="w-4 h-4 mr-2 text-muted-foreground" />
                      {new Date(user.createdAt!).toLocaleDateString()}
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground block mb-1">Last Sign In</label>
                    <div className="text-foreground font-medium">
                      {user.lastSignInAt ? new Date(user.lastSignInAt).toLocaleDateString() : "—"}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
