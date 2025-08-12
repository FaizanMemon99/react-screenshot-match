import React, { useMemo, useState } from "react";
import {
  ThemeProvider, createTheme, CssBaseline, useMediaQuery, StyledEngineProvider,
  AppBar, Toolbar, Typography, Box, Container, Grid, Paper, Chip,
  IconButton, Button, MenuItem, Select, TextField, Drawer,
  Table, TableHead, TableBody, TableRow, TableCell,
  Card, CardContent, CardActions, BottomNavigation, BottomNavigationAction, Divider
} from "@mui/material";
import {
  Edit as EditIcon, Delete as DeleteIcon, Home as HomeIcon,
  ShoppingCart as ShoppingCartIcon, Inventory2 as InventoryIcon,
  School as SchoolIcon, BarChart as BarChartIcon, Menu as MenuIcon
} from "@mui/icons-material";

import RedwoodHeader from "../images/redwood-header-stripe-only.webp";
import Image from "../images/c1bce6af-9b42-42aa-b440-e72061f5e52a.png";

// Visual constants for "default" mode to match your initial design
const HEADER_BG_CUSTOM = "#36677d";
const BADGE_BG_CUSTOM = "#16425B";
const STRIPE_H = 12;

type Mode = "light" | "dark" | "default";

const buildTheme = (mode: Mode) =>
  createTheme({
    palette: {
      mode: mode === "default" ? "light" : mode, // custom = light base with your brand colors
      primary: { main: "#1F4E79" },
      secondary: { main: "#16425B" },
      background:
        mode === "dark"
          ? { default: "#0b0f14", paper: "#0f172a" } // explicit dark surfaces
          : { default: "#E5E4E4", paper: "#ffffff" }, // light/custom
      text:
        mode === "dark"
          ? { primary: "#e2e8f0", secondary: "#94a3b8" }
          : { primary: "#0f172a", secondary: "#475569" },
    },
    shape: { borderRadius: 12 },
  });

const SAFE_MODES: Mode[] = ["light", "dark", "default"];

export default function Index() {
  const sysPrefersDark = useMediaQuery("(prefers-color-scheme: dark)");
  const isMdUp = useMediaQuery("(min-width:900px)");

  // Theme mode
  const [mode, setMode] = useState<Mode>(sysPrefersDark ? "dark" : "default");
  const theme = useMemo(() => buildTheme(mode), [mode]);

  const onThemeChange = (e: any) => {
    const next = e.target.value as Mode;
    setMode(SAFE_MODES.includes(next) ? next : "light");
  };

  // Derived brand colors per mode
  const headerBg =
    mode === "default"
      ? HEADER_BG_CUSTOM
      : theme.palette.mode === "dark"
        ? theme.palette.background.paper
        : theme.palette.primary.main;

  const badgeBg =
    mode === "default" ? BADGE_BG_CUSTOM : theme.palette.secondary.main;

  // Layout heights (explicit so we can calc a fixed scroll pane)
  const HEADER_TOOLBAR_H = 64;
  const BOTTOM_NAV_H = 45;
  const HEADER_TOTAL_H = HEADER_TOOLBAR_H + STRIPE_H;

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navValue, setNavValue] = useState(0);

  const [orderData, setOrderData] = useState({
    customerName: "ABC Corporation",
    customerNumber: "54728954923754890",
    customerEmail: "example@abccorp.com",
    currency: "CAD",
    shippingAddress: "331 Pudding Street\n1500419\nFusion City, ON 93295\nCanada",
    shippingMethod: "Standard",
    shippingCost: "1,500.00 CAD",
    comments: ""
  });
  const navItems = [
    { label: "Home", icon: <HomeIcon /> },
    { label: "Orders", icon: <ShoppingCartIcon /> },
    { label: "Inventory", icon: <InventoryIcon /> },
    { label: "Training", icon: <SchoolIcon /> },
    { label: "Analytics", icon: <BarChartIcon /> },
  ];
  const orderLines = [
    {
      product: "Macbook Pro 15'' 2019",
      productNumber: "54728954923754890",
      listPrice: "3,000.00 CAD",
      quantity: 5,
      amount: "15,000.00 CAD",
      image: Image
    },
    {
      product: "Macbook Pro 15'' 2019",
      productNumber: "54728954923754890",
      listPrice: "3,000.00 CAD",
      quantity: 5,
      amount: "15,000.00 CAD",
      image: Image
    }
  ];

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* Background pattern */}
        <Box
          sx={{
            minHeight: "100vh",
            bgcolor: "background.default", // <-- fixed key (was bgColor)
            backgroundImage:
              theme.palette.mode === "dark"
                ? "repeating-conic-gradient(rgba(255,255,255,0.04) 0 1deg, transparent 1deg 2deg)"
                : "repeating-conic-gradient(rgba(0,0,0,0.05) 0 1deg, transparent 1deg 2deg)",
            backgroundSize: "64px 64px",
            backgroundAttachment: "fixed"
          }}
        >
          {/* FIXED HEADER (flush to top) */}
          <AppBar position="fixed" elevation={6} sx={{ bgcolor: headerBg }}>
            <Toolbar disableGutters sx={{ minHeight: HEADER_TOOLBAR_H, px: { xs: 2, md: 3 }, gap: 1.5 }}>
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Typography variant="h6" noWrap sx={{ color: "#fff", fontWeight: 600 }}>
                  Order #123456
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, flexWrap: "wrap", mt: 0.5, color: "#fff" }}>
                  <Chip
                    size="small"
                    label="Draft"
                    sx={{
                      bgcolor: badgeBg,
                      color: "#fff",
                      height: 22,
                      "& .MuiChip-label": { px: 1.2, fontSize: 12 }
                    }}
                  />
                  <Typography variant="caption" noWrap>ABC Corporation</Typography>
                  <Typography variant="caption" noWrap>2/24/2020</Typography>
                </Box>
              </Box>

              {/* Theme switcher */}
              <Box sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center", gap: 1, mr: 1 }}>
                <Typography variant="caption" sx={{ color: "#fff", opacity: 0.9 }}>Theme</Typography>
                <Select
                  size="small"
                  value={mode}
                  onChange={onThemeChange}
                  sx={{
                    color: "#fff",
                    minWidth: 140,
                    ".MuiOutlinedInput-notchedOutline": { borderColor: "#fff3" },
                    "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#fff6" },
                    ".MuiSvgIcon-root": { color: "#fff" }
                  }}
                >
                  <MenuItem value="light">Light</MenuItem>
                  <MenuItem value="dark">Dark</MenuItem>
                  <MenuItem value="default">Default</MenuItem>
                </Select>
              </Box>

              {/* Desktop actions */}
              <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 1, color: "#fff" }}>
                <Typography variant="caption" sx={{ mr: 1.5, opacity: 0.9 }}>
                  Last updated on Jan&nbsp;24, 12:43 PM
                </Typography>
                <Button variant="text" sx={{ textTransform: 'capitalize', color: "#fff" }}>Cancel</Button>
                <Button variant="text" sx={{ textTransform: 'capitalize', color: "#fff" }}>Save</Button>
                <Button variant="contained" sx={{ textTransform: 'capitalize', bgcolor: "#fff", color: "#1F4E79", "&:hover": { bgcolor: "#f1f5f9" } }}>
                  Submit
                </Button>
              </Box>

              {/* Mobile menu */}
              <IconButton
                sx={{ display: { xs: "inline-flex", md: "none" }, color: "#fff" }}
                onClick={() => setDrawerOpen(true)}
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>

            {/* Stripe under header */}
            <Box
              sx={{
                height: STRIPE_H,
                backgroundImage: `url(${RedwoodHeader})`,
                backgroundRepeat: "repeat-x",
                backgroundPosition: "left bottom",
                backgroundSize: "800px"
              }}
            />
          </AppBar>

          {/* MOBILE DRAWER */}
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
            PaperProps={{ sx: { width: 280, p: 2 } }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Select fullWidth size="small" value={mode} onChange={onThemeChange}>
                <MenuItem value="light">Light</MenuItem>
                <MenuItem value="dark">Dark</MenuItem>
                <MenuItem value="default">Default</MenuItem>
              </Select>
              <Divider sx={{ my: 1.5 }} />
              <Button variant="outlined" sx={{ color: mode === 'dark' && '#fff', borderColor: mode === 'dark' && '#fff' }} onClick={() => setDrawerOpen(false)} fullWidth>Cancel</Button>
              <Button variant="outlined" sx={{ color: mode === 'dark' && '#fff', borderColor: mode === 'dark' && '#fff' }} onClick={() => setDrawerOpen(false)} fullWidth>Save</Button>
              <Button variant="contained" fullWidth sx={{ bgcolor: "#1F4E79", "&:hover": { bgcolor: "#16425B" } }} onClick={() => setDrawerOpen(false)}>
                Submit
              </Button>
            </Box>
          </Drawer>

          {/* FIXED SCROLL AREA between header and footer */}
          <Box
            sx={{
              position: "fixed",
              top: `${HEADER_TOTAL_H}px`,
              bottom: `${BOTTOM_NAV_H}px`,
              left: 0,
              right: 0,
              width: '100%',
              overflow: "auto",
            }}
          >
            <Container sx={{ py: 0 }} style={{ padding: 0, maxWidth: '100%' }}>
              <Paper elevation={1} style={{ borderRadius: 0 }}>
                {/* Customer info header */}
                <Box sx={{ px: 2, py: 1.5 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>Customer information</Typography>
                </Box>

                {/* Customer info grid */}
                <Box sx={{ p: { xs: 2, md: 3 } }}>
                  <Grid container spacing={3} sx={{ mb: 1 }}>
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                      <Typography variant="caption" sx={{ color: "text.secondary", mb: 0.5, display: "block", fontWeight: 'bold', fontSize: 14 }}>
                        Customer Name
                      </Typography>
                      <Select
                        fullWidth size="small"
                        value={orderData.customerName}
                        onChange={(e) => setOrderData((p) => ({ ...p, customerName: e.target.value }))}
                      >
                        <MenuItem value="ABC Corporation">ABC Corporation</MenuItem>
                      </Select>
                      <Typography
                        variant="caption"
                        sx={{ color: "#ef4444", mt: 0.5, display: "block", textAlign: "right" }}
                      >
                        Required
                      </Typography>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                      <Typography variant="caption" sx={{ color: "text.secondary", mb: 0.5, display: "block", fontWeight: 'bold', fontSize: 14 }}>
                        Customer Number
                      </Typography>
                      <Typography variant="body2" sx={{ wordBreak: "break-all" }}>
                        {orderData.customerNumber}
                      </Typography>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                      <Typography variant="caption" sx={{ color: "text.secondary", mb: 0.5, display: "block", fontWeight: 'bold', fontSize: 14 }}>
                        Customer Email
                      </Typography>
                      <Typography variant="body2" sx={{ color: "primary.main", wordBreak: "break-all" }}>
                        {orderData.customerEmail}
                      </Typography>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                      <Typography variant="caption" sx={{ color: "text.secondary", mb: 0.5, display: "block", fontWeight: 'bold', fontSize: 14 }}>
                        Currency
                      </Typography>
                      <Select
                        fullWidth size="small"
                        value={orderData.currency}
                        onChange={(e) => setOrderData((p) => ({ ...p, currency: e.target.value }))}
                      >
                        <MenuItem value="CAD">CAD</MenuItem>
                        <MenuItem value="USD">USD</MenuItem>
                      </Select>
                    </Grid>
                  </Grid>

                  <Grid container spacing={3}>
                    <Grid size={{ xs: 12, md: 6, lg: 4 }}>

                      <Typography variant="caption" sx={{ color: "text.secondary", mb: 0.5, display: "block", fontWeight: 'bold', fontSize: 14 }}>
                        Shipping Address
                      </Typography>
                      <Typography variant="body2" sx={{ whiteSpace: "pre-line" }}>
                        {orderData.shippingAddress}
                      </Typography>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
                      <Typography variant="caption" sx={{ color: "text.secondary", mb: 0.5, display: "block", fontWeight: 'bold', fontSize: 14 }}>
                        Shipping Method
                      </Typography>
                      <Select
                        fullWidth size="small"
                        value={orderData.shippingMethod}
                        onChange={(e) => setOrderData((p) => ({ ...p, shippingMethod: e.target.value }))}
                      >
                        <MenuItem value="Standard">Standard</MenuItem>
                        <MenuItem value="Express">Express</MenuItem>
                      </Select>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
                      <Typography variant="caption" sx={{ color: "text.secondary", mb: 0.5, display: "block", fontWeight: 'bold', fontSize: 14 }}>
                        Shipping Cost
                      </Typography>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        {orderData.shippingCost}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>

                {/* Order Lines header */}
                <Box sx={{ px: 2, py: 1.5 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>Order Lines</Typography>
                </Box>

                {/* Desktop table */}
                <Box sx={{ display: { xs: "none", md: "block" }, px: 3, pb: 2, overflowX: "auto" }}>
                  <Table size="small">
                    <TableHead>
                      <TableRow>
                        {["Product", "Product Number", "Product Image", "List Price", "Quantity", "Amount", "Action"]
                          .map((h) => (
                            <TableCell key={h} sx={{ fontSize: 12, color: "text.secondary" }}>{h}</TableCell>
                          ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {orderLines.map((line, i) => (
                        <TableRow key={i} hover sx={{ "& td": { fontWeight: 600 } }}>
                          <TableCell>{line.product}</TableCell>
                          <TableCell sx={{ color: "#2d83a1" }}>{line.productNumber}</TableCell>
                          <TableCell>
                            <Box component="img" src={line.image} alt={line.product}
                              sx={{ height: 32, width: 40, objectFit: "cover", borderRadius: 1 }} />
                          </TableCell>
                          <TableCell>{line.listPrice}</TableCell>
                          <TableCell>{line.quantity}</TableCell>
                          <TableCell>{line.amount}</TableCell>
                          <TableCell>
                            <Box sx={{ display: "flex", gap: 1 }}>
                              <IconButton size="small"><EditIcon fontSize="small" /></IconButton>
                              <IconButton size="small"><DeleteIcon fontSize="small" /></IconButton>
                            </Box>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Box>

                {/* Mobile cards */}
                <Box sx={{ display: { xs: "block", md: "none" }, px: 1.5, pb: 1 }}>
                  {orderLines.map((line, i) => (
                    <Card key={i} variant="outlined" sx={{ mb: 1.5 }}>
                      <CardContent sx={{ pb: 1 }}>
                        <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5, mb: 1 }}>
                          <Box sx={{ flex: 1, minWidth: 0 }}>
                            <Typography variant="subtitle2" noWrap title={line.product}>{line.product}</Typography>
                            <Typography variant="caption" sx={{ color: "primary.main", wordBreak: "break-all" }}>
                              {line.productNumber}
                            </Typography>
                          </Box>
                          <Box component="img" src={line.image} alt={line.product}
                            sx={{ height: 36, width: 46, objectFit: "cover", borderRadius: 1 }} />
                        </Box>

                        <Grid container spacing={1}>
                          <Grid size={{ xs: 6 }}>
                            <Typography variant="caption" sx={{ color: "text.secondary" }}>List Price:</Typography>
                            <Typography variant="body2">{line.listPrice}</Typography>
                          </Grid>
                          <Grid size={{ xs: 6 }}>
                            <Typography variant="caption" sx={{ color: "text.secondary" }}>Quantity:</Typography>
                            <Typography variant="body2">{line.quantity}</Typography>
                          </Grid>
                          <Grid size={{ xs: 12 }}>
                            <Typography variant="caption" sx={{ color: "text.secondary" }}>Amount:</Typography>
                            <Typography variant="subtitle2">{line.amount}</Typography>
                          </Grid>
                        </Grid>
                      </CardContent>
                      <CardActions sx={{ justifyContent: "flex-end", pt: 0 }}>
                        <IconButton size="small"><EditIcon fontSize="small" /></IconButton>
                        <IconButton size="small"><DeleteIcon fontSize="small" /></IconButton>
                      </CardActions>
                    </Card>
                  ))}
                </Box>

                {/* Comments */}
                <Box sx={{ p: { xs: 2, md: 3 } }}>
                  <TextField
                    fullWidth multiline minRows={3} placeholder="Comments"
                    value={orderData.comments}
                    onChange={(e) => setOrderData((p) => ({ ...p, comments: e.target.value }))}
                    sx={{ width: { xs: "100%", md: "60%", lg: "40%" } }}
                  />
                </Box>

                {/* Attachment */}
                <Box sx={{ px: 2, py: 1.5 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>Attachment</Typography>
                </Box>
                <Box sx={{ px: { xs: 2, md: 3 }, pb: 3 }}>
                  <Box
                    sx={{
                      border: "2px dashed",
                      borderColor: "divider",
                      borderRadius: 2,
                      p: 3,
                      width: { xs: "100%", md: "60%", lg: "40%" },
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      cursor: "pointer",
                      "&:hover": { borderColor: "text.secondary" }
                    }}
                  >
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>Drag and Drop</Typography>
                      <Typography variant="caption" sx={{ color: "text.secondary" }}>
                        Select a file or drop one here.
                      </Typography>
                    </Box>
                    <Typography variant="h4" sx={{ userSelect: "none" }}>+</Typography>
                  </Box>
                </Box>
              </Paper>
            </Container>
          </Box>

          {/* FIXED BOTTOM NAV (flush to bottom) */}
          <Paper
            elevation={8}
            sx={{
              position: "fixed",
              left: 0,
              right: 0,
              bottom: 0,
              borderRadius: 0,                       // flush with screen bottom
              // bgcolor: "#f1efed",                    // matches bg-[#f1efed]
              borderTop: (t) => `1px solid ${t.palette.divider}`, // border-t
              boxShadow: (t) => t.shadows[6],        // shadow-lg vibe
              zIndex: (t) => t.zIndex.appBar,        // keep above content
            }}
          >
           
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  overflowX: "auto",                 // overflow-x-auto
                  "&::-webkit-scrollbar": { display: "none" },
                  msOverflowStyle: "none",
                  scrollbarWidth: "none",
                  width: "100%",
                }}
              >
                {navItems.map((item, i) => {
                  const selected = navValue === i;
                  return (
                    <Box
                      key={item.label}
                      onClick={() => setNavValue(i)}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,                     // gap-1
                        color: selected ? "text.primary" : "text.secondary", // text-gray-600 -> hover 900
                        cursor: "pointer",
                        whiteSpace: "nowrap",
                        px: { xs: 2, md: 3 },         // px-4 md:px-6
                        py: 1.5,                       // py-3
                        borderTop: selected ? "3px solid #000" : "2px solid transparent",
                        "&:hover": {
                          color: "text.primary",
                          borderTopColor: selected ? "#000" : "currentColor", // hover:border-t-[2px]
                        },
                      }}
                    >
                      {/* Icon size ~ Tailwind h-5 w-5 */}
                      <IconButton
                        disableRipple
                        size="small"
                        sx={{
                          p: 0,
                          color: "inherit",
                          "&:hover": { backgroundColor: "transparent" },
                          mr: 0.5,
                        }}
                      >
                        {/* fontSize small ~ 20px */}
                        {React.cloneElement(item.icon, { fontSize: "small" })}
                      </IconButton>
                      <Typography variant="body2" sx={{ fontSize: 14 }}>
                        {item.label}
                      </Typography>
                    </Box>
                  );
                })}
              </Box>
          </Paper>
        </Box>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
