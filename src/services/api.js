/**
 * API Service Layer
 * Structured for future integration with FastAPI backend & Supabase PostgreSQL.
 * Currently provides typed contracts and frontend simulation with simulated network latency.
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/api";

export async function submitContactMessage(payload) {
  // Check if real FastAPI endpoint is configured in environment
  if (import.meta.env.VITE_API_URL) {
    try {
      const response = await fetch(`${API_BASE_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.detail || "Failed to submit message to FastAPI endpoint.");
      }

      return await response.json();
    } catch (err) {
      console.warn("Backend API request failed, falling back to simulated frontend response:", err);
      throw err;
    }
  }

  // Frontend-only simulation mode (ready for immediate FastAPI hookup)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        message: "Message recorded successfully in frontend buffer. Ready for FastAPI connection.",
        data: {
          ...payload,
          timestamp: new Date().toISOString(),
          status: "pending_backend_delivery"
        }
      });
    }, 850);
  });
}
